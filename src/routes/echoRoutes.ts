import * as express from "express";
import {echoHandler} from "../handlers/echoHandler";


const echoRouter = express.Router();

echoRouter
    .post('/', echoHandler);

export default echoRouter;