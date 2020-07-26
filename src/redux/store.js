import {createStore} from 'redux';
// import {applyMiddleware} from 'redux'
// import logger from 'redux-logger'
import rootReducer from './root-reducer'
import {persistStore} from 'redux-persist'


// const middlewares = [logger]


export const store = createStore(rootReducer)
export const persistor = persistStore(store)

