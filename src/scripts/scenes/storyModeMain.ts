const DEFAULT_WIDTH = 1280;
const DEFAULT_HEIGHT = 800;

export default class StoryModeMain extends Phaser.Scene {
  TITLE: Phaser.GameObjects.Text;
    background: Phaser.GameObjects.TileSprite;
    esc: Phaser.Input.Keyboard.Key;
  back: Phaser.GameObjects.RenderTexture;
  instructions: Phaser.GameObjects.Text;
  storyArray: string[];
  storyIndex: number;
  space: Phaser.Input.Keyboard.Key;
  storyText: Phaser.GameObjects.Text;

  constructor() {
    super({ key: 'storyModeMain' });
  }

  create() {

    //draw the menu background
    this.background = this.add.tileSprite(0,0, DEFAULT_WIDTH, DEFAULT_HEIGHT, "background");
    this.background.setOrigin(0, 0);

    this.TITLE = this.add.text(30,30, "STORY MODE", {font: "36px Arial",fill: "#000000",align: "center"})

    this.back = this.add.renderTexture(DEFAULT_WIDTH-465, -160, 750, 270)
    this.back.fill(0x000000,.2)
    this.back.setInteractive()
    //add the score to the game
    this.instructions = this.add.text(DEFAULT_WIDTH-450, 30, "ESC. to return", 
    {font: "65px Arial",fill: "#FFFFFF",align: "center"})
    this.instructions.setAlpha(.9)

    this.esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)
    this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
    
    this.storyIndex = 0
    this.storyText = this.add.text(DEFAULT_WIDTH/2,DEFAULT_HEIGHT/2, "", {font: "32px Arial",fill: "#000000",align: "center"})

    this.storyArray = [
      "You: Hey, Alex, what are you doing here?!",
      "Alex: Do you really think I don't know you're\nhere practicing after school,\nI'm your best friend after all!",
      "You: Okay... but, don't laugh if I make mistakes!",
      "Alex: I won't dork, just show me that one song\nyou were working on",
      "4",
      "Alex: Wow, not bad, now do you wann go get something\nto eat? I'm super hunfry",
      "You: Okay, I guess so...",
      "7",
      "Alex: that was some good food...",
      "Punk: Hey, I know you from school... You're \nthe kid that hogs the practice room!",
      "Punk: You always act like you're so good at \npiano, I bet you couldn't play this song! ",
      "Punk: Just leave us alone",
      "Punk: I tell you what, if you can play\nthe song, my dad runs the piano competition",
      "Punk: I can get you a pass to compete if you can play it\n If not then I get the practice room",
      "You: (I really want to compete) Fine...",
      "15",
      "Punk: I may be a punk but I'm a man of my word...\n here's the ticket, the competition is in an hour",
      "You: AN HOUR?! Alex lets go quick!",
      "18",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""]
  }

  update() {

    //temp
    if(Phaser.Input.Keyboard.JustDown(this.esc)) {
        this.scene.start('menuScene')
    }

    //temp
    if(Phaser.Input.Keyboard.JustDown(this.space)) {
      this.storyIndex++
    }

    if(this.storyIndex == 4){

    }
    else if(this.storyIndex == 7){
      
    }
    else if(this.storyIndex == 15){
      
    }
    else if(this.storyIndex == 18){
      
    } else {

    }

  }
}