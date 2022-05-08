import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import NiceModal from '@ebay/nice-modal-react';

import { PageRoutes } from './routes';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NiceModal.Provider>
        <BrowserRouter>
          <PageRoutes />
        </BrowserRouter>
      </NiceModal.Provider>
    </QueryClientProvider>
  );
};
