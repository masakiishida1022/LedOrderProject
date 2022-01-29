function calcPattern(data, numPattern) {
  cpyData = [...data];
  patternArray.forEach((pattern, i, array) => {
    numPattern[i] = 0;
    while (tryRemove(cpyData)) {
      numPattern[i]++;
    }
  });
}

function tryRemove(data, pattern) {
  cpyData = [...data];
  pattern.forEach((val, i) => {
      var found = false; 
      for (i = val-2; i <= val; i++)1 {
          if (0 < cpyData[i]) {
              cpyData[i]--;
              found = true;
              break;
          }
      }
      if (!found) {
          return 0;
      }
    }
  });
  data = [...cpyData];
  return 1;
}

var patternArray = [
  /* */
  [13, 4, 0, 0, 0, 0, 0],
  [13, 5, 0, 0, 0, 0, 0],
  [14, 4, 0, 0, 0, 0, 0],
  [13, 5, 0, 0, 0, 0, 0],

  [10, 7, 0, 0, 0, 0, 0],
  [10, 8, 0, 0, 0, 0, 0],
  [11, 7, 0, 0, 0, 0, 0],
  [11, 8, 0, 0, 0, 0, 0],

  [10, 4, 3, 0, 0, 0, 0],
  [10, 5, 3, 0, 0, 0, 0],
  [11, 4, 3, 0, 0, 0, 0],
  [11, 5, 3, 0, 0, 0, 0],

  [10, 4, 0, 0, 0, 0, 0],
  [10, 5, 0, 0, 0, 0, 0],
  [11, 4, 0, 0, 0, 0, 0],
  [11, 5, 0, 0, 0, 0, 0],

  [7, 7, 0, 0, 0, 0, 0],
  [7, 8, 0, 0, 0, 0, 0],
  [8, 7, 0, 0, 0, 0, 0],
  [8, 8, 0, 0, 0, 0, 0],
];
