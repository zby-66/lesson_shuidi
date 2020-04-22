import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input , Button,List} from 'antd';
import store from './store'
import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './store/actionTypes'
import {changeInputAction,addItemAction,deleteItemAction} from './store/actionCreators'
// const data=[
//     '事情一',
//     '事情二',
//     '事情三'
// ]

class TodoList extends Component {

    constructor(props){
        super(props)
        this.state= store.getState()
        this.changeInputValue=this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)//订阅
        this.clickBtn = this.clickBtn.bind(this)
    }
    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <Input placeholder={this.state.inputValue} 
                    style={{width:'250px',marginRight:'10px'}}
                    onChange={this.changeInputValue}
                    value={this.state.inputValue}
                    />
                    <Button type="primary" onClick={this.clickBtn}>增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item,index)=>(<List.Item onClick={this.deleteItem.bind(this.index)}>{item}</List.Item>)}
                        />
                </div>
            </div>
         );
    }
    changeInputValue(e){
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
    clickBtn(){
        console.log('xaiop');
        const action = addItemAction()
        store.dispatch(action);
    }
    deleteItem(index){
        console.log(index);
        const action = deleteItemAction(index)
        store.dispatch(action);
    }
}
 
export default TodoList;