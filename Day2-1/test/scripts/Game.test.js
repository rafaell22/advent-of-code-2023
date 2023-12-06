// @ts-check

import Game from '../../scripts/Game.js';
import Box from '../../scripts/Box.js';

describe('Test game data parsing', () => {
  test('Succesfully parse game number from description', () => {
    const game = new Game('Game 1: 4 red, 18 green, 15 blue; 17 green, 18 blue, 9 red; 8 red, 14 green, 6 blue; 14 green, 12 blue, 2 red');
    expect(game.number).toBe(1);
  });

  test('Succesfully calculate the sum of two different game numbers', () => {
    const game = new Game('Game 1: 4 red, 18 green, 15 blue; 17 green, 18 blue, 9 red; 8 red, 14 green, 6 blue; 14 green, 12 blue, 2 red');
    const game2 = new Game('Game 2: 4 red, 18 green, 15 blue; 17 green, 18 blue, 9 red; 8 red, 14 green, 6 blue; 14 green, 12 blue, 2 red');

    expect(game.number + game2.number).toBe(3);
  });

  test('Succesfully get the amount of balls in a game, 1 set, only red balls', () => {
    const game =  new Game('Game 1: 4 red');
    expect(game.sets[0]).toEqual(expect.objectContaining({ r: 4, g: 0, b: 0 }));
  });

  test('Succesfully get the amount of balls in a game set, 1 set, only red and green balls', () => {
    const game =  new Game('Game 1: 4 red, 2 green');
    expect(game.sets[0]).toEqual(expect.objectContaining({ r: 4, g: 2, b: 0 }));
  });

  test('Successfully get the amount of balls in a game set, 1 set, red + green + blue balls', () => {
    const game =  new Game('Game 1: 4 red, 2 green, 7 blue');
    expect(game.sets[0]).toEqual(expect.objectContaining({ r: 4, g: 2, b: 7 }));
  });

  test('Successfully get the amount of balls in a game set, 2 sets, red + green + blue balls', () => {
    const game =  new Game('Game 1: 4 red, 2 green, 7 blue; 1 red, 2 green, 4 blue');
    expect(game.sets).toEqual(expect.arrayContaining([
    expect.objectContaining({ r: 4, g: 2, b: 7 }),
    expect.objectContaining({ r: 1, g: 2, b: 4 }),
    ]));
  });

  test('Succesfully confirms a game is playable given a box of balls', () => {
    const game = new Game('Game 1: 4 red, 18 green, 15 blue; 17 green, 18 blue, 9 red; 8 red, 14 green, 6 blue; 14 green, 12 blue, 2 red');
    const box = new Box({ r: 9, g: 18, b: 18 });;
    expect(game.isPlayableWith(box)).toBe(true);
  });

  test('Succesfully confirms a game is not playable given a box of balls', () => {
    const game = new Game('Game 1: 4 red, 18 green, 15 blue; 17 green, 18 blue, 9 red; 8 red, 14 green, 6 blue; 14 green, 12 blue, 2 red');
    const box = new Box({ r: 9, g: 9, b: 18 });;
    expect(game.isPlayableWith(box)).toBe(false);
  });
});
