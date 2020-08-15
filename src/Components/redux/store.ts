import { createStore } from 'redux';
import { save } from './storeReducer';

export const store = createStore(save);