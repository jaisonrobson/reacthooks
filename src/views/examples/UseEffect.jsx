import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFactorial(number) {
    const n = parseInt(number)

    if (n < 0) return -1
    if (n === 0) return 1

    return calcFactorial(n - 1) * n
}

const verificaValor = (valor) => valor % 2 === 0 ? "par" : "impar"

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [factorial, setFactorial] = useState(1)
    const [status, setStatus] = useState("");

    useEffect(
        () => setFactorial(calcFactorial(number)),
        [number]
    )

    useEffect(
        () => {
            if (factorial > 1000000) document.title = "Passou de 1 milhao"
        },
        [factorial]
    )

    useEffect(
        () => setStatus(verificaValor(number)),
        [number]
    )

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercicio #01" />

            <div className="center">
                <span className="text">Fatorial: </span>

                <span className="text red">{factorial === -1 ? 'fatorial inexistente' : factorial}</span>

                <input
                    type="number"
                    className="input"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
            </div>

            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>

                    <span className="text red">{status}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
