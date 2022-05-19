import { isAlive } from './isAlive.js';

describe('Given function isAlive', () => {
	describe('When receive true, 1', () => {
		test('Then should be false', () => {
			const values = [true, 1];
			const expectedResult = false;
			const result = isAlive(...values);
			expect(result).toBe(expectedResult);
		});
	});
	describe('When receive true, 2', () => {
		test('Then should be true', () => {
			const values = [true, 2];
			const expectedResult = true;
			const result = isAlive(...values);
			expect(result).toBe(expectedResult);
		});
	});
	describe('When receive true, 3', () => {
		test('Then should be true', () => {
			const values = [true, 3];
			const expectedResult = true;
			const result = isAlive(...values);
			expect(result).toBe(expectedResult);
		});
	});
	describe('When receive true, 4', () => {
		test('Then should be false', () => {
			const values = [true, 4];
			const expectedResult = false;
			const result = isAlive(...values);
			expect(result).toBe(expectedResult);
		});
	});
	describe('When receive false, 2', () => {
		test('Then should be false', () => {
			const values = [false, 2];
			const expectedResult = false;
			const result = isAlive(...values);
			expect(result).toBe(expectedResult);
		});
	});
	describe('When receive false, 3', () => {
		test('Then should be true', () => {
			const values = [false, 3];
			const expectedResult = true;
			const result = isAlive(...values);
			expect(result).toBe(expectedResult);
		});
	});
	describe('When receive false, 4', () => {
		test('Then should be false', () => {
			const values = [false, 4];
			const expectedResult = false;
			const result = isAlive(...values);
			expect(result).toBe(expectedResult);
		});
	});
});
