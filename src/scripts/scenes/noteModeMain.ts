const DEFAULT_WIDTH = 1280;
const DEFAULT_HEIGHT = 800;


export default class noteModeMain extends Phaser.Scene {
  TITLE: Phaser.GameObjects.Text;
  background: Phaser.GameObjects.TileSprite;
  esc: Phaser.Input.Keyboard.Key;
  lvl1: Phaser.GameObjects.Sprite;
  lvl2: Phaser.GameObjects.Sprite;
  lvl3: Phaser.GameObjects.Sprite;
  lvl4: Phaser.GameObjects.Sprite;
  lvl5: Phaser.GameObjects.Sprite;
  lvl6: Phaser.GameObjects.Sprite;
  lvl7: Phaser.GameObjects.Sprite;
  lvl8: Phaser.GameObjects.Sprite;
  shadow1: Phaser.GameObjects.Sprite;
  shadow2: Phaser.GameObjects.Sprite;
  shadow3: Phaser.GameObjects.Sprite;
  shadow4: Phaser.GameObjects.Sprite;
  shadow5: Phaser.GameObjects.Sprite;
  shadow6: Phaser.GameObjects.Sprite;
  shadow7: Phaser.GameObjects.Sprite;
  shadow8: Phaser.GameObjects.Sprite;
  high_score: any;
  score_disp: Phaser.GameObjects.Text;
  hi1: Phaser.GameObjects.Text;
  hi2: Phaser.GameObjects.Text;
  hi3: Phaser.GameObjects.Text;
  hi4: Phaser.GameObjects.Text;
  hi5: Phaser.GameObjects.Text;
  hi6: Phaser.GameObjects.Text;
  hi7: Phaser.GameObjects.Text;
  hi8: Phaser.GameObjects.Text;
  back: Phaser.GameObjects.RenderTexture;
  instructions: Phaser.GameObjects.Text;
  warning: Phaser.GameObjects.Text;


  constructor() {
    super({ key: 'noteModeMain' });
  }

  create(data) {
    
    //stores the high scores for each level
    this.high_score = data.highSc

    //draw the menu background
    this.background = this.add.tileSprite(0,0, DEFAULT_WIDTH, DEFAULT_HEIGHT, "background");
    this.background.setOrigin(0, 0);

    this.TITLE = this.add.text(30,30, "NOTE MODE LEVEL SELECT", {font: "36px Arial",fill: "#000000",align: "center"})
    
    this.back = this.add.renderTexture(DEFAULT_WIDTH-465, -160, 750, 270)
    this.back.fill(0x000000,.2)
    this.back.setInteractive()
    //add the score to the game
    this.instructions = this.add.text(DEFAULT_WIDTH-450, 30, "ESC. to return", 
    {font: "65px Arial",fill: "#FFFFFF",align: "center"})
    this.instructions.setAlpha(.9)

    this.warning = this.add.text(30,DEFAULT_HEIGHT-60, "! when playing in note mode use the cursor to click keys", {font: "36px Arial",fill: "#FF2651",align: "center"})

    let selectX = 400

    this.shadow1 = this.add.sprite(205,selectX+5,"note_lvl1")
    this.shadow1.tint = 0x000000
    this.shadow1.alpha = .2

    this.shadow2 = this.add.sprite(505,selectX+5,"note_lvl1")
    this.shadow2.tint = 0x000000
    this.shadow2.alpha = .2

    this.shadow2 = this.add.sprite(805,selectX+5,"note_lvl1")
    this.shadow2.tint = 0x000000
    this.shadow2.alpha = .2

    this.shadow2 = this.add.sprite(1105,selectX+5,"note_lvl1")
    this.shadow2.tint = 0x000000
    this.shadow2.alpha = .2

    /*this.shadow2 = this.add.sprite(205,605,"note_lvl1")
    this.shadow2.tint = 0x000000
    this.shadow2.alpha = .2

    this.shadow2 = this.add.sprite(505,605,"note_lvl1")
    this.shadow2.tint = 0x000000
    this.shadow2.alpha = .2

    this.shadow2 = this.add.sprite(805,605,"note_lvl1")
    this.shadow2.tint = 0x000000
    this.shadow2.alpha = .2

    this.shadow2 = this.add.sprite(1105,605,"note_lvl1")
    this.shadow2.tint = 0x000000
    this.shadow2.alpha = .2
    */

    this.lvl1 = this.add.sprite(200,selectX,"note_lvl1").setInteractive()
    this.lvl1.on('pointerup', this.start_level1)

    this.lvl2 = this.add.sprite(500,selectX,"note_lvl2").setInteractive()
    this.lvl2.on('pointerup', this.start_level2)

    this.lvl3 = this.add.sprite(800,selectX,"note_lvl3").setInteractive()
    this.lvl3.on('pointerup', this.start_level3)

    this.lvl4 = this.add.sprite(1100,selectX,"note_lvl4").setInteractive()
    this.lvl4.on('pointerup', this.start_level4)

    /*this.lvl5 = this.add.sprite(200,600,"note_lvl5").setInteractive()
    this.lvl5.on('pointerup', this.start_level5)

    this.lvl6 = this.add.sprite(500,600,"note_lvl6").setInteractive()
    this.lvl6.on('pointerup', this.start_level6)

    this.lvl7 = this.add.sprite(800,600,"note_lvl7").setInteractive()
    this.lvl7.on('pointerup', this.start_level7)
  
    this.lvl8 = this.add.sprite(1100,600,"note_lvl8").setInteractive()
    this.lvl8.on('pointerup', this.start_level8)
    */

   let lvl1txt = this.add.text(this.lvl1.x-125,this.lvl1.y-160, "", {font: "36px Arial",fill: "#000000",align: "left"})
   let lvl2txt = this.add.text(this.lvl2.x-125,this.lvl2.y-160, "", {font: "36px Arial",fill: "#000000",align: "left"})
   let lvl3txt = this.add.text(this.lvl3.x-125,this.lvl3.y-160, "", {font: "36px Arial",fill: "#000000",align: "left"})
   let lvl4txt = this.add.text(this.lvl4.x-125,this.lvl4.y-160, "", {font: "36px Arial",fill: "#000000",align: "left"})
    
   this.lvl1.on('pointerover',function(pointer){lvl1txt.setText("Notes 1 through 3")})
   this.lvl1.on('pointerout',function(pointer){lvl1txt.setText("")})
   this.lvl2.on('pointerover',function(pointer){lvl2txt.setText("Notes 1 through 5")})
   this.lvl2.on('pointerout',function(pointer){lvl2txt.setText("")})
   this.lvl3.on('pointerover',function(pointer){lvl3txt.setText("Notes 1 through 7")})
   this.lvl3.on('pointerout',function(pointer){lvl3txt.setText("")})
   this.lvl4.on('pointerover',function(pointer){lvl4txt.setText("Notes 1 through 8")})
   this.lvl4.on('pointerout',function(pointer){lvl4txt.setText("")})

    this.esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)

