const ADD_RESOURCE = require("../../framework/add_resource").add_resource;
const chai = require("chai");
chai.use(require("chai-json-schema"));
const assert = require("chai").assert;
const ENDPOINT = "comments";

const createCommentSchema = {
  definitions: {},
  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "http://example.com/root.json",
  type: "object",
  title: "The Root Schema",
  required: ["postId", "id", "name", "email", "body"],
  properties: {
    postId: {
      $id: "#/properties/postId",
      type: "integer",
      title: "The Postid Schema",
      default: 0,
      examples: [1]
    },
    id: {
      $id: "#/properties/id",
      type: "integer",
      title: "The Id Schema",
      default: 0,
      examples: [2]
    },
    name: {
      $id: "#/properties/name",
      type: "string",
      title: "The Name Schema",
      default: "",
      examples: ["comment name"],
      pattern: "^(.*)$"
    },
    email: {
      $id: "#/properties/email",
      type: "string",
      title: "The Email Schema",
      default: "",
      examples: ["testemail@gmail.com"],
      pattern: "^(.*)$"
    },
    body: {
      $id: "#/properties/body",
      type: "string",
      title: "The Body Schema",
      default: "",
      examples: ["comment body"],
      pattern: "^(.*)$"
    }
  }
};

describe("create comments", async function() {
  it("should match expected schema", async function() {
    var params = {
      postId: 1,
      id: 3,
      name: "test comment name",
      email: "testcomment@email.com",
      body: "test comment message"
    };
    let actualpayload = await ADD_RESOURCE(`/${ENDPOINT}/`, params);

    assert.jsonSchema(actualpayload, createCommentSchema);
  });
});
