import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { DataContext } from '../../data/DataContext'
import { AppContext } from '../../data/Store'

const UseContext = (props) => {
    const { state, setState } = useContext(DataContext)

    function addNumber(delta) {
        setState({
            ...state,
            number: state.number + delta,
        })
    }

    const {
        number,
        setNumber,
        text,
    } = useContext(AppContext)

    // useEffect(
    //     () => number > 1250 ? setText('Eita!!!!') : false, //setText esta causando erro porque e renderizado o tempo todo, pesquisar sobre o useEffect e Context
    //     [number, setText]
    // )

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title="Exercicio 01" />

            <div className="center">
                <span className="text">{state.text}</span>

                <span className="text">{state.number}</span>

                <div>
                    <button
                        className="btn"
                        onClick={() => addNumber(-1)}
                    >
                        -1
                    </button>

                    <button
                        className="btn"
                        onClick={() => addNumber(+1)}
                    >
                        +1
                    </button>
                </div>
            </div>

            <SectionTitle title="Exercicio 02" />

            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>

                <div>
                    <button
                        className="btn"
                        onClick={() => setNumber(number - 1)}
                    >
                        -1
                    </button>

                    <button
                        className="btn"
                        onClick={() => setNumber(number + 1)}
                    >
                        +1
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
