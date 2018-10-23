import {Request, Response} from "express";
import {ISlackRequest} from "../common/interfaces/ISlackRequest";
import {parseRequestTextToArray} from "../common/helpers/parseRequestTextToArray";
import {createDeployResponse} from "../common/helpers/createDeployResponse";

export const deployHandler = (req: Request, res: Response) => {
    console.log(req.body);
    if (!(req.body as ISlackRequest).text) {
        return res.status(404).send({error: "Doesn't seem like a valid query."});
    }

    const requestTextArray = parseRequestTextToArray((req.body as ISlackRequest).text);
    const response = createDeployResponse(requestTextArray);

    return res.status(200).send(response);
};
