import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {reducer as formReducer} from 'redux-form';
import reducer from './reducer';

export default createStore(
  combineReducers({
    form: formReducer,
    state: reducer,
  }),
  applyMiddleware(thunk),
);