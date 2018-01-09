// keeps track of the data that we need to update through out the 
// application

import {applyMiddleware,createStore} from 'redux';

import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducers/review';

const middleware = applyMiddleware(promise(),thunk,createLogger())

export default createStore(reducer,middleware)