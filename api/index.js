import app from "../app.js";
import serverless from "serverless-http";
import { dbConnection } from "../database/dbConnection.js";
await dbConnection(); // الاتصال مرة واحدة فقط قبل تغليف السيرفر
export default serverless(app); // ✅ Export default بدلاً من export const
