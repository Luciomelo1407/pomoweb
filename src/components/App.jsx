import { useEffect, useState } from 'react'
import './style/App.css'
import Headder from './Headder.jsx'
import Clock from './Clock.jsx'


function App() {
  // const [minutos, setMinutos] = useState("01")
  // const [segundos, setSegundos] = useState("10")
  // const [control, setControl] = useState (<button onClick={start} >Start</button>)
  // let varSegundos = parseInt(segundos);
  // let varMinutos = parseInt(minutos);
  // let state = 'stop';

  // let setInterface = () => {
  //   console.log("teste")
  //   if(state == 'stop'){
  //     setControl(<button onClick={start} >Start</button>) 
  //   }
  //   if(state == 'running'){
  //     setControl(<div><button onClick={pause}>Pause</button> <button>Skip</button></div>)
  //   } 
  //   if(state == 'paused'){
  //     setControl(<div><button onClick={start}>Continue</button> <button>Skip</button></div>)
  //   }
  // }

  // function clock(){
  //   varSegundos = varSegundos - 1
  //   if(varSegundos == -1 && varMinutos != 0){
  //     varMinutos = varMinutos -1
  //   }
  //   if (varSegundos == -1){
  //     varSegundos = 59
  //   }

  //   if(state == 'running'){
  //     updateTimer();
  //     if(varMinutos == 0 && varSegundos==0){state = 'finished'}
  //     setTimeout(clock,100)
  //   }
  // }
  
  // function start() {
  //   state = 'running';
  //   setInterface();
  //   clock();
  // }

  // function pause(){
  //   state = 'paused'
  //   setInterface();

  // }

  // function updateTimer(){
  //   let displaySec = "00"
  //   let displayMin = "00"
  //   if(varMinutos < 10){
  //     displayMin = '0' + varMinutos.toString()
  //   }else{
  //     displayMin = varMinutos.toString(); 
  //   }

  //   if(varSegundos < 10){
  //     displaySec = '0'+varSegundos.toString();
  //   }else{
  //     displaySec = varSegundos.toString();
  //   }
  //   console.log(displaySec)
  //     setSegundos(displaySec)
  //     setMinutos(displayMin)
  // }

  return (
    <>
      <Headder />
      <main className='w-3/5 h-auto bg-[rgba(217,217,217,.78)] mt-16 mx-auto my-auto rounded-md flex flex-col shadow-gray-400'>
        <Clock />
      </main>
    </>
  )
}



export default App
