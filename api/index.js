import app from "../app.js";
import serverless from "serverless-http";

await dbConnection(); // الاتصال مرة واحدة فقط قبل تغليف السيرفر
export default serverless(app); // ✅ Export default بدلاً من export const
