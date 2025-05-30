export const shoppingCartActions = {
    setCart: "SET_CART",
    setPayment: "SET_PAYMENT",
    setAddress: "SET_ADDRESS",
}

export function creatorActionCart(newCart){
    return({
        type: clientActions.setCart,
        payload: newCart,
    })
}

export function creatorActionPayment(newPayment){
    return({
        type: clientActions.setPayment,
        payload: newPayment,
    })
}

export function creatorActionAddress(newAddress){
    return({
        type: clientActions.setAddress,
        payload: newAddresss,
    })
}

