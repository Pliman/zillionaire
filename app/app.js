/*
 * app.js 2017/1/9
 */

/**
 * app
 *
 * @author <a href="mailto:sunbin235@163.com">Pliman</a>
 * @version 1.0 2017/1/9 上午9:48
 */
let path = generatePath();

let stage = new PIXI.Container();
createBg(BG_PATH, stage);

console.log(path);
let runner = createRunner(stage);
console.log(runner);

function createBg(bgPath, stage) {
	let sprite = new PIXI.Sprite.fromImage(bgPath)

	// sprite.anchor.x = 0.5
	// sprite.anchor.y = 0.5
	//
	// sprite.position.x = BG_WIDTH / 2
	// sprite.position.y = BG_HEIGHT / 2

	sprite.width = BG_WIDTH
	sprite.height = BG_HEIGHT

	stage.addChild(sprite)

	// return sprite
}

var renderer = PIXI.autoDetectRenderer(BG_WIDTH, BG_HEIGHT, {backgroundColor: 0x1099bb});
document.body.appendChild(renderer.view);
adjustScreen();

// start animating
animate();
function animate() {
	requestAnimationFrame(animate);
	renderer.render(stage);
}

function getViewPortSize() {
	var o = {"w": NaN, "h": NaN};
	o.w = document.documentElement.clientWidth || document.body.clientWidth;
	o.h = document.documentElement.clientHeight || document.body.clientHeight;
	return o;
}

function adjustScreen() {
	var size = getViewPortSize();
	var scale = Math.min(size.w / BG_WIDTH, size.h / BG_HEIGHT);

	renderer.view.style.width = BG_WIDTH * scale + 'px';
	renderer.view.style.height = BG_HEIGHT * scale + 'px';

	// stage.scale.x = scale;
	// stage.scale.y = scale;
}

window.onresize = adjustScreen;
