import { BrowserWindow } from "electron";
import { preloadPath, webBaseUrl, getBuildPath, isProduction } from "./store.js";

/**
 * 主窗口类
 */
export class MainWindow {
  window: BrowserWindow;
  constructor() {
    this.window = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: preloadPath,
      },
    });
    console.log(isProduction,"##F");
    // 根据环境变量选择加载方式
    if (isProduction) {
      // 生产环境：加载本地打包后的文件
      const buildPath = getBuildPath();
      this.window.loadFile(buildPath);
    } else {
      // 开发环境：加载开发服务器地址
      this.window.loadURL(`${webBaseUrl}/#/index`);
    }

    this.window.show();
  }
}
