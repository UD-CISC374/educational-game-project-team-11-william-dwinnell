export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    this.load.image("background", "assets/temp_back.jpg")
    
    this.load.image("empty_bar", "assets/bars_tile.png")
    this.load.image("empty_bar", "assets/bars_tile.png")
    this.load.image("q_c_1", "assets/q_c_1.png")
    this.load.image("q_d_2", "assets/q_d_2.png")
    this.load.image("q_e_3", "assets/q_e_3.png")
    this.load.image("q_f_4", "assets/q_f_4.png")
    this.load.image("q_g_5", "assets/q_g_5.png")
    this.load.image("q_a_6", "assets/q_a_6.png")
    this.load.image("q_b_7", "assets/q_b_7.png")
    this.load.image("q_c_8", "assets/q_c_8.png")

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

