import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { TAppState } from '../redux/types/t-app-state';

export const useAppSelector: TypedUseSelectorHook<TAppState> = useSelector;