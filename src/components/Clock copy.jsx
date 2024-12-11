
import { useState } from "react";

function Clock(){
  const [working,setWorking] = useState(true);

  const buttonStart = <button onClick={start} className="bg-[#D9D9D9] p-2 rounded-sm border-b-4 border-[#F9F6F6]" >Start</button>
  const buttonContinue = <div><button onClick={start} className="bg-[#D9D9D9] p-2 rounded-sm border-b-4 border-[#F9F6F6] mr-10">Continue</button> <button className="bg-[#D9D9D9] p-2 rounded-sm border-b-4 border-[#F9F6F6]">Skip</button></div>
  const buttonPause = <div><button onClick={pause} className="bg-[#D9D9D9] p-2 rounded-sm border-b-4 border-[#F9F6F6] mr-10">Pause</button> <button onClick={skip} className="bg-[#D9D9D9] p-2 rounded-sm border-b-4 border-[#F9F6F6]">Skip</button></div>

  let restTimeSeconds = 0;
  let restTimeMinutes = 1;
  let workTimeSeconds = 3;
  let workTimeMinutes = 2;

  const [minutos, setMinutos] = useState(workTimeMinutes.toString())
  const [segundos, setSegundos] = useState(workTimeSeconds.toString())
  const [control, setControl] = useState (buttonStart)
  let varSegundos = workTimeSeconds;
  let varMinutos = workTimeMinutes;
  let state = 'stop';
  



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
        state = 'paused'
        console.log(working)
        setInterface()
        if (working) {
          varSegundos = restTimeSeconds
          varMinutos = restTimeMinutes
        }else{
          varSegundos = workTimeSeconds;
          varMinutos = workTimeMinutes;
        }
        setWorking(!working)
        updateTimer();
        

        /*
          Bloco de código para configuração para o próximo intervalo de tempo
        */ 
      }
      setTimeout(clock,100)
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
                {working ? <p className="text-center">Working ...</p> : <p className="text-center">Resting ...</p>}
                <div className="font-mono text-9xl m-auto mt-32">
                    <span className="bg-[#D9D9D9] rounded-lg shadow-lg">{minutos}</span> <span>:</span> <span className="bg-[#D9D9D9] rounded-lg shadow-lg">{segundos}</span>
                </div>
            <div className="mx-auto mt-20 mb-24">{control}</div>
        </>
    )

}


export default Clock