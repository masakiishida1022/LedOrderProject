/*let Property = {
  fontSize: "small",
  width: "50" + "px",
  tableId: "OrderTable",
  numSize: 21,
  numSizeInRaws: 3,
  parentElem: "orderTableArea",
  editable: true,
  heading1: "サイズ",
  heading2: "本数",
};*/

//makeTable(Property);

function makeTable(prop) {
  let table = document.createElement("table");
  table.id = prop.tableId;
  document.getElementById(prop.parentElem).appendChild(table);

  let thead = document.createElement("thead");
  table.appendChild(thead);
  table.style.fontSize = prop.fontSize;

  let tbody = document.createElement("tbody");
  table.appendChild(tbody);
  //tbody.style.fontSize = fontSize;
  //tbody.style.width = width;

  //一行目（タイトル）
  let rowOfHeader = document.createElement("tr");
  thead.appendChild(rowOfHeader);

  for (let i = 0; i < prop.numSizeInRaws; i++) {
    //サイズヘッダ
    let headingOfSize = document.createElement("th");
    headingOfSize.style.fontSize = prop.fontSize;
    headingOfSize.innerHTML = prop.heading1;
    headingOfSize.style.textAlign = "left";
    rowOfHeader.appendChild(headingOfSize);
    //本数
    let headingOfCount = document.createElement("th");
    headingOfCount.style.fontSize = prop.fontSize;
    headingOfCount.innerHTML = prop.heading2;
    headingOfCount.style.textAlign = "right";
    rowOfHeader.appendChild(headingOfCount);

    //スペース
    let headingOfSpace = document.createElement("th");
    rowOfHeader.appendChild(headingOfSpace);
  }

  for (let r = 0; r < prop.numSize / prop.numSizeInRaws; r++) {
    let row = document.createElement("tr");
    tbody.appendChild(row);
    tbody.style.width = prop.width;

    for (let c = 0; c < prop.numSizeInRaws; c++) {
      let cellOfSize = document.createElement("td");
      cellOfSize.innerHTML = `${
        (c * prop.numSize) / prop.numSizeInRaws + r + 1
      }`;
      cellOfSize.style.textAlign = "center";
      cellOfSize.style.width = prop.width;
      row.appendChild(cellOfSize);

      let cellOfInput = document.createElement("td");
      cellOfInput.innerHTML = "0";
      cellOfInput.contentEditable = prop.editable;
      cellOfInput.style.border = `thin solid #000000`;
      cellOfInput.style.textAlign = "right";
      cellOfInput.style.width = prop.width;
      row.appendChild(cellOfInput);

      let cellOfBlank = document.createElement("td");
      row.appendChild(cellOfBlank);
      cellOfBlank.style.width = prop.width;
    }
  }
}

function getRequestOrder(table) {
  //var table = document.getElementById(prop.tableId);

  var data = {};
  var numRow = table.rows.length;
  var numColumn = table.rows[0].cells.length;
  for (let r = 1 /*一行目はヘッダなので１始まり*/; r < numRow; r++) {
    for (let c = 0; c < numColumn / 3; c++) {
      data[table.rows[r].cells[c * 3].innerText] =
        table.rows[r].cells[c * 3 + 1].innerText;
    }
  }

  return data;
}

function setRequestOrder(table, data) {
  var numRow = table.rows.length;
  var numColumn = table.rows[0].cells.length;
  for (let r = 1 /*一行目はヘッダなので１始まり*/; r < numRow; r++) {
    for (let c = 0; c < numColumn / 3; c++) {
      table.rows[r].cells[c * 3 + 1].innerText =
        data[table.rows[r].cells[c * 3].innerText];
    }
  }
}
