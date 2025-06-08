import { globalActions } from "../actions/globalActions"

const globalInitial = {
    roles: [],
    rolesLoading: false,
    rolesError: null,
    defaultRoleId: 3,
    categories: [],
    categoriesLoading: false,
    categoriesError: null,
}

export function globalReducer(state = globalInitial, action){
    switch(action.type){
        case(globalActions.fetchRoles):
            return {...state, roles: action.payload}
        case(globalActions.fetchRolesStarted):
            return {...state, rolesLoading: true, rolesError: null}
        case(globalActions.fetchRolesFailed):
            return {...state, rolesLoading: false, rolesError: action.payload}

        case(globalActions.fetchCategories):
            return {...state, categories: action.payload}
        case(globalActions.fetchCategoriesStarted):
            return {...state, categoriesLoading: true, categoriesError: null}
        case(globalActions.fetchCategoriesFailed):
            return {...state, categoriesLoading: false, categoriesError: action.payload}


        default:
            return state
    }

}