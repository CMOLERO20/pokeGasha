import { useState, useEffect } from 'react'
import style from './Turn.module.scss'
import { usePlayContext } from '../../Context/playContext'


const Turn =() => {
    
    const [count,setCount] = useState(1)
    const [rotate,setRotate] = useState(0)
    const {action, nextAction,takeBall,balls} = usePlayContext()
    
   

    const handlerClick = () => {

        if( action == 2 && count < 3) {
            setRotate(1)
            setCount(count+1)
           }
         else if (action ==2 &&count == 3 ) {
            setRotate(1)
            takeBall()
            nextAction()
            setCount(1)
         }
            
       
    }

    if(action == 2){
        return (
            <div className={style.container} ani={1}>
                <input className={style.input}
                onClick={handlerClick}
                onAnimationEnd={() => {setRotate(0)}}
                type='button'
                rotate={rotate} ></input>
            </div>
        )
    }
    return (
        <div className={style.container}>
            <input className={style.input}
            onClick={handlerClick}
            onAnimationEnd={() => {setRotate(0)}}
            type='button'
            rotate={rotate} disabled></input>
        </div>
    )

}

export default Turn