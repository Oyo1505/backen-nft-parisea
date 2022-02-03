const { model, Schema } = require("mongoose");

const postSchema = new Schema({
  // userId: { type: Schema.Types.ObjectId, ref: "user" },
  userName: String,
  userPfp: String,
  image: { type: String, required: true },
  description: String,
  postedTime: { type: Date, default: Date.now() },
  // likes: [{ type: Schema.Types.ObjectId, ref: "user" }],
});

const postModel = model("post", postSchema);
module.exports = postModel;
