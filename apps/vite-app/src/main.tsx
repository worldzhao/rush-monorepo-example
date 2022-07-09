import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, useRoutes } from 'react-router-dom';

import routes from '~react-pages';

import NiceModal from '@ebay/nice-modal-react';
import { sum } from '@rush-monorepo/example-pkg-basic';

import './index.scss';

console.log('1 + 1 =', sum(1, 1));

const queryClient = new QueryClient();

const App = () => {
  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NiceModal.Provider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NiceModal.Provider>
    </QueryClientProvider>
  </React.StrictMode>,
);
