import { Reducer } from './reducer';

const { createStore } = require('redux');

const items = createStore(Reducer);
