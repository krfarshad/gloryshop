import "../styles/globals.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
