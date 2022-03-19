const NUM_UNITS = 7;
const NUM_LED_IN_UNIT = 3;

//const mArray = Array(NUM_UNITS * NUM_LED_IN_UNIT + 1).fill(0);
//const aArray = Array(NUM_UNITS + 1).fill(0);
//const bArray = Array(NUM_UNITS + 1).fill(0);

let cutoutB = (inArray, n, outList) => {
  if (inArray[n] > 0) {
    //同じサイズが見つかった
    inArray[n]--;
    outList.push(n);
    return;
  }
  //ぴったりのサイズがなかったので分割する。
  for (let i = 1; i <= n / 2; i++) {
    // (i, n-i)に分割して、n-iのほうは再起呼び出す
    if (inArray[i] == 0) {
      continue;
    }
    //左側はあったので、右側（n-i)を満たす組み合わせがあるか探す
    let cpyArray = [...inArray];

    cpyArray[i]--;
    let out = [];
    cutoutB(cpyArray, n - i, out);
    if (0 < out.length) {
      inArray[i]--;
      outList.push(i);

      out.forEach((elem) => {
        outList.push(elem);
        inArray[elem]--;
        return;
      });
    }
  }
};

let cutoutA = (inArray, n, outList) => {
  if (inArray[n] > 0) {
    inArray[n]--;
    outList.push(n);
    return;
  } else {
    for (let i = n - 1; i > n / 2; i--) {
      if (0 < inArray[i] && 0 < inArray[n - i]) {
        inArray[i]--;
        inArray[n - i]--;
        outList.push(i);
        outList.push(n - i);
        return;
      }
    }
  }
};

const cutout = (inArray, nUnits, outList) => {
  for (let numA = nUnits; numA >= 0; numA--) {
    let cpyAArray = [...inArray.a];
    let cpyBArray = [...inArray.b];

    let outAList = [];
    let outBList = [];

    if (numA > 0) {
      cutoutA(cpyAArray, numA, outAList);
      if (outAList.length == 0) {
        continue;
      }
    }
    let numB = nUnits - numA;
    if (numB > 0) {
      cutoutB(cpyBArray, numB, outBList);
      if (outBList.length == 0) {
        continue;
      }
    }

    outAList.forEach((elem) => inArray.a[elem]--);
    outBList.forEach((elem) => inArray.b[elem]--);

    Array.prototype.push.apply(outList.a, outAList);
    Array.prototype.push.apply(outList.b, outBList);
    return;
  }
};

let countResult = (resultsList, numUnits) => {
  const Count = { a: 0, b: 0 };
  resultsList.forEach((elem, index) => {
    Count.a += elem.a.filter((n) => n == numUnits).length;
    Count.b += elem.b.filter((n) => n == numUnits).length;
  });
  return Count;
};

const testDataDic = {
  長さ1: 1,
  長さ2: 1,
  長さ3: 2,
  長さ4: 0,
  長さ5: 0,
  長さ6: 2,
  長さ7: 0,
  長さ8: 0,
  長さ9: 1,
  長さ10: 0,
  長さ11: 0,
  長さ12: 0,
  長さ13: 0,
  長さ14: 0,
  長さ15: 0,
  長さ16: 0,
  長さ17: 0,
  長さ18: 0,
  長さ19: 4,
  長さ20: 0,
  長さ21: 1,
};
console.log(`要求モジュール: ${JSON.stringify(testDataDic)}`);

const reqModules = Array(NUM_UNITS + 1).fill(0);
Object.keys(testDataDic).forEach(function (key, i) {
  reqModules[i + 1] = testDataDic[key];
});

/*const testData = [
  [testDataDic.],
  [0, 0, 2],
  [0, 0, 2],
  [0, 0, 1],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
const reqModules = [
  ...testData[0],
  ...testData[1],
  ...testData[2],
  ...testData[3],
  ...testData[4],
  ...testData[5],
  ...testData[6],
  ...testData[7],
];*/

console.log(`reqModule ${reqModules}`);
const mraArray = [];
const mrbArray = [];

let cutOutLedUnits = (numUnits, reqModules) => {
  const resultsList = [];

  const aArray = Array(numUnits + 1).fill(0);
  const bArray = Array(numUnits + 1).fill(0);

  let reqUnits = {
    a: aArray,
    b: bArray,
  };

  reqModules.forEach((elem, i) => {
    let rem = i % NUM_LED_IN_UNIT;
    let idx = (i - rem) / NUM_LED_IN_UNIT;
    if (rem != 0) {
      reqUnits.a[(i - rem) / NUM_LED_IN_UNIT + 1] += elem;
    } else {
      reqUnits.b[i / NUM_LED_IN_UNIT] += elem;
    }
  });

  console.log(`aArray: ${reqUnits.a}`);
  console.log(`bArray: ${reqUnits.b}`);

  const cpyAArray = [...reqUnits.a];
  const cpyBArray = [...reqUnits.b];

  for (let i = numUnits; i >= 0; i--) {
    while (true) {
      const aList = [];
      const bList = [];

      let outList = {
        a: aList,
        b: bList,
      };

      cutout(reqUnits, i, outList);

      if (outList.a.length == 0 && outList.b.length == 0) {
        break;
      }

      resultsList.push(outList);

      //mra.forEach((elem) => aArray[elem]--);
      //mrb.forEach((elem) => bArray[elem]--);
    }
  }

  //aArray, bArrayに０以外の要素が残っていないことを確認
  console.assert(aArray.filter((n) => n != 0).length == 0);
  console.assert(bArray.filter((n) => n != 0).length == 0);

  resultsList.forEach((elem) => {
    const initValue = 0;
    let countA = elem.a.reduce((prev, cur) => prev + cur, initValue);
    let countB = elem.b.reduce((prev, cur) => prev + cur, initValue);
    //console.log(`A: ${countA}, B: ${countB}`);
    console.assert(0 <= countA + countB && countA + countB <= NUM_UNITS);
  });

  for (let i = 1; i < NUM_LED_IN_UNIT; i++) {
    console.assert(cpyAArray[i] == countResult(resultsList, i).a);
    console.assert(cpyBArray[i] == countResult(resultsList, i).b);
  }

  return resultsList;
};

let mrArray = cutOutLedUnits(NUM_UNITS, reqModules);

console.log(`mrArray: ${JSON.stringify(mrArray)}`);
