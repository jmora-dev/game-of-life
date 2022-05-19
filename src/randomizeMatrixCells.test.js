import { randomizeMatrixCells } from './randomizeMatrixCells.js';
import { createMatrix } from './createMatrix.js';

describe('Given function randomizeMatrixCells', () => {
	describe('When receive null', () => {
		test('Should be Error', () => {
			expect(() => randomizeMatrixCells(null)).toThrow(Error);
		});
	});

	describe('When receive a 50x50 matrix', () => {
		test('Should have some true and some false', () => {
			const value = createMatrix(50, 50);
			const result = randomizeMatrixCells(value);
			expect(
				result.some((row) => row.some((isAlive) => isAlive === false))
			).toBe(true);
			expect(
				result.some((row) => row.some((isAlive) => isAlive === true))
			).toBe(true);
		});
	});
});
