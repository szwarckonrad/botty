import {IDeployResponseData} from "../helpers/createDeployResponse";

export const deployResponseText = (responseData: IDeployResponseData) =>
    `<!channel> | <@${responseData.user}> ${responseData.state === "start" ? "*has started*" : "*finished*"} deploy procedure of \`${responseData.project}@${responseData.branch}\` on ${responseData.stage}`;
