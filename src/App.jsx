
import './App.css'
import Gasha from './components/Gasha/Gasha'
import PlayProvider from './Context/playContext'
import ListPrizes from './components/ListPrizes/ListPrizes'
import Logo from './components/Logo/Logo'

function App() {
  

  return (
    (<>
    <Logo/>
    <PlayProvider>
      <Gasha />
      <ListPrizes/>
      </PlayProvider>
    </>
    )
   
  )
}

export default App
