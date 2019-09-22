import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../Reducer/userReducer'
import orderReducer from '../Reducer/orderReducer'
import brandReducer from '../Reducer/brandReducer'
import typeReducer from '../Reducer/typeReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        user: userReducer,
        type: typeReducer,
        order: orderReducer,
        brand: brandReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore
