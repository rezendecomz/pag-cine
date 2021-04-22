import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import ListaComp from './components/ListaComp'
// import filmes from './filmes/listaFilmes'

const ListaDeFilmes = () => {
    const [filmes, setFilmes] = useState(null)

    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        fetch('http://localhost:3030/listaFilmes')
            .then(res => {
                return res.json()
            })
            .then((data) => {
                // console.log(data)
                setFilmes(data)
                setIsPending(false)
            })
    }, [])

    return (
        <div className='listaDeFilme mt-4'>
            {!isPending && <ListaComp filmes={filmes} />}

        </div>
    );
}

export default ListaDeFilmes;