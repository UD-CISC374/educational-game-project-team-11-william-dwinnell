//import ExampleObject from '../objects/exampleObject';

const DEFAULT_WIDTH = 1280;
const DEFAULT_HEIGHT = 800;

export default class MainScene extends Phaser.Scene {
  //private exampleObject: ExampleObject;
  
  background: Phaser.GameObjects.TileSprite;
  c_1: Phaser.GameObjects.Sprite;
  d_2: Phaser.GameObjects.Sprite;
  e_3: Phaser.GameObjects.Sprite;
  f_4: Phaser.GameObjects.Sprite;
  g_5: Phaser.GameObjects.Sprite;
  a_6: Phaser.GameObjects.Sprite;
  b_7: Phaser.GameObjects.Sprite;
  c_8: Phaser.GameObjects.Sprite;

  c_1s: Phaser.GameObjects.Sprite;
  d_2s: Phaser.GameObjects.Sprite;
  e_3s: Phaser.GameObjects.Sprite;
  f_4s: Phaser.GameObjects.Sprite;
  g_5s: Phaser.GameObjects.Sprite;
  a_6s: Phaser.GameObjects.Sprite;
  b_7s: Phaser.GameObjects.Sprite;
  c_8s: Phaser.GameObjects.Sprite;
  
  middle_c_sharp_2: Phaser.GameObjects.Sprite;
  bar: Phaser.GameObjects.Sprite;
  current_note: number;
  score: number;
  label_score: Phaser.GameObjects.Text;


  constructor() {
    super({ key: 'MainScene' });
  }

  create() {

    //this.exampleObject = new ExampleObject(this, 0, 0);

    this.background = this.add.tileSprite(0,0, DEFAULT_WIDTH, DEFAULT_HEIGHT, "background");
    this.background.setOrigin(0, 0);

    let key_height = 600

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
  
    this.score = 0
    this.current_note = 1

    this.label_score = this.add.text(30,30, "Score: " + this.score, 
    {font: "65px Arial",fill: "#000000",align: "center"})

    //this.c_1.on('pointerdown', this.play_c_1)

    //this.input.on('gameobjectdown', this.play_key, this)

  }

  //play function for white keys
  play_c_1 = () =>{this.c_1.play("activate_white")}
  play_d_2 = () =>{this.d_2.play("activate_white")}
  play_e_3 = () =>{this.e_3.play("activate_white")}
  play_f_4 = () =>{this.f_4.play("activate_white")}
  play_g_5 = () =>{this.g_5.play("activate_white")}
  play_a_6 = () =>{this.a_6.play("activate_white")}
  play_b_7 = () =>{this.b_7.play("activate_white")}
  play_c_8 = () =>{this.c_8.play("activate_white")}

  //play function for black keys
  play_c_1s = () =>{this.c_1s.play("activate_black")}
  play_d_2s = () =>{this.d_2s.play("activate_black")}
  play_f_4s = () =>{this.f_4s.play("activate_black")}
  play_g_5s = () =>{this.g_5s.play("activate_black")}
  play_a_6s = () =>{this.a_6s.play("activate_black")}
  play_c_8s = () =>{this.c_8s.play("activate_black")}
 

  //stop c1 
  stop_c_1 = () => {

    if(this.current_note == 1){
      this.score++
      this.new_note()
    } else {
      this.score--
    }

  }
  stop_d_2 = () => {

    if(this.current_note == 2){
      this.score++
      this.new_note()
    } else {
      this.score--
    }

  }
  stop_e_3 = () => {

    if(this.current_note == 3){
      this.score++
      this.new_note()
    } else {
      this.score--
    }

  }
  stop_f_4 = () => {
        
    if(this.current_note == 4){
      this.score++
      this.new_note()
    } else {
      this.score--
    }

  }
  stop_g_5 = () => {
        
    if(this.current_note == 5){
      this.score++
      this.new_note()
    } else {
      this.score--
    }

  }
  stop_a_6 = () => {
        
    if(this.current_note == 6){
      this.score++
      this.new_note()
    } else {
      this.score--
    }

  }
  stop_b_7 = () => {
        
    if(this.current_note == 7){
      this.score++
      this.new_note()
    } else {
      this.score--
    }

  }
  stop_c_8 = () => {
        
    if(this.current_note == 8){
      this.score++
      this.new_note()
    } else {
      this.score--
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
    this.current_note = Phaser.Math.Between(1, 8)
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
    }
  }

  play_key(pointer, gameObject){

    gameObject.play("activate_white")
    //gameObject.add.sprite(440, 600-34, "black_key")
    
  }

  update() {
    this.label_score.setText("Score: " + this.score)
  }
}
