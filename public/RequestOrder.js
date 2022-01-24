// ボタンを押すと、ブロック内のプログラムが実行される
//import axios from "axios";

$("#btn1").on("click", function () {
  const text = document.getElementById("tBox").value;
  console.log(text);
  axios
    .post("/.netlify/functions/hello", JSON.parse(text))
    //.then((response) => console.log("response body:", response.data));
    .then((response) => $("#outputBox").val(response.data));
});
