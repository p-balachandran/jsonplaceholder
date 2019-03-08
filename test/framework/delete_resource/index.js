async function delete_resource(path, resourceId) {
  var request = require("supertest");
  var host_url = "https://jsonplaceholder.typicode.com";

  route = path + "/" + resourceId;
  reqObject = await request(host_url)
    .del(route)
    .catch(err => {
      throw err;
    });

  let payload = reqObject;
  //return status since body is empty
  return payload.status;
}

module.exports = {
  delete_resource
};
