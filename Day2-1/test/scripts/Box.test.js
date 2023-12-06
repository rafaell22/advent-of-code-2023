// @ts-check

import Box from '../../scripts/Box.js';

describe('Test box of balls content', () => {
  test('Succesfully check that box contains specified amount of red balls', () => {
    const box = new Box({ r: 4 });
    expect(box.contains({ r: 4 })).toBe(true);
  });

  test('Succesfully check that the box doesn\'t contain specified amount of red balls', () => {
    const box = new Box({ r: 4 });
    expect(box.contains({ r: 5 })).toBe(false);
  });

  test('Succesfully check that box contains more than the specified amount of red balls', () => {
    const box = new Box({ r: 4 });
    expect(box.contains({ r: 3 })).toBe(true);
  });

  test('Succesfully check that box contains more than the specified amount of green balls', () => {
    const box = new Box({ g: 3 });
    expect(box.contains({ g: 2 })).toBe(true);
  });

  test('Succesfully check that box contains same or more than the specified amount of red balls and green balls', () => {
    const box = new Box({ r: 4, g: 2 });
    expect(box.contains({ r: 3, g: 2 })).toBe(true);
  });


  test('Succesfully check that the box doesn\'t contain blue balls', () => {
    const box = new Box({ g: 3 });
    expect(box.contains({ b: 5 })).toBe(false);
  });
});
