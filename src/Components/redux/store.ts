import { createStore } from 'redux';
import { action } from './storeReducer';

export const store = createStore(action);