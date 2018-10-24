import {Request, Response} from "express";

import {manual} from "../common/constants/manual";
import {createDeployResponse} from "../common/helpers/createDeployResponse";
import {parseRequestTextToArray} from "../common/helpers/parseRequestTextToArray";
import {ISlackRequest} from "../common/interfaces/ISlackRequest";


export const deployHandler = (req: Request, res: Response) => {
    if (!(req.body as ISlackRequest).text) {
        // No /deploy params were passed, return all possible options.
        return res.status(200).send(manual);
    }

    const requestTextArray = parseRequestTextToArray((req.body as ISlackRequest).text);
    const response = createDeployResponse(requestTextArray, (req.body as ISlackRequest).user_id);

    return res.status(200).send(response);
};
