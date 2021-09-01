import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { reducer, initialState } from '../../store'
import {
    numberAdd2,
    numberDiv25,
    numberMult7,
    numberParseInt,
    numberAddN,
    setNNumber,
    login,
} from '../../store/actions'

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
                        onClick={() => login(dispatch, 'Jose')}
                    >
                        Login
                    </button>

                    <button
                        className="btn"
                        onClick={() => numberAdd2(dispatch)}
                    >
                        +2
                    </button>

                    <button
                        className="btn"
                        onClick={() => numberMult7(dispatch)}
                    >
                        x7
                    </button>

                    <button
                        className="btn"
                        onClick={() => numberDiv25(dispatch)}
                    >
                        %25
                    </button>

                    <button
                        className="btn"
                        onClick={() => numberParseInt(dispatch)}
                    >
                        Converte Inteiro
                    </button>
                </div>

                <div className="center">
                    <input
                        type="number"
                        className="number"
                        value={state.nNumber}
                        onChange={(e) => setNNumber(dispatch, parseInt(e.target.value || state.nNumber))}
                    />

                    <button
                        className="btn"
                        onClick={() => numberAddN(dispatch)}
                    >
                        +{state.nNumber}
                    </button>
                </div>
            </div>
        </div >
    )
}

export default UseReducer
