import React from 'react';
import Context from './Context';
const { Consumer } = Context;
class Route extends React.Component {
  render() {
    const { path } = this.props
    // 全局地址栏
    return (
      <Consumer>
        {
          ({location,pathname}) => {
            // 地址栏
            // const { pathname } = location;
            const isMatch = pathname === path
            return isMatch && this.props.children
          }
        }
      </Consumer>
    )
  }
}


export default Route