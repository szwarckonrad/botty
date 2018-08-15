import * as express from "express";
import {testHandler} from "../handlers/testHandler";


const testRouter = express.Router();

testRouter
    .post('/', testHandler);

export default testRouter;