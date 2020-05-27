import React from 'react';
import Context from './Context';
const { Provider, Consumer } = Context;
// babel
// {} 用来导入 
// named import  
// import { a, b } from './Context'
// Provider 生产者： 把 xx 当做全局变量
// Consumer 消费者： 把 xx 取下来
// 匹配当前 浏览器url 和当前的 
// <Route path="/users"><Users /> </Route>
// path 这个 prop，能不能匹配上，匹配上了就展示，否则
// 在 react 里面有一些数据 跨组件传递
// history：当前浏览器地址栏 是想告诉所有的 Route 组件
// history 当做 全局变量处理， 
// 什么东西 history 当做全局变量
// Context
/* <BrowserRouter>
//Link
//code
</BrowserRouter> */
class BrowserRouter extends React.Component {
  // location 直接 从 window.location DOM 浏览器
  // 不能够放在 服务端使用的
  handlePathNameChange = (pathname) => {
    console.log(pathname)
    const history = this.state.history;
    
    this.setState({
      history: {
        ...history,
        pathname
      }
    })
  }
  state = {
    history: {
      location: window.location,
      pathname: window.location.pathname,
      handlePathNameChange: this.handlePathNameChange
    }
  }
  render() {
    return (
       <Provider value={{...this.state.history}}>
         { this.props.children }
       </Provider>
    );
  }
}

export default BrowserRouter;