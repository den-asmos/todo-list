import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { todoReducer } from './todoReducer';
import { sortReducer } from './sortReducer';

const reducer = combineReducers({
	todo: todoReducer,
	sort: sortReducer,
});

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
