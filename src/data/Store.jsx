import React, { useState } from 'react'

const initialState = {
    number: 1234,
    text: 'Context API + Hooks',
}

export const AppContext = React.createContext(initialState)

export const Store = ({ children, ...props }) => {
    const [state, setState] = useState(initialState)

    const updateState = (key, value) => setState({
        ...state,
        [key]: value,
    })

    const value = {
        number: state.number,
        text: state.text,
        setNumber: n => updateState('number', n),
        setText: t => updateState('text', t),
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}