import React from 'react';
import Context from './Context';
const { Consumer } = Context;
class Link extends React.Component {
  handleClick = (e) => {
    // a 默认跳转
    e.preventDefault();
    // 组件 切换出来
    // 组件 能不能出来 靠什么控制
    // pathname 匹配
    // pathname 在哪？ provider
    // pathname 发生变化
    // update pathname
    // setState()

  }
  render() {
    return (
      <Consumer>
        {
          ({handlePathNameChange}) => {
            return (
              <a onClick={(e) => {
                e.preventDefault();
                // h5 
                window.history.pushState({}, '', this.props.to);
                handlePathNameChange(this.props.to)
              }}>
              { this.props.children }
            </a>
            )
          }
        }
      </Consumer>
    )
  }
}
export default Link;