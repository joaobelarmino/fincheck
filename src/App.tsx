import Routes from "./Router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Toaster} from "react-hot-toast";
import {AuthContextProvider} from "./app/contexts/AuthContext.tsx";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Routes/>

        <Toaster/>
      </AuthContextProvider>
    </QueryClientProvider>
  )
}
