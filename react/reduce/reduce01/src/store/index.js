import { createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import mySagas from './sagas'
// import mysaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

//增强函数 配置 redux-thunk
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__?
    window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__({}):compose

// const enhancer = composeEnhancers(applyMiddleware(thunk))
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(//因为store中只接收两个参数
    reducer,
    enhancer
    // applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    sagaMiddleware.run(mySagas)
export default store;