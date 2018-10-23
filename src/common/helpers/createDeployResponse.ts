import {isEmpty} from "lodash";

import {manual} from "../constants/manual";


export const createDeployResponse = (requestArray: string[]) => {
    if (isEmpty(requestArray)) {
        return manual;
    }
    let responseText = "";
    return responseText;
};
