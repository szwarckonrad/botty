import * as express from "express";
import  * as bodyParser from "body-parser";

import echoRouter from "./routes/echoRoutes";
import deployRouter from "./routes/deployRoutes";


const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/echo", echoRouter);
app.use("/deploy", deployRouter);

app.listen(port, () => console.log("Listening on port: ", port));
