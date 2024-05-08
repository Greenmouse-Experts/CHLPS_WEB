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

// members endpoint 
export const GET_MEMBERSHIP_PLANS = `member/membership-plans`
export const VIEW_MEMBERSHIP_APPLICATION = `member/membership/application`
export const APPLY_FOR_MEMBERSHIP = `member/membership/apply`

// certification endpoint
export const GET_CERTIFICATION = `member/certifications`
export const GET_USER_CERTIFICATION = `member/certifications`
