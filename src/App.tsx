import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { ThemeProvider } from 'styled-components';
import { lightTheme } from './utils/Themes';
import NavBar from './ui/NavBar';
import Home from './pages/Home';

const queryClient = new QueryClient();

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <div className="w-full h-screen flex flex-col bg-bg text-text_primary overflow-x-hidden overflow-y-hidden transition-all duration-200 ease-in">
            <NavBar />
            <Routes>
              <Route path="/" index element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            success: {
              duration: 3000,
              style: {
                backgroundColor: '#d4edda',
                color: '#155724',
                border: '1px solid #c3e6cb',
              },
            },
            error: {
              duration: 5000,
              style: {
                backgroundColor: '#f8d7da',
                color: '#721c24',
                border: '1px solid #f5c6cb',
              },
            },
            style: {
              fontSize: '16px',
              maxWidth: '500px',
              padding: '16px 24px',
            },
          }}
        />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
