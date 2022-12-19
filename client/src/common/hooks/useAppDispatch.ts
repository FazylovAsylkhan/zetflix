import { IAppDispatch } from '@app/store';
import { useDispatch } from 'react-redux';

export const useAppDispatch: () => IAppDispatch = useDispatch;
