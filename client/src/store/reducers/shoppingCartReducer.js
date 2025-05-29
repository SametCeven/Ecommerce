import { shoppingCartActions } from "../actions/shoppingCartActions"

const shoppingCartInitial = {
    cart: [],
    payment: {},
    address: {},
}

export function shoppingCartReducer(state = shoppingCartInitial, action){
    switch(action.type){
        case(shoppingCartActions.setCart):
            return {...state, cart: action.payload}
        case(shoppingCartActions.setPayment):
            return {...state, payment: action.payload}
        case(shoppingCartActions.setAddress):
            return {...state, address: action.payload}
        default:
            return state
    }

}