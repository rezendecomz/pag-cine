// import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import TrailerComp from '../components/TrailerComp'
// import filmes from './listaFilmes';

const Trailer = () => {
    const [filme, setFilme] = useState(null)

    const [isPending, setIsPending] = useState(true)

    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3333/filme/1')
            .then(res => {
                if (!res.ok) {
                    throw Error('Problema com conexão com o servidor'); // mensagem do erro
                }
                return res.json()
            })
            .then((data) => {
                // console.log(data)
                setFilme(data)
                setIsPending(false)
            })
            .catch(err => {
                setIsPending(true)
                setError(err.message)
                // setError(null)
            })
    }, [])

    return (
        <div className="container">
            {/* {console.log(filmes)} */}
            {error && <div>{error}</div>}
            {isPending && <div>Carregando...</div>}
            {!isPending && <TrailerComp filme={filme} />}
            {/* <h1>A</h1>
            <TrailerComp filmes={filmes} /> */}
        </div>

    );
}

export default Trailer;