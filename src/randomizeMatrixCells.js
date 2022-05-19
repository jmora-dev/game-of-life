export const randomizeMatrixCells = (matrix) => {
	return matrix.map((row) =>
		row.map(() => Math.floor(Math.random() * 2) === 1)
	);
};
