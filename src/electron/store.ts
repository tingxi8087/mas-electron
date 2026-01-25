import path from "path";
import { fileURLToPath } from "url";
import { app } from "electron";
import { MainWindow } from "./MainWindow.js";

interface Store {
  mainWindow: MainWindow | null;
}
export const eStore: Store = {
  mainWindow: null,
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * 是否为生产环境
 */
export const isProduction = process.env.NODE_ENV === "production" || !process.env.ELECTRON_IS_DEV;

/**
 * preload 文件路径
 */
export const preloadPath = path.join(__dirname, "preload.js");

/**
 * 开发环境的 web 服务地址
 */
export const webBaseUrl = "http://localhost:5173";

/**
 * 获取生产环境的静态文件路径
 */
export const getBuildPath = (): string => {
  if (!isProduction) {
    return "";
  }
  // 在生产环境中，使用 app.getAppPath() 获取应用路径
  // build 文件夹会被打包到应用目录中
  const appPath = app.getAppPath();
  return path.join(appPath, "build", "index.html");
};
