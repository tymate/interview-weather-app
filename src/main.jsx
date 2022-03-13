import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppProvider from './providers/AppProvider';
import { theme } from './ui';

const queryClient = new QueryClient();

console.log(theme);

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <AppProvider>
          <App />
        </AppProvider>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
