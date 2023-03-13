import cn from 'classnames';

export interface IModeBtnProps {
    children: JSX.Element;
    active: boolean;
    text: string;
    onClick: () => void;
}

export const ModeBtn = ({
    active,
    text,
    onClick,
    children,
}: IModeBtnProps) => {
    return (
        <button
            className={cn('px-3 rounded-md button-mode', {
                'button-mode_active': active,
            })}
            onClick={onClick}
        >
            {children}
            {text}
        </button>
    );
};
