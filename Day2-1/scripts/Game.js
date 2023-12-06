// @ts-check

import Box from './Box.js';

export default class Game {
  /**
   * @param {string} gameDescription
   */
  constructor(gameDescription) {
    this.number = Game.getGameNumber(gameDescription);
    this.sets = Game.getBallsDrawsInGame(gameDescription);
  }

  /**
   * @param {string} gameDescription
   */
  static getGameNumber(gameDescription) {
    const gameDescriptionParts = gameDescription.split(':');
    const gameNumberPart = gameDescriptionParts[0];
    const gameNumberString = gameNumberPart.replace('Game ', '');
    return parseInt(gameNumberString);
  } 

  /**
   * @param {string} gameDescription
   */
  static getBallsDrawsInGame(gameDescription) {
    const gameDescriptionParts = gameDescription.split(':');
    const gameSetsPart = gameDescriptionParts[1];
    const gameSetsDescriptions = gameSetsPart.split(';');
    const sets = [];
    for(const setDescription of gameSetsDescriptions) {
        sets.push(Game.getBallsCountInSet(setDescription));
    }

    return sets;
  }

  /**
   * @param {string} setDescription
   */
  static getBallsCountInSet(setDescription) {
    const ballsInSet = { r: 0, g: 0, b: 0 };
    const ballsCountPerColor = setDescription.split(',');
    for(const ballsCountText of ballsCountPerColor) {
      const ballsCountParts = ballsCountText.trim().split(' ');
      const ballsCount = ballsCountParts[0];
      const ballsColor = ballsCountParts[1];
      switch(ballsColor) {
        case 'red': 
          ballsInSet.r = parseInt(ballsCount);
          break;
        case 'green': 
          ballsInSet.g = parseInt(ballsCount);
          break;
        case 'blue':
          ballsInSet.b = parseInt(ballsCount);
      }
    }
    return ballsInSet;
  }

  /**
   * @param {Box} box
   * @returns {boolean}
   */
  isPlayableWith(box) {
    for(const set of this.sets) {
      if(box.contains(set)) {
        continue;
      }

      return false;
    }
    return true;
  }
}
