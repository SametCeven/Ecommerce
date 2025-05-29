import { createStore, combineReducers, applyMiddleware } from "redux"
import { logger } from "redux-logger"
import { thunk } from "redux-thunk"
import { clientReducer } from "./reducers/clientReducer"
import { productReducer } from "./reducers/productReducer"

const reducers = combineReducers({
    client: clientReducer,
    product: productReducer,
})

const combinedMiddlewares = applyMiddleware(thunk, logger)

export const myStore = createStore(reducers, combinedMiddlewares)