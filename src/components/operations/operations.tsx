import { useAppSelector } from '../../hooks/use-app-selector';
import { getDetailsState } from '../../redux/selectors/details';
import { TCalculatorContainer } from '../../redux/types/t-calculator-container';
import { operations } from '../../utils/constants/operations';
import { DetailsGroup } from '../details-group/details-group';
import { SymbolBtn } from '../symbol-btn/symbol-btn';
import cn from 'classnames';
import { TOperations } from '../../utils/types/t-operations';

export const Operations = ({ type }: TCalculatorContainer) => {
    const { details } = useAppSelector(getDetailsState);

    return (
        <DetailsGroup name="operations" type={type}>
            <div className="grid grid-cols-4 gap-2">
                {operations.map((operation) => (
                    <SymbolBtn
                        key={operation}
                        operation={operation as TOperations}
                        className={cn({
                            ['cursor-move']:
                                details.includes('operations') ||
                                type === 'constructor',
                            ['cursor-no-drop']:
                                !details.includes('operations') &&
                                type !== 'constructor',
                        })}
                    >
                        <span>{operation}</span>
                    </SymbolBtn>
                ))}
            </div>
        </DetailsGroup>
    );
};
