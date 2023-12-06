// @ts-check

export default class Box {
  /**
   * @param {object} cubes
   */
  constructor(cubes) {
    this.cubes = {};
    for(const cubeColor in cubes) {
      this.cubes[cubeColor] = cubes[cubeColor];
    }
  }

  /**
   * @param {object} cubes
   */
  contains(cubes) {
    for(const cubeColor in cubes) {
      if(
        this.cubes[cubeColor] === undefined ||
        cubes[cubeColor] > this.cubes[cubeColor]
      ) {
        return false;
      }
    }

    return true;
  }

  /**
   * @returns {number}
   */
  power() {
    let power = 1;
    for(const cubeColor in this.cubes) {
      power *= this.cubes[cubeColor];
    }

    return power;
  }
}
