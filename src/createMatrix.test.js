import { createMatrix } from './createMatrix.js';

describe('Given function createMatrix', () => {
	describe('When receive null', () => {
		test('Should be TypeError', () => {
			const values = [null];
			expect(() => createMatrix(...values)).toThrow(TypeError);
		});
	});

	describe('When receive 1, null', () => {
		test('Should be TypeError', () => {
			const values = [1, null];
			expect(() => createMatrix(...values)).toThrow(TypeError);
		});
	});

	describe('When receive 2,2', () => {
		test('Should be [[false, false],[false, false]]', () => {
			const values = [2, 2];
			const result = createMatrix(...values);
			const expectedResult = [
				[false, false],
				[false, false],
			];
			expect(result).toEqual(expectedResult);
		});
	});
});
