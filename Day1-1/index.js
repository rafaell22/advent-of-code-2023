import { open } from 'node:fs/promises';

(async function readCalibrationValues() {
  const file = await open('./data/calibrationDocument.txt'); 
  let total = 0;
  console.log('file: ', file);
  for await (const line of file.readLines()) {
    console.log(line)
    let firstNumber = null;
    let lastNumber = null;
    for(const char of line) {
      const charAsInt = parseInt(char);
      if(isNaN(charAsInt)) {
        continue;
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
