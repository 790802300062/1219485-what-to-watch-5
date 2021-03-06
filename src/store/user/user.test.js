
import {AuthorizationStatus, RequestStatus} from "../../constants";
import {ActionType, loadUser, setAuthorizationStatus, userReceived, userReducer, userRequested, userRequestFailed} from "../user/user";
import {user} from "../../mocks/user";

describe(`User action creators returns correct actions`, () => {
  it(`set authorization status`, () => {
    const status = AuthorizationStatus.AUTH;
    expect(setAuthorizationStatus(status)).toEqual({
      type: ActionType.SET_AUTHORIZATION_STATUS,
      payload: status,
    });
  });

  it(`load user`, () => {
    expect(loadUser(`user`)).toEqual({
      type: ActionType.LOAD_USER,
      payload: `user`,
    });
  });

  it(`set status - "requested"`, () => {
    expect(userRequested()).toEqual({
      type: ActionType.USER_REQUESTED,
      payload: {},
    });
  });

  it(`set status - "received"`, () => {
    expect(userReceived()).toEqual({
      type: ActionType.USER_RECEIVED,
      payload: {},
    });
  });

  it(`set status - "request failed"`, () => {
    expect(userRequestFailed(`error`)).toEqual({
      type: ActionType.USER_REQUEST_FAILED,
      payload: `error`,
    });
  });

});

describe(`User reducer works correctly`, () => {
  it(`should return initial state`, () => {
    expect(userReducer(void 0, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      user: {},
      requestStatus: RequestStatus.NOT_REQUESTED,
      errorCode: 0,
    });
  });

  it(`should set authorizationStatus to "auth"`, () => {
    expect(userReducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.SET_AUTHORIZATION_STATUS,
      payload: AuthorizationStatus.AUTH
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH
    });
  });

  it(`should load user`, () => {
    expect(userReducer({
      user: {},
    }, {
      type: ActionType.LOAD_USER,
      payload: user
    })).toEqual({
      user
    });
  });

  it(`should set status "requested"`, () => {
    expect(userReducer({
      requestStatus: RequestStatus.NOT_REQUESTED,
    }, {
      type: ActionType.USER_REQUESTED,
      payload: {}
    })).toEqual({
      requestStatus: RequestStatus.REQUESTED
    });
  });

  it(`should set status "received"`, () => {
    expect(userReducer({
      requestStatus: RequestStatus.REQUESTED,
    }, {
      type: ActionType.USER_RECEIVED,
      payload: {}
    })).toEqual({
      requestStatus: RequestStatus.RECIEVED
    });
  });


  it(`should set request status "request failed" and an error code`, () => {
    const errorCode = 404;
    expect(userReducer({
      requestStatus: RequestStatus.NOT_REQUESTED,
    }, {
      type: ActionType.USER_REQUEST_FAILED,
      payload: errorCode
    })).toEqual({
      requestStatus: RequestStatus.REQUEST_FAILED,
      errorCode,
    });
  });

});

