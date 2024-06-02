import style from './Gasha.module.scss'
import { usePlayContext } from '../../Context/playContext'
import Bottom from '../Bottom/Bottom'
import Prize from '../Prize/Prize'
import React from 'react'
import { useState } from 'react'
import Ball from '../Ball/Ball'
import Top from '../Top/Top'



const Gasha = () => {
    const {action, nextAction , reset , balls} = usePlayContext()
   
    

   return (

    <div className={style.container}>
        <Top></Top>
       
        <Bottom ></Bottom>

        {action == 4 ? <Prize closePrize={reset}></Prize>:""}
    </div>
   ) 
}

export default Gasha