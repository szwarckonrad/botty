import {IDeployResponseData} from "../helpers/createDeployResponse";

export const deployResponseText = (responseData: IDeployResponseData) =>
    `<@${responseData.user}> ${responseData.stage === "start" ? "*has started*" : "*finished*"} 
    deploy procedure of \`${responseData.project}@${responseData.branch}\` on ${responseData.stage}`;
