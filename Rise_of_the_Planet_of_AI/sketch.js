// class that handles the background elements on the game
class Background {
  constructor() {
    this.img = loadImage("images/bg.png");
    this.xShift = 0;
  }

  // method to display background on screen
  display() {
    // shifting background by 1 on every frame
    this.xShift += 1;

    if (this.xShift >= this.img.width - width) {
      this.xShift = 0;
    }
    imageMode(CORNER);
    image(
      this.img,
      0,
      0,
      width,
      height,
      this.xShift % this.img.width,
      0,
      width,
      height
    );
    imageMode(CENTER);
  }
}

// main character of the game
class IronMan {
  constructor() {
    this.position = createVector(100, random(100, height / 1.5));
    this.img = loadImage("images/ironman.png");

    this.imgCount = 5;
    this.cropStart = 0;

    this.rotation = 0;

    this.size = 120;
    this.speed = 2;
  }

  // method to display Iron Man on screen
  display() {
    push();
    imageMode(CENTER);
    translate(this.position.x, this.position.y);
    rotate(this.rotation);
    image(
      this.img,
      0,
      0,
      this.size,
      this.size,
      this.cropStart * (this.img.width / this.imgCount),
      0,
      this.img.width / this.imgCount,
      this.img.height
    );
    pop();

    // for character animation
    if (frameCount % 5 == 0 || frameCount == 1) {
      if (this.cropStart < this.imgCount - 1) {
        this.cropStart++;
      } else {
        this.cropStart = 0;
      }
    }
  }

  // method to update rotation
  update() {
    let increment = 0;
    if (
      this.position.y + increment < height - this.size / 2 &&
      this.position.y + increment > this.size / 2
    ) {
      this.position.y += increment;
    }
  }
}

// class for the enemy
class Robot {
  constructor() {
    this.position = createVector(width + 200, random(100, height / 1.2));
    this.img = loadImage("images/enemy.png");

    this.imgCount = 5;
    this.size = 200;
    this.cropStart = 0;

    this.speed = random(2, 5);
  }

  // method to display robot enemy on screen
  display() {
    let ratio = float(this.img.height / (this.img.width / this.imgCount));

    image(
      this.img,
      this.position.x,
      this.position.y,
      this.size,
      this.size * ratio,
      this.cropStart * (this.img.width / this.imgCount),
      0,
      this.img.width / this.imgCount,
      this.img.height
    );

    this.update();

    // for enemy animation
    if (frameCount % 10 == 0 || frameCount == 1) {
      if (this.cropStart < this.imgCount - 1) {
        this.cropStart++;
      } else {
        this.cropStart = 0;
      }
    }
  }

  // method to update enemy's position & check if it collides with iron man or missiles
  update() {
    this.position.x -= this.speed;

    if (this.position.x < -200) {
      game.robots.splice(game.robots.indexOf(this), 1);
      game.missed++;

      if (game.missed > 7) {
        game.screen = 2;
      }
    }

    for (let i = 0; i < game.missiles.length; i++) {
      let missile = game.missiles[i];
      if (
        dist(
          missile.position.x,
          missile.position.y,
          this.position.x,
          this.position.y
        ) <
        this.size / 2
      ) {
        // on collision, trigger an explosion
        game.explosions.push(
          new Explosion(missile.position.x + 30, missile.position.y)
        );

        explosionAudio.play();

        game.missiles.splice(game.missiles.indexOf(missile), 1);
        game.robots.splice(game.robots.indexOf(this), 1);

        game.score += 10;
        if (game.score >= 80) {
          game.win = true;
          game.screen = 2;
        }
      }
    }

    // check collision
    if (
      dist(
        game.ironman.position.x,
        game.ironman.position.y,
        this.position.x,
        this.position.y
      ) <
      game.ironman.size / 2 + this.size / 4
    ) {
      game.screen = 2;
      gameoverAudio.play();
    }
  }
}

