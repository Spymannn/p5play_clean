let introImg;
let introTimeout = 200;
let isIntro = true;
let introSprite;
let introGroup;

function preload() {
  loadIntro();
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  if (isIntro) {
    intro();
  } else {
    launchGame();
  }
}

// loading functions
function loadIntro() {
  introImg = loadImage('assets/spyman-a-week-a-game.png');
  introGroup = new Group();

}

// draw functions
function launchGame() {
}

function intro() {
  introSprite = createSprite(width/2, height/2);
	introSprite.addImage(introImg);
  introGroup.add(introSprite);
  drawSprites(introGroup);
  if (frameCount%introTimeout === 0) {
    isIntro = false;
    clear();
    background(0);
  }
}
