const host = window.location.hostname;
const port = window.location.hostname === 'localhost' ? ':5000' : ''
const protocol = window.location.protocol;
const origin = `${protocol}//${host}${port}`

export const VALIDATE_REGISTRATION_URI = `${origin}/api/auth/registration`
export const CONFIRM_REGISTRATION_URI = `${origin}/api/auth/registration-confirm`
export const LOGIN_URI = `${origin}/api/auth/login`
