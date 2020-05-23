import { fromJS } from 'immutable';

// 状态不可改变， 改变了就返回新的状态
const defaultState = fromJS({
  bannerList: []
});

console.log(defaultState,  '-------------')

export default (state = defaultState, action) => {
 
  return state;
}