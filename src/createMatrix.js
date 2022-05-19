export const createMatrix = (height, width) => {
	if (!Number.isInteger(height) || !Number.isInteger(width)) {
		throw new TypeError('Parameters must be integer');
	}
	return new Array(height).fill(new Array(width).fill(false));
};