// class for missiles
class Missile {
  constructor() {
    this.img = loadImage("images/missile.png");
    this.position = createVector(
      game.ironman.position.x + 20,
      game.ironman.position.y + 35
    );

    this.cropStart = 0;
    this.imgCount = 5;
    this.size = 80;
  }

  display() {
    let ratio = float(this.img.height / (this.img.width / this.imgCount));

    image(
      this.img,
      this.position.x,
      this.position.y,
      this.size,
      this.size * ratio,
      this.cropStart * (this.img.width / this.imgCount),
      0,

      this.img.width / this.imgCount,
      this.img.height
    );

    this.update();

    if (frameCount % 7 == 0 || frameCount == 1) {
      if (this.cropStart < this.imgCount - 1) {
        this.cropStart++;
      } else {
        this.cropStart = 0;
      }
    }
  }

  update() {
    this.position.x += 3;

    if (this.position.x >= width + 50) {
      game.missiles.splice(game.missiles.indexOf(this), 1);
    }
  }
}

// class for explosions on collision
class Explosion {
  constructor(x, y) {
    this.position = createVector(float(x), float(y));
    this.img = loadImage("images/explosion.png");

    this.cropStart = 0;
    this.imgCount = 5;
    this.size = 100;
  }

  display() {
    if (this.cropStart < this.imgCount) {
      image(
        this.img,
        this.position.x,
        this.position.y,
        this.size,
        this.size,
        this.cropStart * (this.img.width / this.imgCount),
        0,

        this.img.width / this.imgCount,
        this.img.height
      );
      if (frameCount % 10 == 0) {
        this.cropStart++;
      }
    } else {
      game.explosions.splice(game.explosions.indexOf(this), 1);
    }
  }
}

// buttons for main menu
class Button {
  constructor(x, y, txt) {
    this.position = createVector(float(x), float(y));
    this.txt = txt;

    this.w = 100;
    this.h = 40;
  }

  display() {
    rectMode(CENTER);
    noFill();
    stroke(255);
    strokeWeight(2);
    rect(this.position.x, this.position.y, this.w, this.h);
    strokeWeight(0);

    textAlign(CENTER);
    textSize(18);
    fill(255);
    text(this.txt, this.position.x, this.position.y + 7);

    this.handleClick();
  }

  handleClick() {
    if (mP) {
      if (
        abs(mouseX - this.position.x) < this.w / 2 &&
        abs(mouseY - this.position.y) < this.h / 2
      ) {
        switch (this.txt) {
          case "PLAY":
            game.restart();
            game.screen = 1;
            break;
          case "EXIT":
            game.screen = 3;
            break;
          case "RESTART":
            game.restart();
            break;
        }
      }
    }
  }
}

// main game class
class Game {
  constructor() {
    textFont("Georgia");
    this.screen = this.score = this.missed = 0;

    this.scoreColor = color(255, 255, 255);

    this.background = new Background();
    this.ironman = new IronMan();

    this.robots = [];
    this.missiles = [];
    this.explosions = [];

    this.win = false;
  }

