
import cn from 'classnames';
import { TBaseProps } from '../../redux/types/t-base-props';
import './symbol-btn.css';

export const SymbolBtn = ({ children, className } : TBaseProps) => {
    return <button className={cn('symbol-btn', className )}>{children}</button>;
};
