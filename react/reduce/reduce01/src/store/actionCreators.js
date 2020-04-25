import {CHANGE_INPUT,DELETE_ITEM,ADD_ITEM,GET_LIST} from './actionTypes';
import { ChangeStream } from 'mongodb';

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