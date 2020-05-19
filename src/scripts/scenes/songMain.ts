const DEFAULT_WIDTH = 1280;
const DEFAULT_HEIGHT = 800;

export default class MainScene extends Phaser.Scene {


  background: Phaser.GameObjects.TileSprite;
  TITLE: Phaser.GameObjects.Text;
  esc: Phaser.Input.Keyboard.Key;

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

  key1: Phaser.Input.Keyboard.Key;
  key2: Phaser.Input.Keyboard.Key;
  key3: Phaser.Input.Keyboard.Key;
  key4: Phaser.Input.Keyboard.Key;
  key5: Phaser.Input.Keyboard.Key;
  key6: Phaser.Input.Keyboard.Key;
  key7: Phaser.Input.Keyboard.Key;
  key8: Phaser.Input.Keyboard.Key;
  songIndex: any;
  song_data: any;
  noteIndex: number;
  song_len: number;
  bar: Phaser.GameObjects.Sprite;
  current_note: any;
  label_note: Phaser.GameObjects.Text;
  wrong_snd: Phaser.Sound.BaseSound;
  score: number;
  instructions: Phaser.GameObjects.Text;
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

  constructor() {
    super({ key: 'SongMain' });
  }

  create(data) {
    //draw the menu background
    this.background = this.add.tileSprite(0,0, DEFAULT_WIDTH, DEFAULT_HEIGHT, "background");
    this.background.setOrigin(0, 0);

    this.TITLE = this.add.text(30,30, "SONG MODE", {font: "36px Arial",fill: "#000000",align: "center"})

    this.songIndex = data.song_index
    this.noteIndex = 0

    this.score = 0

    //song notes
    //wind
    if(this.songIndex == 1){this.song_data = [1,3,5,7,5,3,1,3,5,7,5,3,2,4,6,8,6,4,2,4,6,8,6,4,1,3,5,7,5,3,1]}
    //little lamb
    else if(this.songIndex == 2){this.song_data = [3,2,1,2,3,3,3,2,2,2,3,5,5,3,2,1,2,3,3,3,3,2,2,3,2,1]}
    //happy birthday
    else if (this.songIndex == 3){this.song_data = [1,1,2,1,4,3,1,1,2,1,5,4,1,1,8,6,4,3,2,6,6,5,3,3,4]}
    //jingle bells
    else if (this.songIndex == 4){this.song_data = [3,3,3,3,3,3,3,5,1,2,3,4,4,4,4,4,3,3,3,3,5,5,4,2,1]}

    this.song_len = this.song_data.length


    this.back = this.add.renderTexture(DEFAULT_WIDTH-465, -160, 750, 270)
    this.back.fill(0x000000,.2)
    this.back.setInteractive()
    //add the score to the game
    this.instructions = this.add.text(DEFAULT_WIDTH-450, 30, "ESC. to return", 
    {font: "65px Arial",fill: "#FFFFFF",align: "center"})
    this.instructions.setAlpha(.9)

    this.esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)
    this.key1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE)
    this.key2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO)
    this.key3 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE)
    this.key4 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR)
    this.key5 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FIVE)
    this.key6 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SIX)
    this.key7 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SEVEN)
    this.key8 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.EIGHT)

    //the bar for the memory game
    this.bar = this.add.sprite(DEFAULT_WIDTH/2-15, 240, "q_c_1")
    this.current_note = this.song_data[0]
    
    //set the visual for the first note
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


    this.bar.scale = 3
    
    //piano board y val
    let key_height = 600

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
    this.wrong_snd = this.sound.add("wrong")

    this.label_note = this.add.text(30,100, "SCORE: " + this.score, 
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
    this.key_instrc = this.add.text(410,key_height+key_add+50,"use 1 through 8 on keyboard", {font: "32px Arial",fill: "#000000",align: "center"})
  }
  next_note(){
    this.score += 5

    if(this.noteIndex >= this.song_len){
        //script when song is done
    }else {
        //go to next note in song data
        this.noteIndex++
        //get the new note
        this.current_note = this.song_data[this.noteIndex]
        //show next note on screen
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
  }

  update() {
    
    //temp
    if(Phaser.Input.Keyboard.JustDown(this.esc)) {
        this.scene.start('songModeMain')
    }


    if(Phaser.Input.Keyboard.JustDown(this.key1)) {this.c_1.play("activate_white");this.c1_snd.play()}
    if(Phaser.Input.Keyboard.JustDown(this.key2)) {this.d_2.play("activate_white");this.d2_snd.play()}
    if(Phaser.Input.Keyboard.JustDown(this.key3)) {this.e_3.play("activate_white");this.e3_snd.play()}
    if(Phaser.Input.Keyboard.JustDown(this.key4)) {this.f_4.play("activate_white");this.f4_snd.play()}
    if(Phaser.Input.Keyboard.JustDown(this.key5)) {this.g_5.play("activate_white");this.g5_snd.play()}
    if(Phaser.Input.Keyboard.JustDown(this.key6)) {this.a_6.play("activate_white");this.a6_snd.play()}
    if(Phaser.Input.Keyboard.JustDown(this.key7)) {this.b_7.play("activate_white");this.b7_snd.play()}
    if(Phaser.Input.Keyboard.JustDown(this.key8)) {this.c_8.play("activate_white");this.c8_snd.play()}

    if(this.noteIndex >= this.song_len){

      this.label_note.setX(DEFAULT_WIDTH/2-300)
      this.label_note.setY(DEFAULT_HEIGHT/2)
      this.label_note.setText("FINAL SCORE: " + this.score)

    } else {

      if(Phaser.Input.Keyboard.JustUp(this.key1)) {
          if (this.song_data[this.noteIndex] == 1){
              this.next_note()
          }else {
              //play buzzer sound
              if(this.song_len-1 >= this.noteIndex) {
                this.score -= 3
                this.wrong_snd.play()
              }
          }
      }
      if(Phaser.Input.Keyboard.JustUp(this.key2)) {
          if (this.song_data[this.noteIndex] == 2){
              this.next_note()
          }else {
              //play buzzer sound
              if(this.song_len-1 >= this.noteIndex) {
                this.score -= 3
                this.wrong_snd.play()
              }
          }
      }
      if(Phaser.Input.Keyboard.JustUp(this.key3)) {
          if (this.song_data[this.noteIndex] == 3){
              this.next_note()
          }else {
              //play buzzer sound
              if(this.song_len-1 >= this.noteIndex) {
                this.score -= 3
                this.wrong_snd.play()
              }
          }
      }
      if(Phaser.Input.Keyboard.JustUp(this.key4)) {
          if (this.song_data[this.noteIndex] == 4){
              this.next_note()
          }else {
              //play buzzer sound
              if(this.song_len-1 >= this.noteIndex) {
                this.score -= 3
                this.wrong_snd.play()
              }
          }
      }
      if(Phaser.Input.Keyboard.JustUp(this.key5)) {
          if (this.song_data[this.noteIndex] == 5){
              this.next_note()
          }else {
              //play buzzer sound
              if(this.song_len-1 >= this.noteIndex) {
                this.score -= 3
                this.wrong_snd.play()
              }
          }
      }
      if(Phaser.Input.Keyboard.JustUp(this.key6)) {
          if (this.song_data[this.noteIndex] == 6){
              this.next_note()
          }else {
              //play buzzer sound
              if(this.song_len-1 >= this.noteIndex) {
                this.score -= 3
                this.wrong_snd.play()
              }
          }
      }
      if(Phaser.Input.Keyboard.JustUp(this.key7)) {
          if (this.song_data[this.noteIndex] == 7){
              this.next_note()
          }else {
              //play buzzer sound
              if(this.song_len-1 >= this.noteIndex) {
                this.score -= 3
                this.wrong_snd.play()
              }
          }
      }
      if(Phaser.Input.Keyboard.JustUp(this.key8)) {
          if (this.song_data[this.noteIndex] == 8){
              this.next_note()
          }else {
              //play buzzer sound
              if(this.song_len-1 >= this.noteIndex) {
                this.score -= 3
                this.wrong_snd.play()
              }
          }
      }
      this.label_note.setText("SCORE: " + this.score)
    }

  }
}