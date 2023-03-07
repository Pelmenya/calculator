import './display.css';
import { DetailsGroup } from '../details-group/details-group';
import cn from 'classnames';

export interface IDisplay {
    children: JSX.Element;
}
export const Display = ({ children }: IDisplay) => (
    <DetailsGroup>
        <div
            className={cn(
                'flex h-[52px] bg-gray-100 rounded-md items-center justify-end',
                'px-2 text-4xl font-extrabold text-gray-900',
            )}
        >
            {children}
        </div>
    </DetailsGroup>
);
