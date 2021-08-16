import { combineReducers } from 'redux';

const reducers = combineReducers({
  erase: () => 'this',
});

export type RootState = ReturnType<typeof reducers>;
