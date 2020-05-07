import { createStore } from 'redux'
import reducer from './reducer'
// 单一状态数
// reducer reducer modules 合并城的
// react 最佳实战是什么样的， 
// 项目开发思想
const store = createStore(reducer);

export default store;