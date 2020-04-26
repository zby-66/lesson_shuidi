import React, { Component } from 'react';
import 'antd/dist/antd.css'
// import { Input , Button,List} from 'antd';
import store from './store'
// import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './store/actionTypes'
import {getTodoList,changeInputAction,addItemAction,deleteItemAction, getListAction,getMyListAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'
// import axios from 'axios'
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
        this.deleteItem = this.deleteItem.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
    }
    render() { 
        return ( 
            <TodoListUI
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                list ={this.state.list}
                deleteItem={this.deleteItem}
            />
         );
    }

    componentDidMount(){
            // const action = getTodoList()    
            // store.dispatch(action)
            const action = getMyListAction()
            store.dispatch(action)
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