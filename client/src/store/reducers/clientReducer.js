import { clientActions } from "../actions/clientActions"

const clientIinital = {
    user:{},
    addresList:[],
    creditCards:[],
    roles: [],
    theme: "",
    language: "",
    loginLoading: false,
    loginError: null,
}

export function clientReducer(state = clientIinital, action){
    switch(action.type){
        case(clientActions.setUser):
            return {...state, user: action.payload, loginLoading: false}
        case(clientActions.setRoles):
            return {...state, roles: action.payload}
        case(clientActions.setTheme):
            return {...state, theme: action.payload}
        case(clientActions.setLanguage):
            return {...state, language: action.payload}

        case(clientActions.loginUserStarted):
            return {...state, loginLoading: true, loginError: null}
        case(clientActions.loginUserFailed):
            return {...state, loginLoading: false, loginError: action.payload}
        
        default:
            return state
    }

}