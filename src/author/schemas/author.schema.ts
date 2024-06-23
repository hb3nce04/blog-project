import { Schema, Document } from 'mongoose';

export const AuthorSchema = new Schema({
  name: {type: String, required: true},
});

export interface Author extends Document {
  readonly name: string;
}