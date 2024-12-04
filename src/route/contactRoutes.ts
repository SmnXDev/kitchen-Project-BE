import express from "express";
import { Contact } from "../model/Contact";
import { sendEmail } from "../service/emailService";

const router = express.Router();

router.post("/contact", async (req, res) => {
  const { name, email,phone, message } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({ error: "All fields are required" });
  }

  try {
    // const newContact = new Contact({ name, email, phone, message });
    // await newContact.save();

    await sendEmail(name, email, message,phone);

    res.status(200).json({ message: "Contact form submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to submit contact form" });
  }
});

export default router;
