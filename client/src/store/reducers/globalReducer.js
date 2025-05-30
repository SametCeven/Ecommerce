import { globalActions } from "../actions/globalActions"

const globalInitial = {
    roles: [],
    rolesLoading: false,
    rolesError: null,
    defaultRoleId: 3,
}

export function globalReducer(state = globalInitial, action){
    switch(action.type){
        case(globalActions.fetchRoles):
            return {...state, roles: action.payload}
        case(globalActions.fetchRolesStarted):
            return {...state, rolesLoading: true, rolesError: null}
        case(globalActions.fetchRolesFailed):
            return {...state, rolesLoading: false, rolesError: action.payload}

        default:
            return state
    }

}