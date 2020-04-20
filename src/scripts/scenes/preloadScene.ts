export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    this.load.image("background", "assets/temp_back.jpg")

    this.load.spritesheet("white_key", "assets/white_key.png", {frameWidth: 50, frameHeight: 200})
    this.load.spritesheet("black_key", "assets/black_key.png", {frameWidth: 30, frameHeight: 132})

  }

  create() {
    this.scene.start('MainScene');

    this.anims.create( {
      key: "activate_white",
      frames: this.anims.generateFrameNumbers("white_key", {start: 0, end: 2}),
      frameRate: 6,
      repeat: 0
    })

    this.anims.create( {
      key: "activate_black",
      frames: this.anims.generateFrameNumbers("black_key", {start: 0, end: 2}),
      frameRate: 6,
      repeat: 0
    })
  }
}
