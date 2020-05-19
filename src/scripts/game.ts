import 'phaser';
import MainScene from './scenes/mainScene';
import PreloadScene from './scenes/preloadScene';
import MenuScene from './scenes/menuScene';
import NoteModeMain from './scenes/noteModeMain';
import SongModeMain from './scenes/songModeMain';
import StoryModeMain from './scenes/storyModeMain';
import SongMain from './scenes/songMain';

import GameConfig = Phaser.Types.Core.GameConfig;

const DEFAULT_WIDTH = 1280;
const DEFAULT_HEIGHT = 800;


const config: GameConfig = {
    backgroundColor: '#ffffff',
    scale: {
        parent: 'phaser-game',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT
    },
    scene: [PreloadScene, MenuScene, NoteModeMain, SongModeMain, StoryModeMain, MainScene, SongMain],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 0 }
        }
    }
};

window.addEventListener('load', () => {
    window['game'] = new Phaser.Game(config);
});

//
