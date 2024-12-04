import mongoose, { Schema, Document } from "mongoose";



const ContactSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone:{type:Number,required:true},
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export const Contact = mongoose.model("Contact", ContactSchema);
