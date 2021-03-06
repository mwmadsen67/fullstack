import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const SIGNOUT_CURRENT_USER = "SIGNOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const signoutCurrentUser = () => ({
  type: SIGNOUT_CURRENT_USER
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

// clear errors action
export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});

export const signin = (user) => dispatch => {
  return SessionApiUtil.signin(user).then( user => dispatch(receiveCurrentUser(user)), 
  err => dispatch(receiveErrors(err.responseJSON)));
};

export const signup = (user) => dispatch => {
  return SessionApiUtil.signup(user).then( user => dispatch(receiveCurrentUser(user)), 
  err => dispatch(receiveErrors(err.responseJSON)));
};

export const signout = () => dispatch => {
  return SessionApiUtil.signout().then( () => dispatch(signoutCurrentUser()),
  err => dispatch(receiveErrors(err.responseJSON)));
};