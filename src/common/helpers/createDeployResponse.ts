import {notEnoughOptionsProvided, unknownOptionResponse} from "../constants/errors";
import {deployResponseText} from "../constants/deployResponse";


export interface IDeployResponseData {
    user?: string;
    state?: "start" | "finish";
    project?: string;
    branch?: string;
    stage?: string;
}

enum Project {
    RPM = "rpm",
    PYTHON = "python"
}

enum Stage {
    DEV = "dev",
    PRODUCTION = "production"
}

enum State {
    START = "start",
    STOP = "stop"
}


export const createDeployResponse = (requestArray: string[], user: string) => {

    if (requestArray.length < 4 ) {
        return notEnoughOptionsProvided(requestArray.length);
    }

    const [project, stage, branch, state] = requestArray;

    const responseData: IDeployResponseData = {
        branch,
        user
    };

    switch (project) {
        case Project.RPM:
            responseData.project = Project.RPM;
            break;
        case Project.PYTHON:
            responseData.project = Project.PYTHON;
            break;
        default:
            return unknownOptionResponse(project);
    }

    switch (stage) {
        case Stage.DEV:
            responseData.stage = Stage.DEV;
            break;
        case Stage.PRODUCTION:
            responseData.stage = Stage.PRODUCTION;
            break;
        default:
            return unknownOptionResponse(stage);
    }

    switch (state) {
        case State.START:
            responseData.stage = State.START;
            break;
        case State.STOP:
            responseData.stage = State.STOP;
            break;
        default:
            return unknownOptionResponse(state);
    }

    return deployResponseText(responseData);
};
