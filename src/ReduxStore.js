
import { createStore, combineReducers } from 'redux';
import UserReducer from './UserReducer';
// store main reducers sy pass hony wala data save krna
const rootReducer = combineReducers({
  users: UserReducer,
});

const store = createStore(rootReducer);

export default store;