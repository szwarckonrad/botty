import * as express from "express";
import  * as bodyParser from "body-parser";

const app = express();

const port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/", (req, res) => console.log(req.body) || res.send("Hello World!"));
app.listen(port, () => console.log("Listening on port: ", port));
