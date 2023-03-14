import { parseOperations } from './parse-operations';

export function parseEqually(str: string) {
    return parseOperations(str, 1).replace('undefined', ''); //кривой эффект )))
}