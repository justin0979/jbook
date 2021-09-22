import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { persistMiddleware } from '&state/middlewares';

//import { ActionType } from './action-types';

export const store = createStore(
  reducers,
  {},
  applyMiddleware(persistMiddleware, thunk),
);

//store.dispatch({
//  type: ActionType.INSERT_CELL_AFTER,
//  payload: {
//    id: null,
//    type: 'code',
//  },
//});
//
//store.dispatch({
//  type: ActionType.INSERT_CELL_AFTER,
//  payload: {
//    id: null,
//    type: 'text',
//  },
//});
//
//store.dispatch({
//  type: ActionType.INSERT_CELL_AFTER,
//  payload: {
//    id: null,
//    type: 'code',
//  },
//});
//
//store.dispatch({
//  type: ActionType.INSERT_CELL_AFTER,
//  payload: {
//    id: null,
//    type: 'text',
//  },
//});

// const state = store.getState();
// console.log(state);
