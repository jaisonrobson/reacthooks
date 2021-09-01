import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

const UseRef = (props) => {
    const [count, inc, dec] = useCounter()
    const response = useFetch('http://files.cod3r.com.br/curso-react/estados.json')

    function showStates(states) {
        return states.map(state => <li key={state.nome}>{state.nome} - {state.sigla}</li>)
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            <SectionTitle title="Exercicio #01" />

            <div className="center">
                <span className="center">{count}</span>

                <div>
                    <button
                        className="btn"
                        onClick={() => inc()}
                    >
                        +1
                    </button>

                    <button
                        className="btn"
                        onClick={() => dec()}
                    >
                        -1
                    </button>
                </div>
            </div>

            <SectionTitle title="Exercicio #02" />

            <div className="center">
                <ul>
                    {response.data ? showStates(response.data) : false}
                </ul>
            </div>
        </div>
    )
}

export default UseRef
