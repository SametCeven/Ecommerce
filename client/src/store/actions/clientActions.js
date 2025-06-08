import axiosInstance from "../../services/api"

export const clientActions = {
    setUser: "SET_USER",
    setRoles: "SET_ROLES",
    setTheme: "SET_THEME",
    setLanguage: "SET_LANGUAGE",
    loginUserStarted: "LOGIN_USER_STARTED",
    loginUserFailed: "LOGIN_USER_FAILED",
    verifyUserStarted: "VERIFY_USER_STARTED",
    verifyUserFailed: "VERIFY_USER_FAILED",
    setRememberMe: "SET_REMEMBER_ME"
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


export function verify(token){
    return async (dispatch, getState) => {
        dispatch({type: clientActions.verifyUserStarted})

        try{
            const res = await axiosInstance.get("/verify", {headers: {Authorization: token}})
            dispatch({type: clientActions.setUser, payload: res.data})
            localStorage.setItem("USER_TOKEN",token)
            return res.data
        }
        catch(err){
            console.error("Failed to verify",err)
            dispatch({type: clientActions.verifyUserFailed, payload: err.message})
            localStorage.setItem("USER_TOKEN","")
            throw err
        }
    }
}