const GET_RESOURCE = require("../../framework/read_resource").read_resource;
const ENDPOINT = "posts";
const assert = require("chai").assert;

describe("read posts", async function() {
  // test a functionality

  it("should read an existing post id", async function() {
    let payload = await GET_RESOURCE(`/${ENDPOINT}/1`);
    let uId = payload.userId;
    let id = payload.id;
    let title = payload.title;
    let body = payload.body;

    assert.equal(uId, 1);
    assert.equal(id, 1);
    assert.equal(
      title,
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    );
    assert.equal(
      body,
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    );
  });
  //add additional tests for reading multiple posts, all posts, invalid posts (ids that dont exists or ids that are not integers) ...
});
