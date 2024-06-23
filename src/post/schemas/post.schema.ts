import mongoose, { Schema, Document } from 'mongoose';

export const PostSchema = new Schema({
  author: {type: mongoose.SchemaTypes.ObjectId, ref: "Author"},
  category: {type: mongoose.SchemaTypes.ObjectId, ref: "Category"},
  tags: {type: mongoose.SchemaTypes.ObjectId, ref: "Tag"},
  body: {type: String, required: true},
});

export interface Post extends Document {
  readonly author: string;
  readonly category: string;
  readonly tags: string;
  readonly body: string;
}
