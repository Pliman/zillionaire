/*
 * path.js 2017/1/9
 */

/**
 * path
 *
 * @author <a href="mailto:sunbin235@163.com">Pliman</a>
 * @version 1.0 2017/1/9 上午9:03
 */
function generatePath() {
	let path = []

	let boxWidth = BG_WIDTH / NUMBER_OF_POINTS_IN_ROW
	let boxHeight = BG_HEIGHT / NUMBER_OF_POINTS_IN_COLLUMN

	generateBottomRow(path, boxWidth, boxHeight)
	generateLeftColumn(path, boxWidth, boxHeight)
	generateTopRow(path, boxWidth, boxHeight)
	generateRightColumn(path, boxWidth, boxHeight)

	return path;
}

function generateBottomRow(pathArr, boxWidth, boxHeight) {
	for (let boxIndex = 0; boxIndex < NUMBER_OF_POINTS_IN_ROW; boxIndex++) {
		pathArr.push({
			id: boxIndex + 1,
			center: {
				x: BG_WIDTH - boxWidth / 2 - boxIndex * boxWidth,
				y: BG_HEIGHT - boxHeight / 2
			}
		});
	}
}

function generateLeftColumn(pathArr, boxWidth, boxHeight) {
	let iterateTimes = NUMBER_OF_POINTS_IN_COLLUMN - 2

	for (let boxIndex = 1; boxIndex <= iterateTimes; boxIndex++) {
		pathArr.push({
			id: boxIndex + NUMBER_OF_POINTS_IN_ROW,
			center: {
				x: boxWidth / 2,
				y: BG_HEIGHT - boxHeight / 2 - boxIndex * boxHeight
			}
		});
	}
}

function generateTopRow(pathArr, boxWidth, boxHeight) {
	for (let boxIndex = 0; boxIndex < NUMBER_OF_POINTS_IN_ROW; boxIndex++) {
		pathArr.push({
			id: boxIndex - 1 + NUMBER_OF_POINTS_IN_ROW + NUMBER_OF_POINTS_IN_COLLUMN,
			center: {
				x: boxWidth / 2 + boxIndex * boxWidth,
				y: boxHeight / 2
			}
		});
	}
}

function generateRightColumn(pathArr, boxWidth, boxHeight) {
	let iterateTimes = NUMBER_OF_POINTS_IN_COLLUMN - 2

	for (let boxIndex = 1; boxIndex <= iterateTimes; boxIndex++) {
		pathArr.push({
			id: boxIndex + 2*NUMBER_OF_POINTS_IN_ROW + iterateTimes,
			center: {
				x: BG_WIDTH - boxWidth / 2,
				y: boxHeight / 2 + boxIndex * boxHeight
			}
		});
	}
}