  update() {
    this.background.display();

    switch (this.screen) {
      case 0: {
        fill(this.scoreColor);
        textSize(60);
        textAlign(CENTER);
        text("Rise of the Planet of AI", width / 2, height / 3.5);
        textSize(30);
        text("Humanity at Risk", width / 2, height / 3.5 + 50);

        let play = new Button(width / 2, height / 3.5 + 100, "PLAY");
        play.display();

        break;
      }

      case 1: {
        this.ironman.display();

        // for enemy entrance on screen
        if (frameCount % 100 == 0) {
          if (this.robots.length < 3) {
            this.robots.push(new Robot());
          }
        }

        // render available robots, missiles & explosions on screen
        for (let i = 0; i < this.robots.length; i++) {
          this.robots[i].display();
        }

        for (let i = 0; i < this.missiles.length; i++) {
          this.missiles[i].display();
        }

        for (let i = 0; i < this.explosions.length; i++) {
          this.explosions[i].display();
        }

        this.showScores();

        if (mousePressed) {
          this.mouseHandler();
        }

        break;
      }

      // game over screen/win screen
      case 2: {
        fill(this.scoreColor);
        textSize(60);
        textAlign(CENTER);
        text(
          this.win ? "Congratulations!" : "GAME OVER",
          width / 2,
          height / 3.5
        );
        textSize(20);
        text(
          this.missed > 5
            ? "YOU'VE MISSED MANY BOTS"
            : this.win
            ? "YOU'VE SAVED HUMANITY"
            : "AI HAS TAKEN OVER THE EARTH",
          width / 2,
          height / 3.5 + 40
        );

        let restart = new Button(
          width / 2 - 110 / 2,
          height / 3.5 + 90,
          "RESTART"
        );
        restart.display();

        let exit = new Button(width / 2 + 110 / 2, height / 3.5 + 90, "EXIT");
        exit.display();
        this.showScores();
        break;
      }

      case 3: {
        this.screen = 0;
      }
    }
  }

  showScores() {
    textAlign(RIGHT);
    fill(this.scoreColor);
    textSize(35);
    text("SCORE", width - 10, 35);
    textSize(28);
    text(this.score, width - 10, 65);

    textAlign(LEFT);
    textSize(35);
    text("MISSED", 10, 35);
    textSize(28);
    text(this.missed, 10, 65);
  }

  mouseHandler() {
    this.ironman.update();
  }

  restart() {
    game = new Game();
    game.screen = 1;
  }
}

var game;
let canvas, capture;

let poseNet,
  poses = [];

let cy,
  timePose,
  timeMissile,
  mP = false;

function setup() {
  canvas = createCanvas(1100, 684);
  capture = createCapture(VIDEO);
  capture.size(250, 0.75 * 250);

  timePose = timeMissile = millis();
  cy = height / 2;

  poseNet = ml5.poseNet(capture, () => {
    console.log("READY");
  });

  poseNet.on("pose", function (poses) {
    // in case there is at least one pose detected
    if (poses.length > 0) {
      let y = poses[0].pose.rightWrist.y;
      let conf = poses[0].pose.rightWrist.confidence;

      let fireConf = poses[0].pose.leftWrist.confidence;

      // fire missile only when confidence of left wrist is > 0.1
      if (
        fireConf > 0.1 &&
        game.missiles.length < 4 &&
        millis() - timeMissile > 500
      ) {
        if (game.screen == 1) {
          game.missiles.push(new Missile());
          missileAudio.play();
          timeMissile = millis();
        }
      }

      // move only when confidence is > 0.1
      let sm = game.ironman;
      if (y < capture.height && conf > 0.1 && millis() - timePose > 30) {
        sm.position.y +=
          y > capture.height / 2 + 20 &&
          sm.position.y < height - sm.size / 2 - 10
            ? 10
            : y < capture.height / 2 - 20 &&
              sm.position.y > sm.size / 2 - 10 > 0
            ? -10
            : 0;

        console.log(cy);
        timePose = millis();
      }
    }
  });

  imageMode(CENTER);
  soundFormats("mp3", "wav");

  background(0);
  fill(255);
  textAlign(CENTER);
  textSize(25);
  text("Loading...", width / 2, height / 2);

  game = new Game();
}

function draw() {
  game.update();
  mP = false;
}

function mousePressed() {
  mP = true;
}

// preloading audio files
let backgroundAudio, missileAudio, explosionAudio, gameoverAudio;
function preload() {
  backgroundAudio = loadSound("audio/background.mp3", () => {
    console.log("loaded");
    backgroundAudio.loop();
  });

  missileAudio = loadSound("audio/missile.wav");
  explosionAudio = loadSound("audio/explosion.wav");
  gameoverAudio = loadSound("audio/gameover.wav");
}
