import {isEmpty} from "lodash";

export const parseRequestTextToArray = (requestText: string): string[] =>
    !isEmpty(requestText) ? requestText.split(" ") : [];
