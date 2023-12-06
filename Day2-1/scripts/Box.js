// @ts-check

export default class Box {
  /**
   * @param {object} balls
   */
  constructor(balls) {
    this.balls = {};
    for(const ballColor in balls) {
      this.balls[ballColor] = balls[ballColor];
    }
  }

  /**
   * @param {object} balls
   */
  contains(balls) {
    for(const ballColor in balls) {
      if(
        this.balls[ballColor] === undefined ||
        balls[ballColor] > this.balls[ballColor]
      ) {
        return false;
      }
    }

    return true;
  }
}
