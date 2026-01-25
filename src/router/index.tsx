import Layout from "@/layout/Layout";
import Index from "@/views/Index";
import { createHashRouter } from "react-router-dom";

/**
 * 使用 HashRouter 适配 Electron 的 file:// 协议
 * HashRouter 使用 # 号，不依赖服务器配置，适合 Electron 应用
 */
export const router = createHashRouter([
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
