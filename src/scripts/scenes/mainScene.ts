//import ExampleObject from '../objects/exampleObject';

import PreloadScene from "./preloadScene";

const DEFAULT_WIDTH = 1280;
const DEFAULT_HEIGHT = 800;

export default class MainScene extends Phaser.Scene {

  //Declaration of variables
  background: Phaser.GameObjects.TileSprite;
  
  //white keys images
  c_1: Phaser.GameObjects.Sprite;
  d_2: Phaser.GameObjects.Sprite;
  e_3: Phaser.GameObjects.Sprite;
  f_4: Phaser.GameObjects.Sprite;
  g_5: Phaser.GameObjects.Sprite;
  a_6: Phaser.GameObjects.Sprite;
  b_7: Phaser.GameObjects.Sprite;
  c_8: Phaser.GameObjects.Sprite;

  //sharp keys images
  c_1s: Phaser.GameObjects.Sprite;
  d_2s: Phaser.GameObjects.Sprite;
  e_3s: Phaser.GameObjects.Sprite;
  f_4s: Phaser.GameObjects.Sprite;
  g_5s: Phaser.GameObjects.Sprite;
  a_6s: Phaser.GameObjects.Sprite;
  b_7s: Phaser.GameObjects.Sprite;
  c_8s: Phaser.GameObjects.Sprite;
  
  //key sounds
  c1_snd: Phaser.Sound.BaseSound;
  d2_snd: Phaser.Sound.BaseSound;
  e3_snd: Phaser.Sound.BaseSound;
  f4_snd: Phaser.Sound.BaseSound;
  g5_snd: Phaser.Sound.BaseSound;
  a6_snd: Phaser.Sound.BaseSound;
  b7_snd: Phaser.Sound.BaseSound;
  c8_snd: Phaser.Sound.BaseSound;

  middle_c_sharp_2: Phaser.GameObjects.Sprite;
  bar: Phaser.GameObjects.Sprite;
  current_note: number;
  score: number;
  label_score: Phaser.GameObjects.Text;
  current_level: integer;
  level_disp: Phaser.GameObjects.Text;
  esc: Phaser.Input.Keyboard.Key;
  time_left: number;
  hiScore: any;
  prev_note: number;
  instructions: Phaser.GameObjects.Text;
  instr_back: Phaser.GameObjects.Rectangle;
  back: Phaser.GameObjects.RenderTexture;

  n1: Phaser.GameObjects.Text;
  n2: Phaser.GameObjects.Text;
  n3: Phaser.GameObjects.Text;
  n4: Phaser.GameObjects.Text;
  n5: Phaser.GameObjects.Text;
  n6: Phaser.GameObjects.Text;
  n7: Phaser.GameObjects.Text;
  n8: Phaser.GameObjects.Text;
  
  key_instrc: Phaser.GameObjects.Text;
  start: number;

  constructor() {
    super({ key: 'MainScene' });
  }

