import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';
import reducers from './Reducers/CombineReducer';

const middleware=[thunk];

const store=configureStore(
    {reducer:reducers},
    composeWithDevTools(applyMiddleware(...middleware))

)
export default store;