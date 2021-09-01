import { numberReducer } from './number'
import { userReducer } from './user'
import { nNumberReducer } from './nNumber'

export function reducer(state, action) {
    let newState = numberReducer(state, action)
    newState = nNumberReducer(newState, action)
    return userReducer(newState, action)
}