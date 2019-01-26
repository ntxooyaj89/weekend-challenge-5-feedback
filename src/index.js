import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// setup to bring in redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const feelingReducer = (state = '', action) =>{
    if(action.type === 'FEELINGS'){
        return action.payload;
    }
    return state;
}

const understandingReducer = (state = '', action) =>{
    if(action.type === 'UNDERSTANDING'){
        return action.payload
    }
    return state;
}

const supportReducer = (state = '', action) => {
    if(action.type === 'SUPPORT'){
        return action.payload
    }
    return state;
}


//Create store
const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer
        
    }),
    applyMiddleware(logger),
);





ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
