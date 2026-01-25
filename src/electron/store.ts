import path from "path";
import { MainWindow } from "./MainWindow";

interface Store {
  mainWindow: MainWindow | null;
}
export const eStore: Store = {
  mainWindow: null,
};
export const preloadPath = path.join(__dirname, "preload.js");
