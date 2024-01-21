import { useState } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchParams from "./lib/components/SearchParams";
import DetailsWithErrorBoundary from "./lib/components/Details";
import AdoptedPetContext from "./lib/hooks/AdoptedPetContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null);

  const randomWallpaper = ["A", "B", "C"][Math.floor(Math.random() * 3)];
  return (
    <div
      className="m-0 p-0"
      style={{
        background: `url(http://pets-images.dev-apis.com/pets/wallpaper${randomWallpaper}.jpg`,
      }}
    >
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AdoptedPetContext.Provider value={adoptedPet}>
            <header className="mb-10 w-full bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500 p-7 text-center">
              <Link className="text-6xl text-white hover:text-gray-200" to="/">
                Adopt me
              </Link>
            </header>
            <Routes>
              <Route
                path="/details/:id"
                element={<DetailsWithErrorBoundary />}
              ></Route>
              <Route path="/" element={<SearchParams />}></Route>
            </Routes>
          </AdoptedPetContext.Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
