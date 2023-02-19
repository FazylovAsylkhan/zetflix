import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { IAppDispatch, IRootState } from './types';

export const useAppDispatch: () => IAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
