import style from './Logo.module.scss'
import logo from '../../assets/pokeGasha.png'
const Logo = () =>{

    return (
        <div className={style.container}>
             <img src={logo} height={140}></img>
        </div>
    )
}

export default Logo