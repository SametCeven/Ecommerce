import axiosInstance from "../../services/api"

export const globalActions = {
    fetchRoles: "FETCH_ROLES",
    fetchRolesStarted: "FETCH_ROLES_STARTED",
    fetchRolesFailed: "FETCH_ROLES_FAILED",
    fetchCategories: "FETCH_CATEGORIES",
    fetchCategoriesStarted: "FETCH_CATEGORIES_STARTED",
    fetchCategoriesFailed: "FETCH_CATEGORIES_FAILED",
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

export function fetchCategories(){
    return async (dispatch, getState) => {
        dispatch({type: globalActions.fetchCategoriesStarted})

        try{
            const res = await axiosInstance.get("categories")
            dispatch({type: globalActions.fetchCategories, payload: res.data})
        }
        catch(err){
            console.error("Failed to fetch roles",err)
            dispatch({type: globalActions.fetchCategoriesFailed, payload: err.message})
        }

    }
}