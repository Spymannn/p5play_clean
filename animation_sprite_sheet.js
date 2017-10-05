//Creating animations from sprite sheets
// var sprite_sheet_image;
// var sprite_sheet;
// var explode_animation;

let introImg;
let introTimeout = 200;
let isIntro = true;
let introSprite;

function preload() {
  // specify width and height of each frame and number of frames
  // sprite_sheet = loadSpriteSheet('assets/explode_sprite_sheet.png', 171, 158, 11);
  // explode_animation = loadAnimation(sprite_sheet);

  // load the full sprite sheet for example reference only
  // sprite_sheet_image = loadImage('assets/explode_sprite_sheet.png');
  introImg = loadImage('assets/spyman-a-week-a-game.png');
}

function setup() {
  createCanvas(800, 400);
  background(255);
}

function draw() {
  if (frameCount%introTimeout === 0) {
    console.log('false : ', isIntro);
    isIntro = false;
  }

  if (isIntro) {
    intro();
  } else {
    // introSprite.
    launchGame();
  }

  // clear();

  // animate the sprite sheet
  // animation(explode_animation, 100, 130);

  // show full sheet for example reference
  // image(sprite_sheet_image, 250, 40, 500, 154);
}

function launchGame() {
  removeSprite(introSprite);//.remove();
}

function intro() {
  introSprite = createSprite(0, 0);
	introSprite.addImage(introImg);
  drawSprites(introSprite);
}
