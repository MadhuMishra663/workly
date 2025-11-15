// import { FirebaseApp, initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import { getFirestore, doc, setDoc, Firestore } from "firebase/firestore";
// const {
//   FIREBASE_API_KEY,
//   FIREBASE_AUTH_DOMAIN,
//   FIREBASE_PROJECT_ID,
//   FIREBASE_STORAGE_BUCKET,
//   FIREBASE_MESSAGING_SENDER_ID,
//   FIREBASE_APP_ID,
//   measurementId,
// } = process.env;

// import admin from "firebase-admin";

// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.applicationDefault(),
//   });
// }
// const firebaseConfig = {
//   apiKey: "AIzaSyDa8Px6aGarh1cwXaXSlDAr9g7APC_pCT0",
//   authDomain: "workly-309c4.firebaseapp.com",
//   projectId: "workly-309c4",
//   storageBucket: "workly-309c4.firebasestorage.app",
//   messagingSenderId: "631160321520",
//   appId: "1:631160321520:web:5e29999e11e7ed0d6a9935",
//   measurementId: "G-HB2Q0G3XES",
// };

// let app: FirebaseApp;
// let firestoreDB: Firestore;

// export const initializeFirebaseApp = () => {
//   try {
//     app = initializeApp(firebaseConfig);
//     firestoreDB = getFirestore();
//     return app;
//   } catch (error) {
//     console.error("Firebase initialization error:", error);
//     throw error;
//   }
// };

// export const uploadData = async () => {
//   const dataToUpload = {
//     key1: "test@gmail.com",
//     key2: "abc",
//     key3: new Date(),
//   };
//   try {
//     const document = doc(firestoreDB, "users", process.env.UNIQUE_ID!);
//     console.log("UNIQUE_ID:", process.env.UNIQUE_ID);

//     let dataUpdated = await setDoc(document, dataToUpload);
//     return dataUpdated;
//   } catch (error) {
//     console.error("Firebase data upload error:", error);
//     throw error;
//   }
// };
// export const getFirebaseApp = () => app;
import dotenv from "dotenv";
dotenv.config();
import admin from "firebase-admin";
import { Firestore } from "firebase-admin/firestore";

admin.credential
  .applicationDefault()
  .getAccessToken()
  .then(() => console.log(" Admin auth OK"))
  .catch((err) => console.error(" Admin authentication FAILED", err));
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
  });
}
export const firestoreDB: Firestore = admin.firestore();

export const uploadData = async () => {
  try {
    const id = process.env.UNIQUE_ID || "default_test_id";

    await firestoreDB.collection("users").doc(id).set({
      email: "test@gmail.com",
      name: "abc",
      date: new Date(),
    });

    console.log(" Firestore upload successful");
  } catch (err) {
    console.error("Firestore upload error:", err);
    throw err;
  }
};
