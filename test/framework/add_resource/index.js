async function add_resource(route, fieldsJSON) {
  var request = require("supertest");
  var host_url = "https://jsonplaceholder.typicode.com";

  var body = fieldsJSON;
  reqObject = await request(host_url)
    .post(route)
    .set("Content-Type", "application/json", "charset=UTF-8")
    .send(body)
    .catch(err => {
      throw err;
    });

  let payload = reqObject.body;
  return payload;
}

module.exports = {
  add_resource
};
