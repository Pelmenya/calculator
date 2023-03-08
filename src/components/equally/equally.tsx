import './equally.css';
import { DetailsGroup } from '../details-group/details-group';
import { TCalculatorContainer } from '../../redux/types/t-calculator-container';

export const Equally = ({ type }: TCalculatorContainer) => (
    <DetailsGroup name="equally" type={type}>
        <div className="flex items-center justify-center h-16 rounded-md equally text-white bg-iris-100">
            <span>=</span>
        </div>
    </DetailsGroup>
);