    //add the score to the game
    this.hi1 = this.add.text(145,selectX+125, "BEST: " + this.high_score[0], {font: "32px Arial",fill: "#000000",align: "center"})
    this.hi2 = this.add.text(445,selectX+125, "BEST: " + this.high_score[1], {font: "32px Arial",fill: "#000000",align: "center"})
    this.hi3 = this.add.text(745,selectX+125, "BEST: " + this.high_score[2], {font: "32px Arial",fill: "#000000",align: "center"})
    this.hi4 = this.add.text(1045,selectX+125, "BEST: " + this.high_score[3], {font: "32px Arial",fill: "#000000",align: "center"})
    /*this.hi5 = this.add.text(145,725, "BEST: " + this.high_score[4], {font: "32px Arial",fill: "#000000",align: "center"})
    this.hi6 = this.add.text(445,725, "BEST: " + this.high_score[5], {font: "32px Arial",fill: "#000000",align: "center"})
    this.hi7 = this.add.text(745,725, "BEST: " + this.high_score[6], {font: "32px Arial",fill: "#000000",align: "center"})
    this.hi8 = this.add.text(1045,725, "BEST: " + this.high_score[7], {font: "32px Arial",fill: "#000000",align: "center"})*/
  }

  start_level1 = () => {this.scene.start('MainScene',{level: 1, hsc: this.high_score})}
  start_level2 = () => {this.scene.start('MainScene',{level: 2, hsc: this.high_score})}
  start_level3 = () => {this.scene.start('MainScene',{level: 3, hsc: this.high_score})}
  start_level4 = () => {this.scene.start('MainScene',{level: 4, hsc: this.high_score})}
  /*start_level5 = () => {this.scene.start('MainScene',{level: 5, hsc: this.high_score})}
  start_level6 = () => {this.scene.start('MainScene',{level: 6, hsc: this.high_score})}
  start_level7 = () => {this.scene.start('MainScene',{level: 7, hsc: this.high_score})}
  start_level8 = () => {this.scene.start('MainScene',{level: 8, hsc: this.high_score})}
  */
  update() {

    //temp
    if(Phaser.Input.Keyboard.JustDown(this.esc)) {
        this.scene.start('menuScene')
    }

  }
}