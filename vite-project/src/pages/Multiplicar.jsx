import { useState } from 'react';

export default function Multiplicar() {

    const [n1, setN1] = useState();
    const [n2, setN2] = useState();
    const [res, setRes] = useState();

    function multiplicacao(n1, n2) {
        setRes(Number(n1) * Number(n2))
    }

    return (
        <div>
            <label>Número 1:</label>
                <input value={n1} onChange={setN1}></input>

            <label>Número 2:</label>
                <input value={n2} onChange={setN2}></input>

            <button onClick={multiplicacao}>Multiplicar</button>

            <p>{res}</p>
        </div>
    )
}