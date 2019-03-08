async function read_resource(path, queryString) {
  var request = require("supertest");
  var host_url = "https://jsonplaceholder.typicode.com";

  params = queryString || "/";

  reqObject = await request(host_url)
    .get(path)
    .catch(err => {
      throw err;
    });
  let payload = reqObject.body;

  return payload;
}

module.exports = {
  read_resource
};
