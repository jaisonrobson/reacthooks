import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0,
    nNumber: 0,
}

function reducer(state, action) {
    switch (action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
        case 'login':
            return { ...state, user: { name: action.name } }
        case 'numberMult7':
            return { ...state, number: state.number * 7 }
        case 'numberDiv25':
            return { ...state, number: state.number / 25 }
        case 'numberParseInt':
            return { ...state, number: parseInt(state.number) }
        case 'numberAddN':
            return { ...state, number: state.number + action.number }
        case 'setNNumber':
            return { ...state, nNumber: action.nNumber }
        default:
            return state
    }
}

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {
                    state.user
                        ? <span className="text">{state.user.name}</span>
                        : <span className="text">Sem usuario</span>
                }

                <span className="text">{state.number}</span>

                <div>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: 'login', name: 'Maria' })}
                    >
                        Login
                    </button>

                    <button
                        className="btn"
                        onClick={() => dispatch({ type: 'numberAdd2' })}
                    >
                        +2
                    </button>

                    <button
                        className="btn"
                        onClick={() => dispatch({ type: 'numberMult7' })}
                    >
                        x7
                    </button>

                    <button
                        className="btn"
                        onClick={() => dispatch({ type: 'numberDiv25' })}
                    >
                        %25
                    </button>

                    <button
                        className="btn"
                        onClick={() => dispatch({ type: 'numberParseInt' })}
                    >
                        Converte Inteiro
                    </button>
                </div>

                <div className="center">
                    <input
                        type="number"
                        className="number"
                        value={state.nNumber}
                        onChange={(e) => dispatch({ type: 'setNNumber', nNumber: parseInt(e.target.value || state.nNumber) })}
                    />

                    <button
                        className="btn"
                        onClick={() => dispatch({ type: 'numberAddN', number: state.nNumber })}
                    >
                        +{state.nNumber}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
