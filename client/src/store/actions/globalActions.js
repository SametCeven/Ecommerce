import axiosInstance from "../../services/api"

export const globalActions = {
    fetchRoles: "FETCH_ROLES",
    fetchRolesStarted: "FETCH_ROLES_STARTED",
    fetchRolesFailed: "FETCH_ROLES_FAILED",
}

export function fetchRoles(){
    return async (dispatch, getState) => {
        dispatch({type: globalActions.fetchRolesStarted})

        try{
            const res = await axiosInstance.get("roles")
            dispatch({type: globalActions.fetchRoles, payload: res.data})
        }
        catch(err){
            console.error("Failed to fetch roles",err)
            dispatch({type: globalActions.fetchRolesFailed, payload: err.message})
        }

    }
}