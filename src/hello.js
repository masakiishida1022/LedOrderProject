const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
};

exports.handler = function (event, context, callback) {
  //callback(null, { statusCode: 200, headers, body: "hello, masaki" });
  const body = JSON.parse(event.body);
  console.log(body);
  const obj = { name: "John", age: 30, city: "New York" };
  const reply = JSON.stringify(obj);
  callback(null, { statusCode: 200, headers, body: reply });
};
