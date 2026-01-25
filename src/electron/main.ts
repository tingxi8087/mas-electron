import { app, ipcMain } from "electron";
import { MainWindow } from "./MainWindow.js";
import { eStore } from "./store.js";

const initWindow = () => {
  eStore.mainWindow = new MainWindow();
};
// 正确处理异步返回值（用await + 类型兼容）
app.whenReady().then(() => {
  // ===== 预置系统函数：windows通信 =====
  ipcMain.handle(
    "window",
    (_, data: { windowName: string; eventName: string; args: any[] }) => {
      (eStore as any)?.[data.windowName]?.[data.eventName]?.(...data.args);
    },
  );
  ipcMain.handle("app:quit", () => {});
  initWindow();
});

// 在退出前强制关闭所有窗口
app.on("before-quit", () => {});

// 当所有窗口都关闭时退出应用
app.on("window-all-closed", () => {});

app.on("activate", () => {});

