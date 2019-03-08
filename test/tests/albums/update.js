const UPDATE_PARTIAL_RESOURCE = require("../../framework/update_resource")
  .update_patch_resource;
const UPDATE_FULL_RESOURCE = require("../../framework/update_resource")
  .update_put_resource;
const GET_RESOURCE = require("../../framework/read_resource").read_resource;

const ENDPOINT = "albums";
const assert = require("chai").assert;

describe("update albums using patch and put", async function() {
  // test a functionality

  it("should only update title for existing album", async function() {
    //Read album id 3 and store fields; userId, id, and title
    resourceId = 3;
    let payload = await GET_RESOURCE(`/${ENDPOINT}/${resourceId}`);
    let original_userId = payload.userId;
    let original_id = payload.id;

    var params = {
      title: "updating the title"
    };
    let updatedPayload = await UPDATE_PARTIAL_RESOURCE(
      `/${ENDPOINT}/`,
      resourceId,
      params
    );
    let uId = updatedPayload.userId;
    let id = updatedPayload.id;
    let title = updatedPayload.title;

    assert.equal(uId, original_userId);
    assert.equal(id, original_id);
    assert.equal(title, "updating the title");
  });

  it("should completely replace existing album; if no field specified it should be undefined", async function() {
    //Read album id 3 and store fields; userId, id, and title
    resourceId = 1;
    let payload = await GET_RESOURCE(`/${ENDPOINT}/${resourceId}`);
    let original_userId = payload.userId;
    let original_id = payload.id;

    var params = {
      title: "updating the title"
    };
    let updatedPayload = await UPDATE_FULL_RESOURCE(
      `/${ENDPOINT}/`,
      resourceId,
      params
    );
    let uId = updatedPayload.userId;
    let id = updatedPayload.id;
    let title = updatedPayload.title;

    assert.notExists(uId);
    assert.equal(id, original_id);
    assert.equal(title, "updating the title");
  });
});
