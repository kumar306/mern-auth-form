import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducer/root_reducer';
import thunk from 'redux-thunk';
import { compose } from 'redux';

const InitialState={};

const middleware=[thunk];

const store = createStore(
        ()=>{},
        InitialState,
        compose (
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && 
        window.__REDUX_DEVTOOLS_EXTENSION__()
        ));
export default store;