/*
 * runner.js 2017/1/9
 */

/**
 * runner
 *
 * @author <a href="mailto:sunbin235@163.com">Pliman</a>
 * @version 1.0 2017/1/9 上午9:51
 */
function createRunner (stage, index) {
	let fileName = 'team' + (index + 1)
	function addRunner(text, x=50, y=50) {
		let sprite = new PIXI.fromImage(`./resource/${fileName}.png`,)

		sprite.anchor.x = 0.5
		sprite.anchor.y = 0.5

		sprite.position.x = x
		sprite.position.y = y

		stage.addChild(sprite)

		return sprite
	}

	let runnerArr = []

	runners.forEach(function (runner, index) {
		runnerArr.push(addRunner(runner.text, index))
	})

	return runnerArr
}
