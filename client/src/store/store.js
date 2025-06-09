import { createStore, combineReducers, applyMiddleware } from "redux"
import { logger } from "redux-logger"
import { thunk } from "redux-thunk"
import { clientReducer } from "./reducers/clientReducer"
import { productReducer } from "./reducers/productReducer"
import { globalReducer } from "./reducers/globalReducer"
import { shoppingCartReducer } from "./reducers/shoppingCartReducer"

const reducers = combineReducers({
    client: clientReducer,
    product: productReducer,
    global: globalReducer,
    shoppingCart: shoppingCartReducer
})

const combinedMiddlewares = applyMiddleware(thunk, logger)

export const myStore = createStore(reducers, combinedMiddlewares)