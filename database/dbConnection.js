import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable");
}

// نستخدم كاش لمنع تكرار الاتصال
let isConnected = false;

export const dbConnection = async () => {
  if (isConnected) {
    return; // لا تعيد الاتصال إذا كنت متصل فعلاً
  }

  try {
    const db = await mongoose.connect(MONGO_URI, {
      dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = db.connections[0].readyState === 1;
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
    throw err;
  }
};
