import { updateMatrixCells } from './updateMatrixCells.js';
import { createMatrix } from './createMatrix.js';

describe('Given function updateMatrixCells', () => {
	describe('When receive null', () => {
		test('Then should throw a TypeError', () => {
			const values = [null];
			expect(() => updateMatrixCells(...values)).toThrow(Error);
		});
	});

	describe('When receive "text"', () => {
		test('Then should throw a TypeError', () => {
			const values = ['text'];
			expect(() => updateMatrixCells(...values)).toThrow(Error);
		});
	});

	describe('When receive 3x3 matrix [[false, false, false],[false, true, false],[false, false, false]]', () => {
		test('Then should be [[false, false, false],[false, false, false],[false, false, false]]', () => {
			const value = createMatrix(3, 3);
			value[1][1] = true;
			const result = updateMatrixCells(value);
			const expectedResult = createMatrix(3, 3);
			expect(result).toEqual(expectedResult);
		});
	});
	describe('When receive 3x3 matrix with a line 3x1 in the middle', () => {
		test('Then should be 3x3 matrix with a line 1x3 in the middle', () => {
			const value = createMatrix(5, 5);
			value[1][2] = true;
			value[2][2] = true;
			value[3][2] = true;
			const result = updateMatrixCells(value);
			const expectedResult = createMatrix(5, 5);
			expectedResult[2][1] = true;
			expectedResult[2][2] = true;
			expectedResult[2][3] = true;
			expect(result).toEqual(expectedResult);
		});
	});
});
