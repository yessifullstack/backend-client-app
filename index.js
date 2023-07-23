import app from "./app.js";
import { connectDB } from "./src/config/database.js";

connectDB()


app.listen( process.env.PORT || 4000, () => {
    console.log(process.env.PORT || 4000);
});