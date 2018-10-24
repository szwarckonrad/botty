import {deployResponseText} from "../constants/deployResponse";
import {notEnoughOptionsProvided, unknownOptionResponse} from "../constants/errors";


export interface IDeployResponseData {
    user?: string;
    state?: State;
    project?: Project;
    branch?: string;
    stage?: Stage;
}

enum Project {
    RPM = "rpm",
    PYTHON = "python"
}

enum Stage {
    DEV = "staging",
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
            responseData.state = State.START;
            break;
        case State.STOP:
            responseData.state = State.STOP;
            break;
        default:
            return unknownOptionResponse(state);
    }

    return deployResponseText(responseData);
};
