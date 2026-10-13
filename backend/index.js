import app from "./src/app.js";
// import dotenv from "dotenv/config";
// import connectDB from "./src/config/db.js";

const PORT = process.env.PORT || 5000;

try {
  //   await conectDB();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
} catch (error) {
  console.log(error.message);
}
