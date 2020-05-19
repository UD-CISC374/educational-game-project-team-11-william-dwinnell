const DEFAULT_WIDTH = 1280;
const DEFAULT_HEIGHT = 800;

export default class MenuScene extends Phaser.Scene {
    background: Phaser.GameObjects.TileSprite;
    backDrop: Phaser.GameObjects.Sprite;
    title: Phaser.GameObjects.Sprite;
    note_mode: Phaser.GameObjects.Sprite;
    song_mode: Phaser.GameObjects.Sprite;
    story_mode: Phaser.GameObjects.Sprite;
    selector: Phaser.GameObjects.Sprite;
    down: Phaser.Input.Keyboard.Key;
    selectionID: number;
    up: Phaser.Input.Keyboard.Key;
    enter: Phaser.Input.Keyboard.Key;
    hiScore: any;
    warningTxt: Phaser.GameObjects.Text;
    warningTxt2: Phaser.GameObjects.Text;

    constructor() {
      super({ key: 'menuScene' });
    }

    create(data) {

        this.hiScore = data.hiSc

        //draw the menu background
        this.background = this.add.tileSprite(0,0, DEFAULT_WIDTH, DEFAULT_HEIGHT, "menuBG");
        this.background.setOrigin(0, 0);

        //create menu components
        this.backDrop = this.add.sprite(280,570,"backdrop")
        this.title = this.add.sprite(275,430,"title")
        
        this.note_mode = this.add.sprite(275,480,"menu_note_mode").setInteractive()
        
        this.song_mode = this.add.sprite(275,530,"menu_song_mode").setInteractive()

        this.story_mode = this.add.sprite(275,580,"menu_story_mode").setInteractive()

        this.selector = this.add.sprite(150,this.note_mode.y,"selector")


        //0 = note mode, 1 = song mode, 2 = story mode
        this.selectionID = 0

        let mode1txt = this.add.text(this.note_mode.x+300,this.note_mode.y-30, "", {font: "36px Arial",fill: "#FFFFFF",align: "left"})
        let mode2txt = this.add.text(this.song_mode.x+300,this.note_mode.y-30, "", {font: "36px Arial",fill: "#FFFFFF",align: "left"})
        let mode3txt = this.add.text(this.story_mode.x+300,this.note_mode.y-30, "", {font: "36px Arial",fill: "#FFFFFF",align: "left"})
        
        this.warningTxt = this.add.text(this.story_mode.x+300,700, "", {font: "36px Arial",fill: "#FFFFFF",align: "left"})
        this.warningTxt2 = this.add.text(this.story_mode.x+300,700, "", {font: "36px Arial",fill: "#FFFFFF",align: "left"})

        let menuInstrc = this.add.text(50,40, "(To navigate menu use ▲ ▼ arrow keys and ↵ to select)", {font: "30px Arial",fill: "#FFFFFF",align: "left"})

        this.note_mode.on('pointerover',function(pointer){mode1txt.setText("Learn the 8 keys starting with middle c\nfor the right hand on the piano\n(use ▲ ▼ arrow keys and ↵ to select)")})
        this.note_mode.on('pointerout',function(pointer){mode1txt.setText("")})

        if(this.hiScore[3] < 5) {
            this.song_mode.on('pointerover',function(pointer){mode2txt.setText("🔒 Get a score of 5 or more on level 4 \n     of note mode to play song mode")})
            this.song_mode.on('pointerout',function(pointer){mode2txt.setText("")})
        } else {
            this.song_mode.on('pointerover',function(pointer){mode2txt.setText("Play songs using the notes you learned\n(use ▲ ▼ arrow keys and ↵ to select)")})
            this.song_mode.on('pointerout',function(pointer){mode2txt.setText("")})
        }

        if(this.hiScore[3] < 10){
            this.story_mode.on('pointerover',function(pointer){mode3txt.setText("🔒 Get a score of 5 or more on level 4 \n     of note mode to play song mode")})
            this.story_mode.on('pointerout',function(pointer){mode3txt.setText("")})
        } else {
            this.story_mode.on('pointerover',function(pointer){mode3txt.setText("Play challenges to progress your story\nto the top of the piano world\n(use ▲ ▼ arrow keys and ↵ to select)")})
            this.story_mode.on('pointerout',function(pointer){mode3txt.setText("")})
        }
        this.down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
        this.up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        this.enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)

    }
  
    update() {

        //down arrow selection
        if(Phaser.Input.Keyboard.JustDown(this.down)) {
            if(this.selector.y == this.note_mode.y){
                this.selector.setY(this.song_mode.y)
                this.selectionID = 1
            }else if(this.selector.y == this.song_mode.y){
                this.selector.setY(this.story_mode.y)
                this.selectionID = 2
            }else{
                this.selector.setY(this.note_mode.y)
                this.selectionID = 0
            }
        }
        
        //up arrow selection
        if(Phaser.Input.Keyboard.JustDown(this.up)) {
            if(this.selector.y == this.note_mode.y){
                this.selector.setY(this.story_mode.y)
                this.selectionID = 2
            }else if(this.selector.y == this.song_mode.y){
                this.selector.setY(this.note_mode.y)
                this.selectionID = 0
            }else{
                this.selector.setY(this.song_mode.y)
                this.selectionID = 1
            }
        }

        //go to the selection if enter is pressed
        if(Phaser.Input.Keyboard.JustDown(this.enter)) {
            if(this.selectionID == 0) {
                this.scene.start('noteModeMain',{highSc: this.hiScore})
            } else if(this.selectionID == 1) {
                if (this.hiScore[3] >= 5){this.scene.start('songModeMain')}
            } else if(this.selectionID == 2) {
                if(this.hiScore[3] >= 10) {this.scene.start('storyModeMain')}
            }
        }

        if(this.hiScore[3] < 5 && this.selectionID == 1){
            this.warningTxt.setText("🔒 Get a score of 5 or more on level 4 \n     of note mode to play song mode")
        }else {
            this.warningTxt.setText("")
        }
        if(this.hiScore[3] < 5 && this.selectionID == 2){
            this.warningTxt2.setText("🔒 Get a score of 10 or more on level 4 \n     of note mode to play story mode")
        }else {
            this.warningTxt2.setText("")
        }
        
    }
}