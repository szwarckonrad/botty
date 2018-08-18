type ISlackRequestKey = "token" | "team_id" | "team_domain" | "enterprise_id" | "enterprise_name" | "channel_id" |
    "channel_name" | "user_id" | "user_name" | "command" | "text" | "response_url" | "trigger_id";

export type ISlackRequest = Record<ISlackRequestKey, string>;
