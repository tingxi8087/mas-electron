import { webBaseUrl } from "@/utils";
import { BrowserWindow } from "electron";
import { preloadPath } from "./store";

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
    this.window.loadURL(`${webBaseUrl}/#/index`);
    this.window.show();
  }
}
