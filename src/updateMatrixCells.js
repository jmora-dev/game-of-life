import { adjacentPositionsSpherical } from './adjacentPositionsSpherical.js';
import { calculateCellIsAlive } from './calculateCellIsAlive.js';

export const updateMatrixCells = (matrix) => {
	return matrix.map((row, y) => {
		return row.map((isAlive, x) => {
			const adjacentPos = adjacentPositionsSpherical(
				x,
				y,
				row.length - 1,
				matrix.length - 1
			);
			const adjacentAliveCount = adjacentPos.filter(
				(pos) => matrix[pos[1]][pos[0]] === true
			).length;
			return calculateCellIsAlive(isAlive, adjacentAliveCount);
		});
	});
};
