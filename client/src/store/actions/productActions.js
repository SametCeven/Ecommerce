import axiosInstance from "../../services/api"

export const productActions = {
    setCategories: "SET_CATEGORIES",
    setProductList: "SET_PRODUCT_LIST",
    setTotal: "SET_TOTAL",
    setFetchState: "SET_FETCH_STATE",
    setLimit: "SET_LIMIT",
    setOffset: "SET_OFFSET",
    setFilter: "SET_FILTER",
    fetchProductsStarted: "FETCH_PRODUCTS_STARTED",
    fetchProductsFailed: "FETCH_PRODUCTS_FAILED",
    setSelectedProduct: "SET_SELECTED_PRODUCT",
}

export function creatorActionCategories(newCategories){
    return({
        type: productActions.setCategories,
        payload: newCategories,
    })
}

export function creatorActionProductList(newProductList){
    return({
        type: productActions.setProductList,
        payload: newProductList,
    })
}

export function creatorActionTotal(newTotal){
    return({
        type: productActions.setTotal,
        payload: newTotal,
    })
}

export function creatorActionFetchState(newFetchState){
    return({
        type: productActions.setFetchState,
        payload: newFetchState,
    })
}

export function creatorActionLimit(newLimit){
    return({
        type: productActions.setLimit,
        payload: newLimit,
    })
}

export function creatorActionOffset(newOffset){
    return({
        type: productActions.setOffset,
        payload: newOffset,
    })
}

export function creatorActionFilter(newFilter){
    return({
        type: productActions.setFilter,
        payload: newFilter,
    })
}

export function creatorActionSelectedProduct(newProduct){
    return({
        type: productActions.setSelectedProduct,
        payload: newProduct,
    })
}




export function fetchProductsWithSortAndFilter(categoryId,sortingParam, filterText, limit, offset){
    return async (dispatch, getState) => {
        dispatch({type: productActions.fetchProductsStarted})

        try{
            const res = await axiosInstance.get(`products?category=${categoryId}&sort=${sortingParam}&filter=${filterText}&limit=${limit}&offset=${offset}`)

            dispatch({type: productActions.setProductList, payload: res.data.products})
            dispatch({type: productActions.setTotal, payload: res.data.total})
        }
        catch(err){
            console.error("Failed to fetch products",err)
            dispatch({type: productActions.fetchProductsFailed, payload: err.message})
        }
    }
}


export function fetchProduct(productId){
    return async (dispatch, getState) => {
        dispatch({type: productActions.fetchProductsStarted})

        try{
            const res = await axiosInstance.get(`products/${productId}`)

            dispatch({type: productActions.setSelectedProduct, payload: res.data})
        }
        catch(err){
            console.error("Failed to fetch products",err)
            dispatch({type: productActions.fetchProductsFailed, payload: err.message})
        }
    }
}