import { shoppingCartActions } from "../actions/shoppingCartActions"

const shoppingCartInitial = {
    cart: [],
    payment: {},
    address: {},
    deliveryAmount: 20.00,
    discountAmount: 50.00,
    totalAmount: 0,
    totolAmountFinal: 0,
    orderLoading: false,
    orderError: null,
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

            if (existingItemIndex2 !== -1) {
                const updatedCart2 = state.cart.map((item, index) => {
                    if (index === existingItemIndex2 && item.count > 1) return { ...item, count: item.count - 1 }
                    return item
                })
                return { ...state, cart: updatedCart2 }
            }
            return state

        case (shoppingCartActions.deleteFromCart):
            const updatedCart3 = state.cart.filter((item) => item.product.id !== action.payload.id)
            return { ...state, cart: updatedCart3 }


        case (shoppingCartActions.checkCart):
            const existingItemIndex3 = state.cart.findIndex(item => item.product.id === action.payload.id)

            if (existingItemIndex3 !== -1) {
                const updatedCart3 = state.cart.map((item, index) => {
                    if (index === existingItemIndex3) {
                        return { ...item, checked: !item.checked }
                    }
                    return item
                })
                return { ...state, cart: updatedCart3 }
            }
            return state


        case (shoppingCartActions.setDeliveryAmount):
            return { ...state, deliveryAmount: action.payload }
        case (shoppingCartActions.setDiscountAmount):
            return { ...state, discountAmount: action.payload }
        case (shoppingCartActions.setTotalAmount):
            return { ...state, totalAmount: action.payload }
        case (shoppingCartActions.setTotalAmountFinal):
            return { ...state, totalAmountFinal: action.payload }


        case (shoppingCartActions.createOrderStarted):
            return { ...state, orderLoading: true, orderError: null }
        case (shoppingCartActions.createOrderFailed):
            return { ...state, orderLoading: false, orderError: action.payload }
        case (shoppingCartActions.createOrder):
            return { ...state, orderLoading: false, cart: shoppingCartInitial.cart }


        default:
            return state
    }

}