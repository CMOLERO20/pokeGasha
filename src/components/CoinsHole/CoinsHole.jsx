
import style from './CoinsHole.module.scss'
import { usePlayContext } from '../../Context/playContext'



const CoinsHole = () => {
    const {action, nextAction} = usePlayContext()

   

    if(action == 1 ){
      
      return (
        <div className={style.container}>
          <input className={style.input} type='button' value='' onClick={nextAction}  ></input>
        </div>
    )
    } else { 
       return (
      <div className={style.container_disable}>
        <input className={[ style.disable]} type='button' value='' onClick={nextAction} disabled ></input>
      </div>
  )}
   
}

export default CoinsHole