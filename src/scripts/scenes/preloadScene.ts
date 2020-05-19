export default class PreloadScene extends Phaser.Scene {
  
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {

    

    //MENU ASSETS//

    //menu components
    this.load.image("menuBG", "assets/menu_images/menu_background.png")
    this.load.image("backdrop", "assets/menu_images/select_backdrop.png")
    this.load.image("title", "assets/menu_images/title.png")
    
    //menu options
    this.load.image("menu_note_mode", "assets/menu_images/note_mode.png")
    this.load.image("menu_song_mode", "assets/menu_images/song_mode.png")
    this.load.image("menu_story_mode", "assets/menu_images/story_mode.png")
    this.load.image("selector", "assets/menu_images/selector.png")

    //NOTE MODE ASSETS//

    this.load.image("background", "assets/note_mode/temp_back.jpg")
    
    this.load.image("empty_bar", "assets/bars_tile.png")
    this.load.image("q_c_1", "assets/note_mode/q_c_1.png")
    this.load.image("q_d_2", "assets/note_mode/q_d_2.png")
    this.load.image("q_e_3", "assets/note_mode/q_e_3.png")
    this.load.image("q_f_4", "assets/note_mode/q_f_4.png")
    this.load.image("q_g_5", "assets/note_mode/q_g_5.png")
    this.load.image("q_a_6", "assets/note_mode/q_a_6.png")
    this.load.image("q_b_7", "assets/note_mode/q_b_7.png")
    this.load.image("q_c_8", "assets/note_mode/q_c_8.png")

    this.load.image("note_lvl1", "assets/note_mode/level_select_1.png")
    this.load.image("note_lvl2", "assets/note_mode/level_select_2.png")
    this.load.image("note_lvl3", "assets/note_mode/level_select_3.png")
    this.load.image("note_lvl4", "assets/note_mode/level_select_4.png")
    this.load.image("note_lvl5", "assets/note_mode/level_select_5.png")
    this.load.image("note_lvl6", "assets/note_mode/level_select_6.png")
    this.load.image("note_lvl7", "assets/note_mode/level_select_7.png")
    this.load.image("note_lvl8", "assets/note_mode/level_select_8.png")

    //load song select images
    this.load.image("song_1", "assets/song_mode/song1.png")
    this.load.image("song_2", "assets/song_mode/song2.png")
    this.load.image("song_3", "assets/song_mode/song3.png")
    this.load.image("song_4", "assets/song_mode/song4.png")

    this.load.spritesheet("white_key", "assets/white_key.png", {frameWidth: 50, frameHeight: 200})
    this.load.spritesheet("black_key", "assets/black_key.png", {frameWidth: 30, frameHeight: 132})

    this.load.audio("c1_sound", ["assets/sounds/c.mp3"])
    this.load.audio("d2_sound", "assets/sounds/d.mp3")
    this.load.audio("e3_sound", "assets/sounds/e.mp3")
    this.load.audio("f4_sound", "assets/sounds/f.mp3")
    this.load.audio("g5_sound", "assets/sounds/g.mp3")
    this.load.audio("a6_sound", "assets/sounds/a.mp3")
    this.load.audio("b7_sound", "assets/sounds/b.mp3")
    this.load.audio("c8_sound", "assets/sounds/c2.mp3")
    this.load.audio("wrong", "assets/sounds/wrong_note.mp3")

  }

  create() {

    this.scene.start('menuScene',{hiSc: [0,0,0,0,0,0,0,0]});

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

