
import cn from 'classnames';
import './symbol-btn.css';

export  interface ISymbolBtn {
    children: JSX.Element;
    className?: string;
}

export const SymbolBtn = ({ children, className } : ISymbolBtn) => {
    return <button className={cn('symbol-btn', className )}>{children}</button>;
};
