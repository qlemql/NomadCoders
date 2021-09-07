import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  /*2가지 방법
  1번째는 아래와 같이 작성
  video: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Video",
  },

  2번째는 Video.js에
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ] 과 같이 작성
  */
});

const model = mongoose.model("Comment", CommentSchema);
export default model;
