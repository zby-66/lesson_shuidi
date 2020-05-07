// reducer 是返回状态的函数， 对状态改变的约束的， 
// mutation概念
import { combineReducers } from 'redux-immutable';
// 在大型应用里， 每个模块的reducer, 建议放到applicaiton/page 组件模块下
// recommend  Router, 路由级别组件，  store 意义提升
// 数据流管理 更UI 模块在一起 组成业务模块
import { reducer as recommendReducer} from '../application/Recommend/store/index';
console.log(recommendReducer, '//////////+++++++++++++');


// reducer 常见的做法第一步， 将各个模块的reducer 汇合成一个reducer
export default combineReducers({
  // 之后开发具体功能模块的时候添加reducer
  recommend: recommendReducer,
});
