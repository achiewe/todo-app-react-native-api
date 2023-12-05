import { Schema, model } from "mongoose";

const projectSchema = new Schema({
  title: {
    type: Schema.Types.String,
    required: true,
  },

  succeed: {
    type: Schema.Types.Boolean,
    required: true,
  },
});
