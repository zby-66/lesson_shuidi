import React, { Component, Fragment } from 'react'
import XiaopItem from './xiaopItm'
import Dz from './Dz'
import './style.css'
import axios from 'axios'
class Xiaop extends Component {
    //在某一时刻，可以自动执行的函数
    constructor(props) {
        super(props)
        this.state = {
            inputValue: 'xiaop',
            list: ['游戏', '看书', '做饭']
        }
    }
    // componentWillMount(){
    //     console.log('componentWillMount-------组件将要挂载')
    // }

    // componentDidMount(){
    //     console.log('componentDidMount-----组件挂载完成')
    // }

    // shouldComponentUpdate(){
    //     console.log('shouldComponentUpdate------')
    //     return true
    // }
    // componentWillUpdate(){
    //     console.log('componentWillUpdate')
    // }
    // componentDidUpdate(){
    //     console.log('更新完成')
    // }
    // componentWillReceiveProps(){

    // }
    componentDidMount(){
        axios.post('https://juejin.im/post/5e971887e51d4546e347ea32?tdsourcetag=s_pctim_aiomsg')
            .then((res)=>{console.log('axios 获取数据成功'+JSON.stringify(res))})
            .catch((error)=>{console.log(error)})
    }
    render() {
        console.log('render-----组件挂载中')
        return (
            <Fragment>
                <div>
                    <label htmlFor="xiaop">添加技能:</label>
                    <input id="xiaop" 
                    className="input" 
                    value={this.state.inputValue} 
                    onChange={this.inputChange.bind(this)} 
                    ref ={(input)=>{this.input = input}}
                    />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul ref={(ul)=>{this.ul=ul}}>
                    {/* <li>学习</li>
                    <li>看剧</li> */}
                    {
                        this.state.list.map((item, index) => {
                            return (
                                    <XiaopItem 
                                    key={index+item}
                                    content ={item} 
                                    index={index}
                                    list={this.state.list}
                                    deleteItem={this.deleteItem.bind(this)}
                                    />
                                
                            )
                        })
                    }
                </ul>
                <Dz/>
            </Fragment>
        )
    }
    inputChange(e) {
        console.log(e.target.value);
        this.setState({
            inputValue: e.target.value
        })
    }
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        },()=>{
            console.log(this.ul.querySelectorAll('li').length)
        })
        
    }
    deleteItem(index) {
        // this.state.list.splice(index,1) 错误
        // this.setState({
        //     //list: this.state.list
        // })

        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}

export default Xiaop