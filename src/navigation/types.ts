export type UnAuthorizedParamList = {
  login: undefined;
};

export type AuthorizedParamList = {
  dashboard: undefined;
};

export type RootParamList = {
  authorized: AuthorizedParamList;
  unauthorized: UnAuthorizedParamList;
};
