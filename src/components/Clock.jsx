
import { useState } from "react";

function Clock(){
  const buttonStart = <button onClick={start} className="bg-[#D9D9D9] p-2 rounded-sm border-b-4 border-[#F9F6F6]" >Start</button>
  const buttonContinue = <div><button onClick={start} className="bg-[#D9D9D9] p-2 rounded-sm border-b-4 border-[#F9F6F6] mr-10">Continue</button> <button className="bg-[#D9D9D9] p-2 rounded-sm border-b-4 border-[#F9F6F6]">Skip</button></div>
  const buttonPause = <div><button onClick={pause} className="bg-[#D9D9D9] p-2 rounded-sm border-b-4 border-[#F9F6F6] mr-10">Pause</button> <button className="bg-[#D9D9D9] p-2 rounded-sm border-b-4 border-[#F9F6F6]">Skip</button></div>
  
  const [minutos, setMinutos] = useState("01")
  const [segundos, setSegundos] = useState("10")
  const [control, setControl] = useState (buttonStart)
  let varSegundos = parseInt(segundos);
  let varMinutos = parseInt(minutos);
  let state = 'stop';
  let working = true;

  const restTime = 0;
  const workTime = 0;

  let setInterface = () => {
    console.log("teste")
    if(state == 'stop'){
      setControl(buttonStart) 
    }
    if(state == 'running'){
      setControl(buttonPause)
    } 
    if(state == 'paused'){
      setControl(buttonContinue)
    }

  }

  function clock(){
    varSegundos = varSegundos - 1
    if(varSegundos == -1 && varMinutos != 0){
      varMinutos = varMinutos -1
    }
    if (varSegundos == -1){
      varSegundos = 59
    }

    if(state == 'running'){
      updateTimer();
      if(varMinutos == 0 && varSegundos==0){
        state = 'finished'
        /*
          Bloco de código para configuração para o próximo intervalo de tempo
        */ 
      }
      setTimeout(clock,1000)
    }
  }
  
  function start() {
    state = 'running';
    setInterface();
    clock();
  }

  function pause(){
    state = 'paused'
    setInterface();
  }

  function skip(){
    state = 'paused'
    setInterface();
  }

  function updateTimer(){
    let displaySec = "00"
    let displayMin = "00"
    if(varMinutos < 10){
      displayMin = '0' + varMinutos.toString()
    }else{
      displayMin = varMinutos.toString(); 
    }

    if(varSegundos < 10){
      displaySec = '0'+varSegundos.toString();
    }else{
      displaySec = varSegundos.toString();
    }
    console.log(displaySec)
      setSegundos(displaySec)
      setMinutos(displayMin)
  }

    return(
        <>
                <div className="font-mono text-9xl m-auto mt-32">
                    <span className="bg-[#D9D9D9] rounded-lg shadow-lg">{minutos}</span> <span>:</span> <span className="bg-[#D9D9D9] rounded-lg shadow-lg">{segundos}</span>
                </div>

            <div className="mx-auto mt-20 mb-24">{control}</div>
        </>
    )

}


export default Clock