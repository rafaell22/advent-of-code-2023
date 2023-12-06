import { open } from 'node:fs/promises';

(async function readCalibrationValues() {
  const file = await open('./data/calibrationDocument.txt'); 
  let total = 0;
  for await (const line of file.readLines()) {
    console.log(line)
    let firstNumber = null;
    let lastNumber = null;
    let char;
    for(let charIndex = 0; charIndex < line.length; charIndex++) {
      char = line[charIndex];
      let charAsInt = parseInt(char);
      if(isNaN(charAsInt)) {
        const stringNumber = readNumber(line.substring(charIndex));

        charAsInt = stringToNumber(stringNumber);
        if(charAsInt === undefined) {
          continue;
        }
        charIndex += stringNumber.length - 2;
      }

      if(firstNumber === null) {
        firstNumber = charAsInt;
        continue;
      }

      lastNumber = charAsInt;
    }

    if(lastNumber === null) {
      lastNumber = firstNumber;
    }

    console.log('number: ', `${firstNumber}${lastNumber}`);
    total += parseInt(`${firstNumber}${lastNumber}`);
  }

  console.log('total: ', total);
})()

const INTEGERS = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const INTEGERS_AS_STRING = {
  z: {
    e: {
      r: {
        o: undefined,
      }
    }
  },
  o: {
    n: {
      e: undefined,
    }
  },
  t: {
    w: {
      o: undefined,
    },
    h: {
      r: {
        e: {
          e: undefined,
        }
      }
    },
  },
  f: {
    o: {
      u: {
        r: undefined,
      }
    },
    i: {
      v: {
        e: undefined,
      }
    }
  },
  s: {
    i: {
      x: undefined,
    },
    e: {
      v: {
        e: {
          n: undefined,
        }
      }
    }
  },
  e: {
    i: {
      g: {
        h: {
          t: undefined,
        }
      }
    }
  },
  n: {
    i: {
      n: {
        e: undefined,
      }
    }
  }
};

/**
 * @param {string} line
 * @param {object|undefined} wordTreeLevel
 *
 * @returns {string}
 */
function readNumber(line, possibleCharacters) {
  if(possibleCharacters === undefined) {
    possibleCharacters = INTEGERS_AS_STRING;
  }

  const currentChar = line[0];
  const nextPossibleCharacters = possibleCharacters[currentChar];
  if(nextPossibleCharacters === undefined) {
    return currentChar;
  }

  return currentChar + readNumber(line.substring(1), nextPossibleCharacters);
}

/**
 * @param {string} string
 * @returns {number}
 */
function stringToNumber(string) {
  return INTEGERS[string];
}
