import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "@/features/auth/pages/login-page";
import MainLayout from "@/shared/components/converter/layout/main-layout";
import ConverterPage from "@/features/converter/pages/converter-page";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ConverterPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
