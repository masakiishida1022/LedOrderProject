const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
};

exports.handler = function (event, context, callback) {
  //callback(null, { statusCode: 200, headers, body: "hello, masaki" });
  const body = JSON.parse(event.body);

  const reply = [...body];
  /*reply.length = 100;
  reply.forEach((element, i) => {
    if (i < body.length) {
      reply[i] = body[i];
    } else {
      reply[i] = body[0];
    }
  });*/

  //const cpyBody = [...body];

  //console.log(body);

  /*const initOrderList = [
    { patternNo: 1, num: 0 },
    { patternNo: 2, num: 0 },
    { patternNo: 3, num: 0 },
    { patternNo: 4, num: 0 },
    { patternNo: 5, num: 0 },
    { patternNo: 6, num: 0 },
  ];*/

  /*const reply = body.map((order, i) => {
    return body[i] * 2;
  });*/

  /*const reply = initOrderList.map((order, index, array) => {
    return index < body.length
      ? { patternNo: index, num: body[index].num }
      : { patternNo: index, num: 0 };
  });*/

  callback(null, { statusCode: 200, headers, body: JSON.stringify(reply) });
};
