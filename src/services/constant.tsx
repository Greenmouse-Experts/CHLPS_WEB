export const BASE_URL = import.meta.env.VITE_BASE_URL


// Auth endpoints
export const USERS_REGISTER = `/auth/register`
export const USERS_LOGIN = `/auth/login`
export const CONFIRM_ACCOUNT = `/auth/email/confirm`
export const RESEND_CONFIRM = `/auth/email/confirm/resend`
export const FORGET_PASSWORD = `/auth/reset-password-request`
export const RESET_PASSWORD = `/auth/reset-password`
export const UPDATE_PROFILE = `/auth/update-profile`
export const UPDATE_PASSWORD = `/auth/update-password`
