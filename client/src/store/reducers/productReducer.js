import { productActions } from "../actions/productActions"

const productInitial = {
    categories: [],
    productList: [],
    total: 0,
    limit: 25,
    offset: 0,
    filter: "",
    fetchState: "NOT_FETCHED",
}

export function productReducer(state = productInitial, action){
    switch(action.type){
        case(productActions.setCategories):
            return {...state, categories: action.payload}
        case(productActions.setProductList):
            return {...state, productList: action.payload}
        case(productActions.setTotal):
            return {...state, total: action.payload}
        case(productActions.setFetchState):
            return {...state, fetchState: action.payload}
        case(productActions.setLimit):
            return {...state, limit: action.payload}
        case(productActions.setOffset):
            return {...state, offset: action.payload}
        case(productActions.setFilter):
            return {...state, filter: action.payload}
        default:
            return state
    }

}