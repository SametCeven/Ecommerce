import { shoppingCartActions } from "../actions/shoppingCartActions"

const shoppingCartInitial = {
    cart: [],
    payment: {},
    address: {},
}

export function shoppingCartReducer(state = shoppingCartInitial, action) {
    switch (action.type) {
        case (shoppingCartActions.setCart):
            return { ...state, cart: action.payload }
        case (shoppingCartActions.setPayment):
            return { ...state, payment: action.payload }
        case (shoppingCartActions.setAddress):
            return { ...state, address: action.payload }

        case (shoppingCartActions.addToCart):
            const existingItemIndex = state.cart.findIndex(item => item.product.id === action.payload.id)

            if (existingItemIndex !== -1) {
                const updatedCart = state.cart.map((item, index) => {
                    if (index === existingItemIndex) return { ...item, count: item.count + 1 }
                    return item
                })
                return { ...state, cart: updatedCart }
            } else {
                const newItem = { count: 1, checked: true, product: action.payload }
                return { ...state, cart: [...state.cart, newItem] }
            }

        case (shoppingCartActions.removeFromCart):
            const existingItemIndex2 = state.cart.findIndex(item => item.product.id === action.payload.id)

            if(existingItemIndex2 !== -1){
                const updatedCart2 = state.cart.map((item,index)=>{
                    if(index === existingItemIndex2 && item.count>1) return {...item, count: item.count-1}
                    return item
                })
                return {...state, cart:updatedCart2}
            }

        default:
            return state
    }

}