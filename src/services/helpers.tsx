export const getBearerToken = () => {
    const token = sessionStorage.getItem('chlps_token')
    return `Bearer ${token}`
}
export const getToken = () => {
    const token = sessionStorage.getItem('chlps_token')
    return token
}