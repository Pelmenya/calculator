import { useDispatch } from 'react-redux';
import { TAppDispatch } from '../redux/types/t-app-dispatch';

export const useAppDispatch: () => TAppDispatch = useDispatch;