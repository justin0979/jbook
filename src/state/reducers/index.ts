import { combineReducers } from 'redux';
import cellsReducer from './cellsReducer';

const reducers = combineReducers({
  celss: cellsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
