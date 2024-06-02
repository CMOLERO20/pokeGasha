import { createContext, useContext,useState } from "react";

const playContext = createContext()

const {Provider} = playContext

export const usePlayContext = () => useContext(playContext)

const PlayProvider = ({children}) => {

    const [action,setAction] = useState(1)
    const [balls,setBalls] = useState(5)
    const [prizes,setPrizes] = useState([])

    const nextAction = () =>{
        setAction(action+1)
    }

    const reset = () => {
        setAction(1)
        if(balls == 0 ){setBalls(5)}
    }

    const takeBall = () =>{
        setBalls(balls-1)
    }

    const savePrize = (arr) =>{
        prizes.push(arr)
      
    }
    const getPrizes = () => {
        return prizes
    }


    const valorDelContexto = { action, nextAction , reset , balls,takeBall, savePrize, getPrizes}

    return <Provider value={valorDelContexto}>{children}</Provider>

}

export default PlayProvider