import React, { Component } from 'react';
import PropTypes from 'prop-types'

class XioapItem extends Component {

    constructor(props){
        super(props)
        this.handleCilk=this.handleCilk.bind(this)
    }
    //组件第一次存在于dom中，函数是不会被执行
    //如果已经存在于dom中，函数才会被执行
    // componentWillReceiveProps(){
    //     console.log('child   componentWillReceiveProps')
    // }

    // componentWillUnmount(){
    //     console.log('child   componentWillUnmount 将要删除')
    // }

    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content!==this.props.content){
            return true;
        }
        return false;
    }
    render() { 
        console.log('child render')
        return ( 
        <li onClick={this.handleCilk}>{this.props.avname}我很会：{this.props.content}</li>
         );
    }
    handleCilk(){
        console.log(this.props.index)
        this.props.deleteItem(this.props.index)
    }
}

XioapItem.propTypes ={
    avname: PropTypes.string.isRequired,
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func
}
XioapItem.defaultProps ={
    avname: '小彭'
}
 
export default XioapItem;