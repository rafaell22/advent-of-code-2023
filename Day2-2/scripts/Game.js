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
    const cubesInSet = { r: 0, g: 0, b: 0 };
    const cubesCountPerColor = setDescription.split(',');
    for(const cubesCountText of cubesCountPerColor) {
      const cubesCountParts = cubesCountText.trim().split(' ');
      const cubesCount = cubesCountParts[0];
      const cubesColor = cubesCountParts[1];
      switch(cubesColor) {
        case 'red': 
          cubesInSet.r = parseInt(cubesCount);
          break;
        case 'green': 
          cubesInSet.g = parseInt(cubesCount);
          break;
        case 'blue':
          cubesInSet.b = parseInt(cubesCount);
      }
    }
    return cubesInSet;
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

  /**
   * @returns {object}
   */
  minimumCubes() {
    if(this.sets.length === 1) {
      return this.sets[0];
    }

    const minimumCubes = {};
    for(const set of this.sets) {
      for(const cubeColor in set) {
        if(
          minimumCubes[cubeColor] &&
          minimumCubes[cubeColor] >= set[cubeColor]
        ) {
          continue;
        }

        minimumCubes[cubeColor] = set[cubeColor];
      }
    }

    return minimumCubes;
  }
}
