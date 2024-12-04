import mongoose, { Schema, Document } from "mongoose";

interface IContact extends Document {
  name: string;
  email: string;
  message: string;
  phone:number;
  date: Date;
}

const ContactSchema = new Schema<IContact>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone:{type:Number,required:true},
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export const Contact = mongoose.model<IContact>("Contact", ContactSchema);
