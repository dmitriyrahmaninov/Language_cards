import { combineReducers, createStore } from 'redux';
import { languageReducer } from './reducer/languageReducer';

const rootReducer = combineReducers({
    language: languageReducer
})

export const store = createStore(rootReducer);