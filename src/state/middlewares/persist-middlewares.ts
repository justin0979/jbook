import { Dispatch } from 'redux';
import { Action } from '&state/actions';
import { ActionType } from '&state/action-types';
import { saveCells } from '&state/action-creators';
import { RootState } from '&state/reducers';

export const persistMiddleware = ({
  dispatch,
  getState,
}: {
  dispatch: Dispatch<Action>;
  getState: () => RootState;
}) => {
  let timer: any;

  return (next: (action: Action) => void) => (action: Action) => {
    next(action);

    if (
      [
        ActionType.MOVE_CELL,
        ActionType.UPDATE_CELL,
        ActionType.INSERT_CELL_AFTER,
        ActionType.DELETE_CELL,
      ].includes(action.type)
    ) {
      // DEBOUNCING to not POST on every key press
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        saveCells()(dispatch, getState);
      }, 450);
    }
  };
};
