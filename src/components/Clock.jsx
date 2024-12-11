
import { useState } from "react";

function timeToString(number){
  return number < 10 ? '0'+number.toString() : number.toString();
}

function Clock(){


    let working = true
    let running = false
    

    const workingMin = 1
    const workingSec = 0

    const relaxMin = 2
    const relaxSec = 0

    let clockSec = workingSec
    let clockMin = workingMin

    const [stateStyle,setStateStyle] = useState( ' bg-[#C55252]') 

    function choseStateStyle(){
      if(working){
        setStateStyle(' bg-[#C55252]')
      }else{
        setStateStyle(' bg-[#5D5FD8]')
      }
    }

    const styleNumbers = "bg-[#D9D9D9] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] sm:text-9xl text-6xl";
    const styleComma = 'sm:text-9xl text-6xl';
    const contentStyle = 'w-3/5 h-auto mt-16 bg-[rgba(217,217,217,.78)] mx-auto rounded-md grid shadow-gray-400 p-10'
    const btnsStyle = 'rounded bg-[#D9D9D9] px-2 pt-2 border-b-[5px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]'
    
    const [displayMin, setDisplayMin] = useState(timeToString(clockMin));
    const [displaySec, setDisplaySec] = useState(timeToString(clockSec));
    
    const startBtn =      <button onClick={start} className={btnsStyle}>start</button>;
    const continueBtn = <><button onClick={continuefunc} className={ btnsStyle +" sm:mr-5"}>continue</button> <button onClick={skip} className={ btnsStyle +" sm:mr-5"}>Skip</button></>;
    const pauseBtn =    <><button onClick={pause} className={btnsStyle +" sm:mr-5"} >pause</button>           <button onClick={skip} className={btnsStyle +" sm:ml-5"}>skip</button></>
    const [buttons,setButtons] = useState(startBtn);


    function start(){
      running = !running
      clock()
      setButtons(pauseBtn)
    }

    function pause(){
      running = !running
      setButtons(continueBtn)
    }

    function continuefunc(){
      running = !running
      clock()
      setButtons(pauseBtn)
    }

    function skip(){
      running = !running
      setButtons(continueBtn)
          //CUIDADO ESTOU MUDANDO ESTUDO E RELAX AQUI
      working = !working
      choseStateStyle()
      if(!working){
        clockSec = relaxSec
        clockMin = relaxMin
      }else{
        clockSec = workingSec
        clockMin = workingMin
      }
      updateSec()
      updateMin()
    }

    function debug(msg){
      console.log("passou aqui" + msg)
    }

    function updateSec(){
      setDisplaySec(timeToString(clockSec))
    }

    function updateMin(){
      setDisplayMin(timeToString(clockMin))
    }

    function clock(){
      if(running){
        clockSec --;
        if(clockSec < 0){
          clockSec = 59
        }
        updateSec()
        if(clockSec == 59 && clockMin > 0){
          clockMin--;
          updateMin()
        }
        
        if(clockSec == 0 && clockMin == 0){
          skip()
          
        }
        setTimeout(clock,100)
      }
      

    }

    return(
        <>
      <div className={contentStyle + stateStyle }>
        <p>{' '}</p>
        <div className="m-auto mb-10">
          <span className={styleNumbers}>{displayMin}</span> 
          <span className={styleComma}>:</span> 
          <span className={styleNumbers}>{displaySec}</span>
        </div>
        <div className="mx-auto mt-10">
            {buttons}
        </div>
      </div>
        </>
    );

}


export default Clock;