export const FETCH_USER_LOGIN_SUCCCESS = 'FETCH_USER_LOGIN_SUCCCESS'
export const doLogin = (data) => {
    return {
        type: FETCH_USER_LOGIN_SUCCCESS,
        payload: data,
    }
}