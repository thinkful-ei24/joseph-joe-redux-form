import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'react-form';
import reducer from './reducer';

export default createStore(
  combineReducers({
    form: formReducer,
    state: reducer,
  })
);