import { clientActions } from "../actions/clientActions"

const clientIinital = {
    user:{},
    addresList:[],
    creditCards:[],
    roles: [],
    theme: "",
    language: "",
}

export function clientReducer(state = clientIinital, action){
    switch(action.type){
        case(clientActions.setUser):
            return {...state, user: action.payload}
        case(clientActions.setRoles):
            return {...state, roles: action.payload}
        case(clientActions.setTheme):
            return {...state, theme: action.payload}
        case(clientActions.setLanguage):
            return {...state, language: action.payload}
        default:
            return state
    }

}