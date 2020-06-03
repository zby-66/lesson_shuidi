import React, { Component } from 'react';
// 服务器 没有click 事件
// 服务端： 1. 为了SEO ，为了性能 renderToString
// 客户端： 2. 为了交互，我们还要在前端进行 事件绑定

class Header extends Component {
  handleClick() {
    console.log('click')
  }
  render() {
    return (
      <button onClick={this.handleClick}> header </button>
    )
  }
}
export default Header;