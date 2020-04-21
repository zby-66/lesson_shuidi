const defaultState= {
    inputValue: 'xiaop',
    list:[
        '事情一',
        '事情二',
        '事情三'
    ]
}
export default (state = defaultState,action)=>{
    //reucer里只能接收state,不能直接改变state
    if(action.type === 'changeInput'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value
        return newState
    }
    return state
}