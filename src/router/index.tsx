import Layout from "@/layout/Layout";
import Index from "@/views/Index";
import { createBrowserRouter } from "react-router-dom";
// import { HashRouter } from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <>404</>,
    children: [
      {
        path: "/",
        element: <Index />,
      },
    ],
  },
  {
    path: "/test",
    element: <>测试页面</>,
    errorElement: <>404</>,
  },
]);
