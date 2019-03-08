const DELETE_RESOURCE = require("../../framework/delete_resource")
  .delete_resource;
const chai = require("chai");
chai.use(require("chai-json-schema"));
const assert = require("chai").assert;
const ENDPOINT = "photos";

describe("delete existing photo", async function() {
  it("should delete existing photo", async function() {
    let statusPayload = await DELETE_RESOURCE(`/${ENDPOINT}`, 4);
    assert.equal(200, statusPayload);
  });
});