  create(data) {
    this.start = Date.now();
    this.hiScore = data.hsc
    this.current_level = data.level
    
    this.time_left = 30
    //set the background
    this.background = this.add.tileSprite(0,0, DEFAULT_WIDTH, DEFAULT_HEIGHT, "background");
    this.background.setOrigin(0, 0);

    //piano board y val
    let key_height = 600

    //the bar for the memory game
    this.bar = this.add.sprite(DEFAULT_WIDTH/2-15, 240, "q_c_1")
    this.bar.scale = 3

    //Note letter then key val for var name
    this.c_1 = this.add.sprite(440, key_height, "white_key").setInteractive()
    this.d_2 = this.add.sprite(440+50*1, key_height, "white_key").setInteractive()
    this.e_3 = this.add.sprite(440+50*2, key_height, "white_key").setInteractive()
    this.f_4 = this.add.sprite(440+50*3, key_height, "white_key").setInteractive()
    this.g_5 = this.add.sprite(440+50*4, key_height, "white_key").setInteractive()
    this.a_6 = this.add.sprite(440+50*5, key_height, "white_key").setInteractive()
    this.b_7 = this.add.sprite(440+50*6, key_height, "white_key").setInteractive()
    this.c_8 = this.add.sprite(440+50*7, key_height, "white_key").setInteractive()

    //load black keys
    this.c_1s = this.add.sprite(440+25, key_height-34, "black_key").setInteractive()
    this.d_2s = this.add.sprite(440+50*1+25, key_height-34, "black_key").setInteractive()
    this.f_4s = this.add.sprite(440+50*3+25, key_height-34, "black_key").setInteractive()
    this.g_5s = this.add.sprite(440+50*4+25, key_height-34, "black_key").setInteractive()
    this.a_6s = this.add.sprite(440+50*5+25, key_height-34, "black_key").setInteractive()
    this.c_8s = this.add.sprite(440+50*7+25, key_height-34, "black_key").setInteractive()

    
    //add sounds
    this.c1_snd = this.sound.add("c1_sound")
    this.d2_snd = this.sound.add("d2_sound")
    this.e3_snd = this.sound.add("e3_sound")
    this.f4_snd = this.sound.add("f4_sound")
    this.g5_snd = this.sound.add("g5_sound")
    this.a6_snd = this.sound.add("a6_sound")
    this.b7_snd = this.sound.add("b7_sound")
    this.c8_snd = this.sound.add("c8_sound")


    //if clicked use those functions
    this.c_1.on('pointerdown', this.play_c_1).on('pointerup', this.stop_c_1);
    this.d_2.on('pointerdown', this.play_d_2).on('pointerup', this.stop_d_2);
    this.e_3.on('pointerdown', this.play_e_3).on('pointerup', this.stop_e_3);
    this.f_4.on('pointerdown', this.play_f_4).on('pointerup', this.stop_f_4);
    this.g_5.on('pointerdown', this.play_g_5).on('pointerup', this.stop_g_5);
    this.a_6.on('pointerdown', this.play_a_6).on('pointerup', this.stop_a_6);
    this.b_7.on('pointerdown', this.play_b_7).on('pointerup', this.stop_b_7);
    this.c_8.on('pointerdown', this.play_c_8).on('pointerup', this.stop_c_8);

    //if clicked use those functions
    this.c_1s.on('pointerdown', this.play_c_1s).on('pointerup', this.stop_c_1s);
    this.d_2s.on('pointerdown', this.play_d_2s).on('pointerup', this.stop_d_2s);
    this.f_4s.on('pointerdown', this.play_f_4s).on('pointerup', this.stop_f_4s);
    this.g_5s.on('pointerdown', this.play_g_5s).on('pointerup', this.stop_g_5s);
    this.a_6s.on('pointerdown', this.play_a_6s).on('pointerup', this.stop_a_6s);
    this.c_8s.on('pointerdown', this.play_c_8s).on('pointerup', this.stop_c_8s);

    //initialize score and first note
    this.score = 0
    this.current_note = 1
    this.prev_note = this.current_note

    //this.instr_back = this.add.rectangle(DEFAULT_WIDTH-250, 0, 600, 260, 0x000000)
    this.back = this.add.renderTexture(DEFAULT_WIDTH-465, -160, 750, 270)
    this.back.fill(0x000000,.2)
    this.back.setInteractive()
    //add the score to the game
    this.label_score = this.add.text(30,30, "Score: " + this.score, 
    {font: "65px Arial",fill: "#000000",align: "center"})

    //add the score to the game
    this.instructions = this.add.text(DEFAULT_WIDTH-450, 30, "ESC. to return", 
    {font: "65px Arial",fill: "#FFFFFF",align: "center"})
    this.instructions.setAlpha(.9)

    //add the score to the game
    this.level_disp = this.add.text(30,100, "Level: " + this.current_level, 
    {font: "65px Arial",fill: "#000000",align: "center"})

    let key_add = 100
    let x_mov = 10
    this.n1 = this.add.text(440-x_mov,key_height+key_add, "1", {font: "32px Arial",fill: "#000000",align: "center"})
    this.n2 = this.add.text(440+50*1-x_mov,key_height+key_add, "2", {font: "32px Arial",fill: "#000000",align: "center"})
    this.n3 = this.add.text(440+50*2-x_mov,key_height+key_add, "3", {font: "32px Arial",fill: "#000000",align: "center"})
    this.n4 = this.add.text(440+50*3-x_mov,key_height+key_add, "4", {font: "32px Arial",fill: "#000000",align: "center"})
    this.n5 = this.add.text(440+50*4-x_mov,key_height+key_add, "5", {font: "32px Arial",fill: "#000000",align: "center"})
    this.n6 = this.add.text(440+50*5-x_mov,key_height+key_add, "6", {font: "32px Arial",fill: "#000000",align: "center"})
    this.n7 = this.add.text(440+50*6-x_mov,key_height+key_add, "7", {font: "32px Arial",fill: "#000000",align: "center"})
    this.n8 = this.add.text(440+50*7-x_mov,key_height+key_add, "8", {font: "32px Arial",fill: "#000000",align: "center"})
    this.key_instrc = this.add.text(360,key_height+key_add+50,"click on the piano key to play the note", {font: "32px Arial",fill: "#000000",align: "center"})


    this.esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)

  }

  //play function for white keys
  play_c_1 = () =>{this.c_1.play("activate_white");this.c1_snd.play()}
  play_d_2 = () =>{this.d_2.play("activate_white");this.d2_snd.play()}
  play_e_3 = () =>{this.e_3.play("activate_white");this.e3_snd.play()}
  play_f_4 = () =>{this.f_4.play("activate_white");this.f4_snd.play()}
  play_g_5 = () =>{this.g_5.play("activate_white");this.g5_snd.play()}
  play_a_6 = () =>{this.a_6.play("activate_white");this.a6_snd.play()}
  play_b_7 = () =>{this.b_7.play("activate_white");this.b7_snd.play()}
  play_c_8 = () =>{this.c_8.play("activate_white");this.c8_snd.play()}

  //play function for black keys
  play_c_1s = () =>{this.c_1s.play("activate_black")}
  play_d_2s = () =>{this.d_2s.play("activate_black")}
  play_f_4s = () =>{this.f_4s.play("activate_black")}
  play_g_5s = () =>{this.g_5s.play("activate_black")}
  play_a_6s = () =>{this.a_6s.play("activate_black")}
  play_c_8s = () =>{this.c_8s.play("activate_black")}
 

  //after key is played update the current note and score (all stop functions) 
  stop_c_1 = () => {
    if(this.time_left > 0) {
      if(this.current_note == 1){
        this.score++
        this.new_note()
        this.bar.clearTint()
      } else {
        this.score--
      }
    }

  }
  stop_d_2 = () => {

    if(this.time_left > 0) {
      if(this.current_note == 2){
        this.score++
        this.new_note()
        
      } else {
        this.score--
      }
    }

  }
  stop_e_3 = () => {
    if(this.time_left > 0) {
      if(this.current_note == 3){
        this.score++
        this.new_note()
      } else {
        this.score--
      }
    }

  }
  stop_f_4 = () => {
    if(this.time_left > 0) {
      if(this.current_note == 4){
        this.score++
        this.new_note()
      } else {
        this.score--
      }
    }

  }
  stop_g_5 = () => {
    if(this.time_left > 0) {
      if(this.current_note == 5){
        this.score++
        this.new_note()
      } else {
        this.score--
      }
    }

  }
  stop_a_6 = () => {
    if(this.time_left > 0) {   
      if(this.current_note == 6){
        this.score++
        this.new_note()
      } else {
        this.score--
      }
    }
  }
  stop_b_7 = () => {
  if(this.time_left > 0) {
    if(this.current_note == 7){
      this.score++
      this.new_note()
    } else {
      this.score--
    }
  }
  }
  stop_c_8 = () => {
    if(this.time_left > 0) {    
      if(this.current_note == 8){
        this.score++
        this.new_note()
      } else {
        this.score--
      }
    }
  }

  stop_c_1s(){}
  stop_d_2s(){}
  stop_e_3s(){}
  stop_f_4s(){}
  stop_g_5s(){}
  stop_a_6s(){}
  stop_b_7s(){}
  stop_c_8s(){}

  new_note = () => {
    let level_range: integer
    if(this.current_level == 1){
      level_range = 3
    }else if(this.current_level == 2){
      level_range = 5
    }else if(this.current_level == 3){
      level_range = 7
    }else{
      level_range = 8
    }
    this.prev_note = this.current_note

    if(Phaser.Math.Between(1,10)>2){
      this.current_note += Phaser.Math.Between(-1,1)
      if(this.current_note < 1){
        this.current_note = level_range
      }else if(this.current_note > level_range){
        this.current_note = 1
      }
    }else{
      this.current_note = Phaser.Math.Between(1, level_range)
    }
    
    while(this.current_note == this.prev_note){
      this.current_note = Phaser.Math.Between(1, level_range)
    }
    

    if(this.current_note == 1){
      this.bar.setTexture("q_c_1")
    } else if (this.current_note == 2) {
      this.bar.setTexture("q_d_2")
    } else if (this.current_note == 3) {
      this.bar.setTexture("q_e_3")
    } else if (this.current_note == 4) {
      this.bar.setTexture("q_f_4")
    } else if (this.current_note == 5) {
      this.bar.setTexture("q_g_5")
    } else if (this.current_note == 6) {
      this.bar.setTexture("q_a_6")
    } else if (this.current_note == 7) {
      this.bar.setTexture("q_b_7")
    } else if (this.current_note == 8) {
      this.bar.setTexture("q_c_8")
    } else {
      this.bar.setTexture("empty_bar")
    }


  }

  update() {
    
    //keep the score up to date for display
    this.label_score.setText("Score: " + this.score + " time left: " + Math.round(this.time_left))
    this.time_left--
    if(this.time_left > 0){
      //this.time_left--
      this.time_left = Math.floor(30 - (Date.now()-this.start)/1000)
    } else {
      this.label_score.setX(DEFAULT_WIDTH/2-225)
      this.label_score.setY(DEFAULT_HEIGHT/2-50)
      this.label_score.setText("Final Score: " + this.score)
      this.level_disp.setY(30)
    }
    if(Phaser.Input.Keyboard.JustDown(this.esc)) {
      if(this.score > this.hiScore[this.current_level-1]){
        this.hiScore[this.current_level-1] = this.score
      }
  
      this.scene.start('noteModeMain', {highSc: this.hiScore})

    }

  }
}
