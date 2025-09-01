import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./router/RouterProvider";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider, Helmet } from '@dr.pogodin/react-helmet';
import AuthProvider from "./Provider/AuthProvider";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className="max-w-7xl mx-auto mt-18">
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
