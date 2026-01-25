import { ipcRenderer, contextBridge } from "electron";

/**
 * 通用窗口函数调用封装
 *
 * 功能：统一的窗口操作接口，简化IPC调用
 * 原理：将窗口名称、事件名称和参数打包发送给主进程
 *
 * @param windowName 目标窗口名称（如：underlineWindow, screenWindow）
 * @param eventName 要执行的事件名称（如：showAtPosition, hideUnderlineWindow）
 * @param args 传递给事件的参数数组
 */
const windowFn = (windowName: string, eventName: string, args: any[]) => {
  ipcRenderer.invoke("window", {
    windowName,
    eventName,
    args,
  });
};

/**
 * 通用Electron API接口
 *
 * 提供基础的IPC通信功能，是所有Electron API的基础
 * 包含：消息监听、发送、调用和清理功能
 */
const commonElectronAPI: commonElectronAPI = {
  // ==================== IPC通信基础API ====================

  /**
   * 监听来自主进程的消息
   *
   * 用途：接收主进程发送的事件和数据
   * 场景：窗口状态变化通知、系统事件响应等
   *
   * @param channel 监听的频道名称
   * @param callback 消息处理回调函数
   */
  ipcOnMessage: (
    channel: string,
    callback: (event: Electron.IpcRendererEvent, ...args: any[]) => void,
  ) => ipcRenderer.on(channel, callback),

  /**
   * 向主进程发送消息（单向）
   *
   * 用途：发送不需要回复的消息
   * 场景：日志记录、状态更新等
   *
   * @param channel 发送的频道名称
   * @param args 消息参数
   */
  ipcSendMessage: (channel: string, ...args: any[]) =>
    ipcRenderer.send(channel, ...args),

  /**
   * 向主进程发送消息并等待回复（双向）
   *
   * 用途：需要主进程处理并返回结果的操作
   * 场景：文件操作、系统查询、窗口操作等
   *
   * @param channel 发送的频道名称
   * @param args 消息参数
   * @returns Promise<any> 主进程的回复
   */
  ipcInvokeMessage: (channel: string, ...args: any[]) =>
    ipcRenderer.invoke(channel, ...args),

  /**
   * 移除指定频道的所有监听器
   *
   * 用途：清理资源，防止内存泄漏
   * 场景：组件卸载、页面切换等
   *
   * @param channel 要清理的频道名称
   */
  removeAllListeners: (channel: string) =>
    ipcRenderer.removeAllListeners(channel),
};

const electronAPI: ElectronAPI = {
  ...commonElectronAPI,
  window: windowFn,
};

contextBridge.exposeInMainWorld("electronAPI", electronAPI);
