import style from './Bottom.module.scss'
import CoinsHole from '../CoinsHole/CoinsHole'
import Turn from '../Turn/Turn'
import ExitDoor from '../ExitDoor/ExitDoor'

import { useState } from 'react'


const Bottom = () => {
    
    
    

  
   
   
  
    return (
        <div className={style.container}>
            
            <CoinsHole  />
            <Turn  />
            <ExitDoor />
          
        </div>
    )
}

export default Bottom