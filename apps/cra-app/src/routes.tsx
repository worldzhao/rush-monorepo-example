import { set } from 'lodash-es';
import { ComponentType, lazy, Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

export function PageRoutes() {
  const routeConfig = generateRouteConfig();

  return useRoutes(routeConfig);
}

function generateRouteConfig(): RouteObject[] {
  const { $, ...pathConfig } = generatePathConfig();
  // 提取根路由的 layout
  return [
    {
      path: '/',
      element: wrapSuspense($),
      children: mapPathConfigToRoute(pathConfig),
    },
  ];
}

type IImporterFn = () => Promise<{ default: ComponentType }>;
type IPathConfig = Record<string, IImporterFn>;

/**
 * 根据 pages 目录生成路径配置
 */
function generatePathConfig() {
  const pathConfig = {};

  // 扫描 src/pages 下的所有具有路由文件
  require
    .context('./pages', true, /\w*\.(tsx)$/, 'lazy')
    .keys()
    .forEach((filePath) => {
      const routePath = filePath
        // 去除 ./ 不相关的字符
        .replace('./', '')
        // 去除文件名后缀
        .replace(/.tsx?/, '')
        // 转换动态路由 $[foo].tsx => :foo
        .replace(/\$\[([\w-]+)]/, ':$1')
        // 转换以 $ 开头的文件
        .replace(/\$([\w-]+)/, '$1')
        // 以目录分隔
        .split('/');

      // 使用 lodash.set 合并为一个对象
      set(pathConfig, routePath, () => import(`./pages/${filePath.replace('./', '')}`));
    });
  return pathConfig as {
    [path: string]: IPathConfig | IImporterFn;
    $: IImporterFn;
  };
}

/**
 * 将文件路径配置映射为 react-router 路由
 */
function mapPathConfigToRoute(cfg: Record<string, any>): RouteObject[] {
  // route 的子节点为数组
  return Object.entries(cfg).map(([routePath, child]) => {
    // () => import() 语法判断
    if (typeof child === 'function') {
      // 等于 index 则映射为当前根路由
      const isIndex = routePath === 'index';
      return {
        index: isIndex,
        path: isIndex ? undefined : routePath,
        // 转换为组件
        element: wrapSuspense(child),
      };
    }
    // 否则为目录，则查找下一层级
    const { $, ...rest } = child;
    return {
      path: routePath,
      // layout 处理
      element: wrapSuspense($),
      // 递归 children
      children: mapPathConfigToRoute(rest),
    };
  });
}

/**
 * 为动态 import 包裹 lazy 和 Suspense
 */
function wrapSuspense(importer?: IImporterFn) {
  if (!importer) {
    return undefined;
  }
  // 使用 React.lazy 包裹 () => import() 语法
  const Component = lazy(importer);

  // 结合 Suspense，这里可以自定义 loading 组件
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
