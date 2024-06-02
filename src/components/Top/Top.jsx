import style from './Top.module.scss';
import Ball from '../Ball/Ball';
import { usePlayContext } from '../../Context/playContext';



const Top = () =>{
    const {balls} = usePlayContext()
       if (balls > 0 ){
        return (
       
            <div className={style.top}>
                {
                [...Array(balls)].map((e,i)=>{ 
                return <Ball  key={i} ></Ball>})}
            </div>
        )
       }
 
    return (
       
        <div className={style.top}>
           </div>
    )
};

export default Top