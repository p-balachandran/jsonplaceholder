async function update_patch_resource(path, resourceId, updateFields) {
  var request = require("supertest");
  var host_url = "https://jsonplaceholder.typicode.com";

  var route = path + "/" + resourceId;
  var body = updateFields;

  reqObject = await request(host_url)
    .patch(route)
    .set("Content-Type", "application/json", "charset=UTF-8")
    .send(body)
    .catch(err => {
      throw err;
    });

  let payload = reqObject.body;
  return payload;
}

async function update_put_resource(path, resourceId, fieldsJSON) {
  var request = require("supertest");
  var host_url = "https://jsonplaceholder.typicode.com";

  var route = path + "/" + resourceId;
  var body = fieldsJSON;

  reqObject = await request(host_url)
    .put(route)
    .set("Content-Type", "application/json", "charset=UTF-8")
    .send(body)
    .catch(err => {
      throw err;
    });

  let payload = reqObject.body;
  return payload;
}

module.exports = {
  update_patch_resource,
  update_put_resource
};
