import './details-group.css';

export  interface IDetailsGroup {
    children: JSX.Element;
}

export const DetailsGroup = ({ children }: IDetailsGroup) => {
    return (
        <div className="p-1 details-group">
            {children}
        </div>
    );
};
