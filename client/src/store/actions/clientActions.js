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
    setRememberMe: "SET_REMEMBER_ME",
    
    getAddressStarted: "GET_ADDRESS_STARTED",
    getAddressFailed: "GET_ADDRESS_FAILED",
    setAddressList: "SET_ADDRESS_LIST",
    
    addAddressStarted: "ADD_ADDRESS_STARTED",
    addAddressFailed: "ADD_ADDRESS_FAILED",
    addAddress: "ADD_ADDRESS",
    
    deleteAddressStarted: "DELETE_ADDRESS_STARTED",
    deleteAddressFailed: "DELETE_ADDRESS_FAILED",
    deleteAddress: "DELETE_ADDRESS",

    editAddressStarted: "EDIT_ADDRESS_STARTED",
    editAddressFailed: "EDIT_ADDRESS_FAILED",
    editAddress: "EDIT_ADDRESS",
    
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


export function getAddress(token){
    return async (dispatch, getState) => {
        dispatch({type: clientActions.getAddressStarted})

        try{
            const res = await axiosInstance.get("/user/address", {
                headers: {
                    Authorization: token,
                }
            })
            dispatch({type: clientActions.setAddressList, payload: res.data})
            return res.data
        }
        catch(err){
            console.error("Failed to get address",err)
            dispatch({type: clientActions.getAddressFailed, payload: err.message})
            throw err
        }

    }
}


export function addAddress(formData,token){
    return async (dispatch, getState) => {
        dispatch({type: clientActions.addAddressStarted})

        try{
            const res = await axiosInstance.post("/user/address", formData, {
                headers: {
                    Authorization: token,
                }
            })
            dispatch({type: clientActions.addAddress, payload: res.data})
            dispatch(getAddress(token))
            return res.data
        }
        catch(err){
            console.error("Failed to add address",err)
            dispatch({type: clientActions.addAddressFailed, payload: err.message})
            throw err
        }

    }
}


export function deleteAddress(addressId,token){
    return async (dispatch, getState) => {
        dispatch({type: clientActions.deleteAddressStarted})

        try{
            const res = await axiosInstance.delete(`/user/address/${addressId}`, {
                headers: {
                    Authorization: token,
                }
            })
            dispatch({type: clientActions.deleteAddress, payload: res.data})
            dispatch(getAddress(token))
            return res.data
        }
        catch(err){
            console.error("Failed to delete address",err)
            dispatch({type: clientActions.deleteAddressFailed, payload: err.message})
            throw err
        }

    }
}


export function editAddress(editedAddress,token){
    return async (dispatch, getState) => {
        dispatch({type: clientActions.editAddressStarted})

        try{
            const res = await axiosInstance.put(`/user/address`, editedAddress,  {
                headers: {
                    Authorization: token,
                }
            })
            console.log(res.data)
            dispatch({type: clientActions.editAddress, payload: res.data})
            dispatch(getAddress(token))
            return res.data
        }
        catch(err){
            console.error("Failed to edit address",err)
            dispatch({type: clientActions.editAddressFailed, payload: err.message})
            throw err
        }

    }
}