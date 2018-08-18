import * as express from "express";
import {deployHandler} from "../handlers/deployHandler";


const deployRouter = express.Router();

deployRouter
    .post('/', deployHandler);

export default deployRouter;