// helpers/users.helpers.ts
import { firestoreDB } from "../../firebase";
import User from "../../models/users";
import bcrypt from "bcryptjs";

export class AuthHelpers {
  /**
   * Create user in MongoDB + Firestore
   */
  public static createUser = async (payload: {
    name: string;
    email: string;
    password: string;
    role?: string;
    company: string;
  }) => {
    const { name, email, password, role, company } = payload;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("User already exists");
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // 1️⃣ Create user in MongoDB
    const user = new User({
      name,
      email,
      passwordHash,
      role: role || "employee",
      company,
    });
    await user.save();

    // 2️⃣ Create user in Firebase Firestore
    await firestoreDB.collection("users").doc(String(user._id)).set({
      mongoId: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      company: user.company,
      createdAt: new Date(),
      status: user.status,
    });

    return user;
  };
}
