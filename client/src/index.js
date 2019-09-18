import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import configureStore from './Redux/Store/configureStore'
import { startAddContact } from './Redux/Action/userAction'

const store = configureStore()

if(localStorage.getItem('userAuthToken')){
    store.dispatch(startAddContact())
}
const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));

