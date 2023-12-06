import { open } from 'node:fs/promises';
import Game from './scripts/Game.js';
import Box from './scripts/Box.js';

(async function readCalibrationValues() {
  const file = await open('./data/games.txt'); 
  let total = 0;
  for await (const line of file.readLines()) {
    console.log(line)
    const game = new Game(line);
    const minimumCubes = game.minimumCubes();
    const minimumBox = new Box(minimumCubes);
    total += minimumBox.power();
  }

  console.log('total: ', total);
})()
