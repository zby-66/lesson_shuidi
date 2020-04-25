import React from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';
//无状态组件  性能高一些  没有业务逻辑只有ui时使用
const TodoListUI =(props)=>{
    return (
        <div style={{ margin: '10px' }}>
            <div>
                <Input
                    placeholder={props.inputValue}
                    style={{ width: '250px', marginRight: '10px' }}
                    onChange={props.changeInputValue}
                    value={props.inputValue}
                />
                <Button
                    type="primary"
                    onClick={props.clickBtn}
                >增加</Button>
            </div>
            <div style={{ margin: '10px', width: '300px' }}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (<List.Item onClick={() => { props.deleteItem(index) }}>{item}</List.Item>)}
                />
            </div>
        </div>
    );
}


export default TodoListUI;



// import store from './store'
// import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './store/actionTypes'
// import { changeInputAction, addItemAction, deleteItemAction } from './store/actionCreators'
// class TodoListUI extends Component {

//     render() {
//         return (
//             <div style={{ margin: '10px' }}>
//                 <div>
//                     <Input
//                         placeholder={this.props.inputValue}
//                         style={{ width: '250px', marginRight: '10px' }}
//                         onChange={this.changeInputValue}
//                         value={this.props.inputValue}
//                     />
//                     <Button
//                         type="primary"
//                         onClick={this.props.clickBtn}
//                     >增加</Button>
//                 </div>
//                 <div style={{ margin: '10px', width: '300px' }}>
//                     <List
//                         bordered
//                         dataSource={this.props.list}
//                         renderItem={(item, index) => (<List.Item onClick={() => { this.props.deleteItem(index) }}>{item}</List.Item>)}
//                     />
//                 </div>
//             </div>
//         );
//     }
// }

