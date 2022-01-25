const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
};

exports.handler = function (event, context, callback) {
  //callback(null, { statusCode: 200, headers, body: "hello, masaki" });
  const body = JSON.parse(event.body);
  console.log(body);
  jsn = {
    data: {
      a: "abc",
      b: "あいう",
      c: 123,
    },
  };
  const reply = JSON.stringify(jsn);
  callback(null, { statusCode: 200, headers, body: reply });
};
