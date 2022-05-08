// 该配置文件调用链路 git-hooks/commit-msg => rush command => autoinstaller => commitlint
// 可以引用到相应 autoinstaller 的依赖
const rushSDK = require("@rushstack/rush-sdk");
const path = require("path");
const rushConfiguration = rushSDK.RushConfiguration.loadFromDefaultLocation();

const packageNames = [];
const packageDirNames = [];

rushConfiguration.projects.forEach((project) => {
  packageNames.push(project.packageName);
  const dirName = path.parse(project.projectFolder).base;
  packageDirNames.push(dirName);
});

// 保证 scope 只能为 all/packageName/packageDirName
const allScope = ["all", ...packageDirNames, ...packageNames];

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [2, "always", allScope],
  },
};
