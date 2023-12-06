import { open } from 'node:fs/promises';
import Game from './scripts/Game.js';
import Box from './scripts/Box.js';

(async function readCalibrationValues() {
  const file = await open('./data/games.txt'); 
  let total = 0;
  const box = new Box({ r: 12, g: 13, b: 14 });
  for await (const line of file.readLines()) {
    console.log(line)
    const game = new Game(line);
    if(game.isPlayableWith(box)) {
      total += game.number;
    }
  }

  console.log('total: ', total);
})()
