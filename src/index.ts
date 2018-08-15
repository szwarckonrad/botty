import * as express from "express";

const app1 = express();

const port = process.env.PORT || 8080;

app1.get("/", (req, res) => res.send("Hello World!"));
app1.listen(port, () => console.log("Listening on port: ", port));

export const app = app1;
