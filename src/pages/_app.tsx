import "../styles/globals.css";
import {
  Hydrate,
  QueryClientProvider,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {  useState } from "react";
function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const dehydratedState = dehydrate(queryClient );
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={dehydratedState}>
            <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
export default MyApp;
