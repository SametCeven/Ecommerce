import axiosInstance from "../../services/api"

export const shoppingCartActions = {
    setCart: "SET_CART",
    setPayment: "SET_PAYMENT",
    setAddress: "SET_ADDRESS",
    addToCart: "ADD_TO_CART",
    removeFromCart: "REMOVE_FROM_CART",
    deleteFromCart: "DELETE_FROM_CART",
    checkCart: "CHECK_CART",
    setDeliveryAmount: "SET_DELIVERY_AMOUNT",
    setDiscountAmount: "SET_DISCOUNT_AMOUNT",
    setTotalAmount: "SET_TOTAL_AMOUNT",
    setTotalAmountFinal : "SET_TOTAL_AMOUNT_FINAL",
    createOrder: "CREATE_ORDER",
    createOrderStarted: "CREATE_ORDER_STARTED",
    createOrderFailed: "CREATE_ORDER_FAILED",
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

export function deleteFromCart(product){
    return({
        type: shoppingCartActions.deleteFromCart,
        payload: product,
    })
}

export function checkCart(product){
    return({
        type: shoppingCartActions.checkCart,
        payload: product,
    })
}

export function creatorActionDeliveryAmount(newDeliveryAmount){
    return({
        type: shoppingCartActions.setDeliveryAmount,
        payload: newDeliveryAmount,
    })
}

export function creatorActionDiscountAmount(newDiscountAmount){
    return({
        type: shoppingCartActions.setDiscountAmount,
        payload: newDiscountAmount,
    })
}

export function creatorActionTotalAmount(newTotalAmount){
    return({
        type: shoppingCartActions.setTotalAmount,
        payload: newTotalAmount,
    })
}

export function creatorActionTotalAmountFinal(newTotalAmountFinal){
    return({
        type: shoppingCartActions.setTotalAmountFinal,
        payload: newTotalAmountFinal,
    })
}

export function createOrder(order,token){
    return async (dispatch, getState) => {
        dispatch({type: shoppingCartActions.createOrderStarted})

        try{
            const res = await axiosInstance.post(`/order`, order, {
                headers: {
                    Authorization: token,
                }
            })
            dispatch({type: shoppingCartActions.createOrder, payload: res.data})
            return res.data
        }
        catch(err){
            console.error("Failed to create order",err)
            dispatch({type: shoppingCartActions.createOrderFailed, payload: err.message})
            throw err
        }

    }
}