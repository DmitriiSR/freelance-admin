const host = window.location.host;
const protocol = window.location.protocol;

export const VALIDATE_REGISTRATION_URI = `${protocol}//${host}/api/auth/registration`
export const CONFIRM_REGISTRATION_URI = `${protocol}//${host}/api/auth/registration-confirm`
export const LOGIN_URI = `${protocol}//${host}/api/auth/login`
