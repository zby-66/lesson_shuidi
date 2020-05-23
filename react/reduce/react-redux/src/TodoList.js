import React, { Component } from 'react';
//-----关键代码--------start
// import store from './store'
//-----关键代码--------end
import { connect } from 'react-redux'
const TodoList = (props) =>{
            let { inputValue ,inputChange,clickButton,list} = props
            return (
                <div>
                    <div>
                        {/* //-----关键代码--------start */}
                        <input value={inputValue} onChange={inputChange}/>
                        {/* //-----关键代码--------end */}
                        <button onClick={clickButton}>提交</button>
                    </div>
                    <ul>
                        {
                            list.map((item,index)=>{
                                return (<li key={index}>{item}</li>)
                            })
                        }
                    </ul>
                </div>
                );
    }

// class TodoList extends Component {
    
    //-----关键代码--------start
    // constructor(props){
    //     super(props)
    //     // this.state = store.getState()
    // }
    //-----关键代码--------end

// }

//映射 链接 props
const stateToProps = (state) => {
    return{
        inputValue: state.inputValue,
        list: state.list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        inputChange(e){
            let action = {
                type: 'change_input',
                value: e.target.value
            }
            dispatch(action)
        },
        clickButton(){
            let action = {type: 'add_item'}
            dispatch(action)
        }
    }
}

export default connect(stateToProps,dispatchToProps)(TodoList);