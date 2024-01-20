import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import DetailsWithErrorBoundary from "./Details";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <header>
        <Link to="/">Adopt me</Link>
      </header>
      <Routes>
        <Route
          path="/details/:id"
          element={<DetailsWithErrorBoundary />}
        ></Route>
        <Route path="/" element={<SearchParams />}></Route>
      </Routes>
    </QueryClientProvider>
  </BrowserRouter>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
