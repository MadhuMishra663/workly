// controllers/auth.controller.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AuthHelpers } from "./helpers";
import { JWT_SECRET } from "../../config/key";
import User from "../../models/users";
import bcrypt from "bcrypt";
import { FirebaseUserHelper } from "../../firebase/helpers";
export class AuthRoutes {
  public static signup = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { name, email, password, role, company } = req.body;

      if (!name || !email || !password || !company) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password, salt);

      const user = new User({
        name,
        email,
        passwordHash,
        role: role || "employee",
        company,
      });

      await user.save();

      // ---- Save to Firebase ----
      await FirebaseUserHelper.createUser(user);

      res.status(201).json({
        message: "User created successfully",
        user,
      });
    } catch (error) {
      next(error);
    }
  };
}
