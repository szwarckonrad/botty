import * as express from "express";
import  * as bodyParser from "body-parser";

import testRouter from "./routes/testRoutes";


const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/test", testRouter);

app.listen(port, () => console.log("Listening on port: ", port));
