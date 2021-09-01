import { reducer } from "./reducers"

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0,
    nNumber: 0,
}

export {
    initialState,
    reducer,
}