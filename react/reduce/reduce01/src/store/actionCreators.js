import {GET_MYLIST_ACTION,CHANGE_INPUT,DELETE_ITEM,ADD_ITEM,GET_LIST} from './actionTypes';
import  axios from 'axios'
export const changeInputAction = (value) =>({
    type: CHANGE_INPUT,
    value
})
export const addItemAction = () =>({
    type: ADD_ITEM,
})
export const deleteItemAction = (index) =>({
    type: DELETE_ITEM,
    index
})

export const getListAction = (data) =>({
    type: GET_LIST,
    data
})

export const getTodoList =() =>{
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
            console.log(res); 
            const data = res.data
            const action = getListAction(data)
            dispatch(action)       
        })
    }
}


export const getMyListAction =() =>({
    type : GET_MYLIST_ACTION
})