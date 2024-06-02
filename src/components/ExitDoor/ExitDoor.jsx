import style from './ExitDoor.module.scss'
import Ball from '../Ball/Ball'
import { usePlayContext } from '../../Context/playContext'
import pokeBola from '../../assets/poke-ball.png'

const ExitDoor = () => {
    const {action,nextAction} = usePlayContext()

   


    return (
        <div className={style.container}>
         { action == 3 ?   <input className={style.ball} type='image' onClick={nextAction} src={pokeBola}>
            
        </input> : "" }
        </div>
    )
}

export default ExitDoor