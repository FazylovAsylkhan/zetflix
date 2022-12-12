import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { store } from './store';

export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;
export type IAppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  IRootState,
  unknown,
  AnyAction
>;
