const sum = require("./LedCutoutFunctions.js");

const NUM_UNITS = 21;
NUM_LED_IN_UNIT = 3;

const mArray = Array(NUM_UNITS * NUM_LED_IN_UNIT + 1).fill(0);
const aArray = Array(NUM_UNITS + 1).fill(0);
const bArray = Array(NUM_UNITS + 1).fill(0);
mArray[3] = 1;
mArray[4] = 3;
mArray[5] = 6;
mArray[8] = 2;

test("makeB test", () => {
  const a = [0, 0, 0, 0, 0, 0, 0, 1];
  const ansA = [0, 0, 0, 0, 0, 0, 0, 0];
  const ansB = [0, 0, 0, 0, 0, 0, 0, 0];
  makeAB(mArray, a, b);
  expect(a).toContainEqual(ansA);
});
