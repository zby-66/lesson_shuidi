import {takeEvery, put} from 'redux-saga/effects'
import { GET_MYLIST_ACTION } from './actionTypes'
import { getListAction } from './actionCreators'
import  axios from 'axios'


function* mysaga(){
    yield takeEvery(GET_MYLIST_ACTION,getList)
}
function* getList(){
    // axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
    //     console.log(res); 
    //     const data = res.data
    //     const action = getListAction(data)
    //     put(action)       
    // })
    const res = yield axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
    const action = getListAction(res.data)
    yield put(action)
}
export default mysaga