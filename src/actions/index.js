export const GET_ROMAN_NOTATION = 'GET_ROMAN_NOTATION';

export function getRomanNotation(int) {
    return {
        type: GET_ROMAN_NOTATION,
        romanNumber: int
    }
}