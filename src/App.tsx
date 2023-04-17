import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { wrapper } from './App.css';
import Main from './pages';
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className={wrapper}>
      <Main />
    </div>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default App;
