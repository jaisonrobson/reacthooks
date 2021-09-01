export function nNumberReducer(state, action) {
    switch (action.type) {
        case 'setNNumber':
            return { ...state, nNumber: action.nNumber }
        default:
            return state
    }
}