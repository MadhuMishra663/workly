import { firestoreDB } from "../firebase";

export class FirebaseUserHelper {
  static async createUser(user: any) {
    try {
      await firestoreDB.collection("users").doc(user._id.toString()).set({
        mongoId: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
        company: user.company?.toString(),
        createdAt: new Date(),
      });

      console.log("✅ Firebase user created");
    } catch (err) {
      console.error("❌ Firebase user error:", err);
    }
  }
}
