import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFactorial(number) {
    const n = parseInt(number)

    if (n < 0) return -1
    if (n === 0) return 1

    return calcFactorial(n - 1) * n
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [factorial, setFactorial] = useState(1)

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
            <div className="center"></div>
        </div>
    )
}

export default UseEffect
