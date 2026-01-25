// 通用electronAPI
interface commonElectronAPI {
  /* 移除ipc/window监听 */
  removeAllListeners: (channel: string) => void;
  /* 接收ipc/window信息 */
  ipcOnMessage: (
    channel: string,
    callback: (event: Electron.IpcRendererEvent, ...args: any[]) => void
  ) => void;
  /* 向主进程发送ipc/window信息 */
  ipcSendMessage: (channel: string, ...args: any[]) => void;
  /* 向主进程发送ipc/window信息并等待回复 */
  ipcInvokeMessage: (channel: string, ...args: any[]) => Promise<any>;
}

// 自定义electronAPI（用于和window通信）
interface ElectronAPI extends commonElectronAPI {
  /* 通用窗口方法 */
  window: (windowName: string, eventName: string, args: any[]) => void;
}

interface Window {
  electronAPI: ElectronAPI;
}