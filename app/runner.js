/*
 * runner.js 2017/1/9
 */

/**
 * runner
 *
 * @author <a href="mailto:sunbin235@163.com">Pliman</a>
 * @version 1.0 2017/1/9 上午9:51
 */
let runners = [{
	id: 1,
	pic: './resource/team1.png'
}, {
	id: 2,
	pic: './resource/team2.png'
}, {
	id: 3,
	pic: './resource/team3.png'
}, {
	id: 4,
	pic: './resource/team4.png'
}, {
	id: 5,
	pic: './resource/team5.png'
}, {
	id: 6,
	pic: './resource/team6.png'
}];

function createRunner(stage) {
	let boxWidth = BG_WIDTH / NUMBER_OF_POINTS_IN_ROW
	let boxHeight = BG_HEIGHT / NUMBER_OF_POINTS_IN_COLLUMN

	function addRunner(runner, x = boxWidth / 2, y = boxHeight / 2) {
		let sprite = new PIXI.Sprite.fromImage(runner.pic)

		sprite.anchor.x = 0.5
		sprite.anchor.y = 0.5

		sprite.position.x = x
		sprite.position.y = y

		stage.addChild(sprite)

		return sprite
	}

	let runnerArr = []

	runners.forEach(function (runner) {
		runnerArr.push(addRunner(runner))
	})

	return runnerArr
}
