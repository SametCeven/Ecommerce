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


export function fetchProducts(){
    return async (dispatch, getState) => {
        dispatch({type: productActions.fetchProductsStarted})
        
        try{
            const res = await axiosInstance.get("products")
            dispatch({type: productActions.setProductList, payload: res.data.products})
            dispatch({type: productActions.setTotal, payload: res.data.total})
        }
        catch(err){
            console.error("Failed to fetch products",err)
            dispatch({type: productActions.fetchProductsFailed, payload: err.message})
        }
    }
}


export function fetchProductsOfCategories(categoryId){
    return async (dispatch, getState) => {
        dispatch({type: productActions.fetchProductsStarted})
        
        try{
            const res = await axiosInstance.get(`products?category=${categoryId}`)
            dispatch({type: productActions.setProductList, payload: res.data.products})
            dispatch({type: productActions.setTotal, payload: res.data.total})
        }
        catch(err){
            console.error("Failed to fetch products",err)
            dispatch({type: productActions.fetchProductsFailed, payload: err.message})
        }
    }
}

export function fetchProductsWithSortAndFilter(categoryId,sortingParam, filterText){
    return async (dispatch, getState) => {
        dispatch({type: productActions.fetchProductsStarted})
        console.log(`products?category=${categoryId}&sort=${sortingParam}&filter=${filterText}`)
        try{
            const res = await axiosInstance.get(`products?category=${categoryId}&sort=${sortingParam}&filter=${filterText}`)

            dispatch({type: productActions.setProductList, payload: res.data.products})
            dispatch({type: productActions.setTotal, payload: res.data.total})
        }
        catch(err){
            console.error("Failed to fetch products",err)
            dispatch({type: productActions.fetchProductsFailed, payload: err.message})
        }
    }
}