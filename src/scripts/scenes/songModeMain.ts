const DEFAULT_WIDTH = 1280;
const DEFAULT_HEIGHT = 800;

export default class SongModeMain extends Phaser.Scene {
  TITLE: Phaser.GameObjects.Text;
  background: Phaser.GameObjects.TileSprite;
  esc: Phaser.Input.Keyboard.Key;
  song_index: number;

  song1: Phaser.GameObjects.Sprite;
  song2: Phaser.GameObjects.Sprite;
  song3: Phaser.GameObjects.Sprite;
  song4: Phaser.GameObjects.Sprite;
  back: Phaser.GameObjects.RenderTexture;
  instructions: Phaser.GameObjects.Text;
  warning: Phaser.GameObjects.Text;

  constructor() {
    super({ key: 'songModeMain' });
  }

  create() {

    //draw the menu background
    this.background = this.add.tileSprite(0,0, DEFAULT_WIDTH, DEFAULT_HEIGHT, "background");
    this.background.setOrigin(0, 0);

    this.back = this.add.renderTexture(DEFAULT_WIDTH-465, -160, 750, 270)
    this.back.fill(0x000000,.2)
    this.back.setInteractive()
    //add the score to the game
    this.instructions = this.add.text(DEFAULT_WIDTH-450, 30, "ESC. to return", 
    {font: "65px Arial",fill: "#FFFFFF",align: "center"})
    this.instructions.setAlpha(.9)

    this.TITLE = this.add.text(30,30, "SONG MODE LEVEL SELECT", {font: "36px Arial",fill: "#000000",align: "center"})
    
    this.warning = this.add.text(30,DEFAULT_HEIGHT-60, "! when playing songs in song mode use keys 1-8 on computer keyboard", {font: "36px Arial",fill: "#FF2651",align: "center"})

    this.song_index = 1

    this.song1 = this.add.sprite(200,250,"song_1").setInteractive()
    this.song1.on('pointerup', this.start_song1)
    this.song2 = this.add.sprite(200,375,"song_2").setInteractive()
    this.song2.on('pointerup', this.start_song2)
    this.song3 = this.add.sprite(200,500,"song_3").setInteractive()
    this.song3.on('pointerup', this.start_song3)
    this.song4 = this.add.sprite(200,625,"song_4").setInteractive()
    this.song4.on('pointerup', this.start_song4)
    
    let song1txt = this.add.text(this.song1.x+110,this.song1.y-30, "", {font: "36px Arial",fill: "#000000",align: "left"})
    let song2txt = this.add.text(this.song1.x+110,this.song2.y-30, "", {font: "36px Arial",fill: "#000000",align: "left"})
    let song3txt = this.add.text(this.song1.x+110,this.song3.y-30, "", {font: "36px Arial",fill: "#000000",align: "left"})
    let song4txt = this.add.text(this.song1.x+110,this.song4.y-30, "", {font: "36px Arial",fill: "#000000",align: "left"})
    
    this.song1.on('pointerover',function(pointer){song1txt.setText("This song will teach you a chord progression.\nIf you have a piano try playing it while playing \nrandom notes in your right hand.")})
    this.song1.on('pointerout',function(pointer){song1txt.setText("")})
    
    this.song2.on('pointerover',function(pointer){song2txt.setText("This song is often taught to new pianists to learn \nthe early notes. You only need notes 1-5 for this one.")})
    this.song2.on('pointerout',function(pointer){song2txt.setText("")})
    
    this.song3.on('pointerover',function(pointer){song3txt.setText("Everyone knows the Happy Birthday Song\nBut do they know how to play it on the piano?")})
    this.song3.on('pointerout',function(pointer){song3txt.setText("")})

    this.song4.on('pointerover',function(pointer){song4txt.setText("Jingle Bells is a classic Christmas song\nIf you have a piano try playing it on your left hand and \nadd the same notes from another octave on your right hand")})
    this.song4.on('pointerout',function(pointer){song4txt.setText("")})


    let key_add = 100
    let x_mov = 10
    //piano board y val
    let key_height = 600

    this.esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)

  }

  start_song1 = () =>{this.scene.start('SongMain',{song_index: 1})}
  start_song2 = () =>{this.scene.start('SongMain',{song_index: 2})}
  start_song3 = () =>{this.scene.start('SongMain',{song_index: 3})}
  start_song4 = () =>{this.scene.start('SongMain',{song_index: 4})}

  update() {

    //temp
    if(Phaser.Input.Keyboard.JustDown(this.esc)) {
        this.scene.start('menuScene')
    }

  }
}