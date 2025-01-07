const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    category: {
      type: String,
      emum: ["Personal", "Work", "Study", "Ideas", "Journal", "Other"],
    },
    tags: {
      type: String,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("Note", noteSchema);
module.exports = Note;
