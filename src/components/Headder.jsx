import iconRelogio from './assets/relogio.ico'
import fotoRelogio from './assets/relogio.png'
import './style/Headder.css'

function Headder(){
    
    return (
        <ul className="bg-slate-800 flex p-2">
            <li > <img src={fotoRelogio} alt="" className='seila'  /> </li>
            <li className='text-white text-4xl ml-1 '>PomoWeb</li>
        </ul>
    )
}

export default Headder