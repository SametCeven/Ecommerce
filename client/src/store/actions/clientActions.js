import axiosInstance from "../../services/api"

export const clientActions = {
    setUser: "SET_USER",
    setRoles: "SET_ROLES",
    setTheme: "SET_THEME",
    setLanguage: "SET_LANGUAGE",
    loginUserStarted: "LOGIN_USER_STARTED",
    loginUserFailed: "LOGIN_USER_FAILED",
}

export function creatorActionUser(newUser) {
    return ({
        type: clientActions.setUser,
        payload: newUser,
    })
}

export function creatorActionRoles(newRoles) {
    return ({
        type: clientActions.setRoles,
        payload: newRoles,
    })
}

export function creatorActionTheme(newTheme) {
    return ({
        type: clientActions.setTheme,
        payload: newTheme,
    })
}

export function creatorActionLanguage(newLangugage) {
    return ({
        type: clientActions.setLanguage,
        payload: newLangugage,
    })
}

export function login(creds){
    return async (dispatch, getState) => {
        dispatch({type: clientActions.loginUserStarted})

        try{
            const res = await axiosInstance.post("/login", creds)
            dispatch({type: clientActions.setUser, payload: res.data})
            return res.data
        }
        catch(err){
            console.error("Failed to login",err)
            dispatch({type: clientActions.loginUserFailed, payload: err.message})
            throw err
        }

    }
}
