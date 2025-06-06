export const productActions = {
    setCategories: "SET_CATEGORIES",
    setProductList: "SET_PRODUCT_LIST",
    setTotal: "SET_TOTAL",
    setFetchState: "SET_FETCH_STATE",
    setLimit: "SET_LIMIT",
    setOffset: "SET_OFFSET",
    setFilter: "SET_FILTER",
}

export function creatorActionCategories(newCategories){
    return({
        type: clientActions.setCategories,
        payload: newCategories,
    })
}

export function creatorActionProductList(newProductList){
    return({
        type: clientActions.setProductList,
        payload: newProductList,
    })
}

export function creatorActionTotal(newTotal){
    return({
        type: clientActions.setTotal,
        payload: newTotal,
    })
}

export function creatorActionFetchState(newFetchState){
    return({
        type: clientActions.setFetchState,
        payload: newFetchState,
    })
}

export function creatorActionLimit(newLimit){
    return({
        type: clientActions.setLimit,
        payload: newLimit,
    })
}

export function creatorActionOffset(newOffset){
    return({
        type: clientActions.setOffset,
        payload: newOffset,
    })
}

export function creatorActionFilter(newFilter){
    return({
        type: clientActions.setFilter,
        payload: newFilter,
    })
}