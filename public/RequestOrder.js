// ボタンを押すと、ブロック内のプログラムが実行される
//import axios from "axios";

$("#btn1").on("click", function () {
  axios
    //.get("http://localhost:9000/hello")
    .get("/.netlify/functions/hello")
    //.then((response) => console.log("response body:", response.data));
    .then((response) => $("#outputBox").val(response.data));
});
