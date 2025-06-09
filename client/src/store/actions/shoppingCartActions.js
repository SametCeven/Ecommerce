export const shoppingCartActions = {
    setCart: "SET_CART",
    setPayment: "SET_PAYMENT",
    setAddress: "SET_ADDRESS",
    addToCart: "ADD_TO_CART",
    removeFromCart: "REMOVE_FROM_CART",
}

export function creatorActionCart(newCart){
    return({
        type: shoppingCartActions.setCart,
        payload: newCart,
    })
}

export function creatorActionPayment(newPayment){
    return({
        type: shoppingCartActions.setPayment,
        payload: newPayment,
    })
}

export function creatorActionAddress(newAddress){
    return({
        type: shoppingCartActions.setAddress,
        payload: newAddress,
    })
}

export function addToCart(product){
    return({
        type: shoppingCartActions.addToCart,
        payload: product,
    })
}

export function removeFromCart(product){
    return({
        type: shoppingCartActions.removeFromCart,
        payload: product,
    })
}