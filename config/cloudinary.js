import cloudinary from "cloudinary";
//import { config } from "dotenv";

//config(); // تحميل متغيرات البيئة

cloudinary.v2.config({
  cloud_name: "djmue5n4f",
  api_key: "332632149665272",
  api_secret: "IsJ5PE4tngjJ0W_ImZnHnDHsFHI",
});

export default cloudinary;
