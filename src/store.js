import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer as formReducer} from 'redux-form';
import reducer from './reducer';

export default createStore(
  combineReducers({
    form: formReducer,
    state: reducer,
  }),
  composeWithDevTools(
  applyMiddleware(thunk)
  ),
);