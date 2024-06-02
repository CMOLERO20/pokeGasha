import style from './Prize.module.scss'
import { useState, useEffect } from 'react'
import { usePlayContext } from '../../Context/playContext'
import pokeBall from '../../assets/Pokeball-open.png'

const Prize = ({closePrize}) => {
    const {savePrize} = usePlayContext()
    const [pokeInfo,setPokeInfo] = useState(null)
    const [loading, setLoading] = useState(true)
    const number = Math.floor( Math.random()*(150-1)+1)

   
    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
        .then((response) => response.json())
        .then((poke) => {
          setPokeInfo(poke);
          setLoading(false)
        })
       
    }, [])
    
    if(pokeInfo != null ) {savePrize(pokeInfo)}
    return !loading ? (
        <div className={style.container}>
            <button className={style.btn_close} onClick={closePrize}>X</button>
            <h1 className={style.congrat}>Congratulation!</h1>
            <img src={pokeInfo?.sprites.other.dream_world.front_default} height={200}></img>
            <h2>You got {pokeInfo?.name.toUpperCase()}</h2>
            </div>
    ) : (
        <div className={style.container}>
            <img src={pokeBall} className={style.pokeball}></img>
        </div>
    )
}

export default Prize