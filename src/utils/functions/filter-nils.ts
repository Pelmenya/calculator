import { operations } from '../constants/operations';

export function filterNils(str: string): string {
    if (str.length > 1) {
        const firstChar = str.charAt(0);
        const secondChar = str.charAt(1);

        if (firstChar === '0' && (secondChar === '0')) {
            return firstChar;
        }
        if (firstChar === '0' && (secondChar !== '0') && (secondChar !== ',') && !operations.includes(secondChar)) {
            return secondChar;
        }
    }

    return str;
}