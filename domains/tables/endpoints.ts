export enum TableEndpoints {
  ROOT = "/tables",
  INVITE = "/tables/:tableId/invite",
  JOIN = "/tables/:tableId/join/:inviteCode",
}
