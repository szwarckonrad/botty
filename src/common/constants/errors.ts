export const unknownOptionResponse = (option: string) =>
    `Unknown option *${option}*. Type \`/deploy\` to see the list of available options`;

export const notEnoughOptionsProvided = (optionsCount: number) =>
    `You've provided ${optionsCount}, while 4 options are required. Type \`/deploy\` to see the list of available options.`;
