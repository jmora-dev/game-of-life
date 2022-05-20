export const createMatrix = (height, width) => {
	if (!Number.isInteger(height) || !Number.isInteger(width)) {
		throw new TypeError('Parameters must be integer');
	}
	const matrix = [];
	for (let y = 0; y < height; y++) {
		const row = [];
		for (let x = 0; x < width; x++) {
			row.push(false);
		}
		matrix.push(row);
	}
	return matrix;
};
