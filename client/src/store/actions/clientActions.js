import axiosInstance from "../../services/api"

export const clientActions = {
    setUser: "SET_USER",
    setRoles: "SET_ROLES",
    setTheme: "SET_THEME",
    setLanguage: "SET_LANGUAGE",
    fetchRolesStarted: "FETCH_ROLES_STARTED",
    fetchRolesFailed: "FETCH_ROLES_FAILED",
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

export function fetchRoles(){
    return async (dispatch, getState) => {
        dispatch({type: clientActions.fetchRolesStarted})

        try{
            const res = await axiosInstance.get("roles")
            dispatch({type: clientActions.setRoles, payload: res.data})
        }
        catch(err){
            console.error("Failed to fetch roles",err)
            dispatch({type: clientActions.fetchRolesFailed, payload: err.message})
        }

    }
}