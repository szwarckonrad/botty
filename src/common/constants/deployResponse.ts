import {IDeployResponseData} from "../helpers/createDeployResponse";

const conditionalState = (state?: string) => state === "start" ? "*has started*" : "*finished*";

export const deployResponseText = (responseData: IDeployResponseData) =>
    `<!channel> | <@${responseData.user}> ${conditionalState(responseData.state)} deploy procedure of` +
    ` \`${responseData.project}@${responseData.branch}\` on ${responseData.stage}.`;

