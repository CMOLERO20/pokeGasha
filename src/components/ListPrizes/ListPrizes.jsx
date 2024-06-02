import style from './ListPrizes.module.scss'
import { usePlayContext } from '../../Context/playContext'

const ListPrizes = () =>{
    const {getPrizes} = usePlayContext()
    const prizes = getPrizes()
    
    if(prizes.length> 0){
        return (
            
            <div className={style.container}>
                <p>You got...</p>
                <div className={style.box}>
                    {
                        prizes?.map(({name , sprites})=>{
                            return (
                                <div key={name}className={style.poke}>
                                <div>{name.toUpperCase()} </div>
                                <img src={sprites.other.dream_world.front_default} height={160}></img>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    
}

export default ListPrizes