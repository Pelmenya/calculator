import { operations } from '../../utils/constants/operations';
import { DetailsGroup } from '../details-group/details-group';
import { SymbolBtn } from '../symbol-btn/symbol-btn';

export const Operations = () => (
    <DetailsGroup>
        <div className="grid grid-cols-4 gap-2">
            {operations.map((operation) => (
                <SymbolBtn key={operation}>
                    <span>{operation}</span>
                </SymbolBtn>
            ))}
        </div>
    </DetailsGroup>
);
