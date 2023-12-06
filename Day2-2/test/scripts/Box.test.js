// @ts-check

import Box from '../../scripts/Box.js';

describe('Test box of cubes content', () => {
  test('Succesfully check that box contains specified amount of red cubes', () => {
    const box = new Box({ r: 4 });
    expect(box.contains({ r: 4 })).toBe(true);
  });

  test('Succesfully check that the box doesn\'t contain specified amount of red cubes', () => {
    const box = new Box({ r: 4 });
    expect(box.contains({ r: 5 })).toBe(false);
  });

  test('Succesfully check that box contains more than the specified amount of red cubes', () => {
    const box = new Box({ r: 4 });
    expect(box.contains({ r: 3 })).toBe(true);
  });

  test('Succesfully check that box contains more than the specified amount of green cubes', () => {
    const box = new Box({ g: 3 });
    expect(box.contains({ g: 2 })).toBe(true);
  });

  test('Succesfully check that box contains same or more than the specified amount of red cubes and green cubes', () => {
    const box = new Box({ r: 4, g: 2 });
    expect(box.contains({ r: 3, g: 2 })).toBe(true);
  });


  test('Succesfully check that the box doesn\'t contain blue cubes', () => {
    const box = new Box({ g: 3 });
    expect(box.contains({ b: 5 })).toBe(false);
  });

  test('Succesfully calculate the "power" of the cubes in a box', () => {
    const box = new Box({ r: 2, g: 1, b: 7 });
    expect(box.power()).toBe(14);
  });

  test('Succesfully calculate the sum of the "power" of the cubes in two different boxes', () => {
    const box1 = new Box({ r: 2, g: 1, b: 7 });
    const box2 = new Box({ r: 3, g: 2, b: 1 });
    expect(box1.power() + box2.power()).toBe(20);
  });
});
