import React from "react";
import logo from "./logo.svg";
import "./App.css";
// electron调用NativeAPI 多进程架构
// Inter-Process Communication 进程间通信
// electron 不支持import
// create-react-app 0配置启动
import { ipcRenderer } from "electron"; // 去到ipc

function App() {
  return (
    <div className="App">
      xiaop
    </div>
  );
}

export default App;
