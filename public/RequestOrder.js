// ボタンを押すと、ブロック内のプログラムが実行される
//import axios from "axios";

$("#btn1").on("click", function () {
  var data = {};
  var table = document.getElementById("OrderTable");
  var order = getRequestOrder(table);

  var resultTable = document.getElementById("resultTable");

  console.log(order);
  console.log(JSON.stringify(order));
  var parsedData = JSON.parse(JSON.stringify(order));
  console.log(parsedData);
  console.log(JSON.stringify(parsedData));
  axios
    .post("/.netlify/functions/lambdaFuncGetPattern", JSON.stringify(order))
    //.then((response) => console.log("response body:", response.data));
    .then((response) => setRequestOrder(resultTable, response.data));
  //console.log(response);
});
