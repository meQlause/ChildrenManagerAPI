import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import childrenRoutes from "./routes/children.routes";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/children", childrenRoutes);

export default app;
