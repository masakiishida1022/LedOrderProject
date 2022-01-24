const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
};

exports.handler = function (event, context, callback) {
  //callback(null, { statusCode: 200, headers, body: "hello, masaki" });
  const body = JSON.parse(event.body);
  const reply = JSON.stringify(body);
  callback(null, { statusCode: 200, headers, body: reply });
};
