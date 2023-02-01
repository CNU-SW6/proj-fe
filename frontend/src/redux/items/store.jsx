import { legacy_createStore as createStore } from 'redux';
import colorReducer from './colorReducer';

const store = createStore(colorReducer);

export default store;
