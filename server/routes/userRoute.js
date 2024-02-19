import { Router } from "express";
import { User } from "../db/userSchema.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import config from "../config.js";

dotenv.config();
const router = Router();
const secret = config.JWT_SECRET;

router.post("/signup", async (req, res) => {
  const { email, password, fullname } = req.body;
  try {
    const isExist = await User.findOne({ email });
    if (isExist) {
      return res.status(409).send("User already exists!");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      fullname,
      email,
      password: hashedPassword,
    });

    res.status(201).send("User created successfully!");
  } catch (error) {
    res.status(500).send("An error occurred during signup.");
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user._id }, secret, { expiresIn: "1h" });
      res.json({ token });
    } else {
      res.status(401).json({
        message: "Incorrect email or password!",
      });
    }
  } catch (error) {
    res.status(500).send("An error occurred during signin.");
  }
});

export default router;
