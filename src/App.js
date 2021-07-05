import React, {useState} from 'react';
import './style.css'

export default function App(){

  let [numero, setNumero] = useState(0)
  let [timer, setTimer] = useState(null)
  let [buttonTxt, setButtonTxt] = useState('VAI')


  function vai(){

    //Quando roda pela primeira vez, o timer é null então vai pro else.
    if(timer !== null){ //verifica se tiver algo no timer. 
      clearInterval(timer) //parar de rodar
      setTimer(null)
      setButtonTxt('VAI')
    } else{
      setTimer(setInterval(() => {
        numero += 0.1;
        setNumero(numero);
      }, 100) )
      
      setButtonTxt('PARAR')
    }
  }

  function limpar(){
    if(timer !== null){ // verifica se tem algo no timer. Se não clica em limpar enquanto roda e ele continua
      clearInterval(timer)
      setTimer(null)
    }

    setNumero(0)
    setButtonTxt('VAI')
  }

  return(
    <div className="container">

      <img src={require('./assets/cronometro.png')}/>
      <a className="timer">{numero.toFixed(1)}</a>

      <div className="areaBtn">
        <a className="button" onClick={vai}> {buttonTxt}</a>
        <a className="button" onClick={limpar}> LIMPAR </a>
      </div>
    </div>
  )
}
