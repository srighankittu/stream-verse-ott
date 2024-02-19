import express from "express";
import router from "./routes/userRoute.js";
const app = express();
const port = 3000;

app.use(express.json());

app.use("/user", router);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
