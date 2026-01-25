import path from "path";
import { fileURLToPath } from "url";
import { MainWindow } from "./MainWindow.js";

interface Store {
  mainWindow: MainWindow | null;
}
export const eStore: Store = {
  mainWindow: null,
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const preloadPath = path.join(__dirname, "preload.js");
export const webBaseUrl = 'http://localhost:5173';
