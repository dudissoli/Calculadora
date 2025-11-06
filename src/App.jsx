import { useState } from 'react';
import './App.css'
import { Botao } from './components/botao/botao';
import { BotaoZero } from './components/botaoZero/BotaoZero';

function App() {
  const [numeroUm, setNumeroUm] = useState("");
  const [simbolo, setSimbolo] = useState("");
  const [numeroDois, setNumeroDois] = useState("");

  function  adicionarNumero(n){
    let num = numeroUm + n;
    setNumeroUm(num);
  }

  function conta(sinal){
    if(numeroUm != '' && numeroDois != "") {
      if(simbolo === "/") {
        setNumeroDois(parseFloat(numeroDois) / parseFloat(numeroUm));
    } else if (simbolo === "*"){
      setNumeroDois(parseFloat(numeroDois) * parseFloat(numeroUm));
    } else if (simbolo === "-"){
      setNumeroDois(parseFloat(numeroDois) - parseFloat(numeroUm));
    } else if (simbolo === "+"){
      setNumeroDois(parseFloat(numeroDois) + parseFloat(numeroUm));
    }
    setSimbolo(sinal);
    setNumeroUm("");
  } else {
    setSimbolo(sinal);
    setNumeroDois(numeroUm);
    setNumeroUm("");
  
  }
}

function resultado(){
  if(numeroUm != '' && numeroDois != "" && simbolo != '='){
    if(simbolo === '/') {
     setNumeroUm(parseFloat(numeroDois) / parseFloat(numeroUm));
    } else if (simbolo === "*"){
      setNumeroUm(parseFloat(numeroDois) * parseFloat(numeroUm));
    } else if (simbolo === "-"){
      setNumeroUm(parseFloat(numeroDois) - parseFloat(numeroUm));
    } else if (simbolo === "+"){
      setNumeroUm(parseFloat(numeroDois) + parseFloat(numeroUm));
    }
    setNumeroDois("");
    setSimbolo('=');
    }
}

function limpar(){
  setNumeroUm('')
}

function limparTudo(){
  setNumeroUm("");
  setNumeroDois("");
  setSimbolo("");
}

function porcentagem(){
  if (numeroUm && numeroDois){
    const valor = (parseFloat(numeroDois) * parseFloat(numeroUm)) / 100;
    setNumeroUm(valor.toString());
  } else if (numeroUm) {
    const valor = parseFloat(numeroUm) / 100;
    setNumeroUm(valor.toString());
  }
}

function adicionarPonto(){
  if(numeroUm === ""){
    setNumeroUm("0.");
  } else if(!numeroUm.includes(".")){
    let num = numeroUm + ".";
    setNumeroUm(num);
  }
}

  return (
    <div className='content'>
      <div className='calculadora'>
        <div className='calculatorHeader'> 
          <p className='equacao'>{numeroDois}</p>
          <p className='solucao'>
            {simbolo} {numeroUm}
            </p>
        </div>
        <div className='botoes'>
          <div className='linhas'>
            <Botao 
            text={"CE"}
            background={"#7f4ca5"}
            color={"#fff0ff"}
            onClick={() => limpar()}
            />

            <Botao 
            text={"C"}
            background={"#7f4ca5"}
            color={"#fff0ff"}
            onClick={() => limparTudo()}
            />

            <Botao 
            text={"%"}
            background={"#7f4ca5"}
            color={"#fff0ff"}
            onClick={() => porcentagem()}
            />

           <Botao 
            text={"/"}
            background={"#dbb6ee"}
            color={"#4B0082"}
            onClick={() => conta('/')}
            />

            </div>
            <div className='linhas'>

            <Botao 
            text={"7"}
            background={"#b57edc"}
            color={"#fff0ff"}
            onClick={() => adicionarNumero(7)}
            />

            <Botao 
            text={"8"}
            background={"#b57edc"}
            color={"#fff0ff"}
            onClick={() => adicionarNumero(8)}
            />

            <Botao 
            text={"9"}
            background={"#b57edc"}
            color={"#fff0ff"}
            onClick={() => adicionarNumero(9)}
            />

            <Botao 
            text={"*"}
            background={"#dbb6ee"}
            color={"#4B0082"}
            onClick={() => conta('*')}
            />
            </div>
            <div className='linhas'>
            <Botao 
            text={"4"}
            background={"#b57edc"}
            color={"#fff0ff"}
            onClick={() => adicionarNumero(4)}
            />
            
            <Botao 
            text={"5"}
            background={"#b57edc"}
            color={"#fff0ff"}
            onClick={() => adicionarNumero(5)}
            />

            <Botao 
            text={"6"}
            background={"#b57edc"}
            color={"#fff0ff"}
            onClick={() => adicionarNumero(6)}
            />

            <Botao 
            text={"-"}
            background={"#dbb6ee"}
            color={"#4B0082"}
            onClick={() => conta('-')}
            />

            </div>
            <div className='linhas'>
            
            <Botao 
            text={"1"}
            background={"#b57edc"}
            color={"#fff0ff"}
            onClick={() => adicionarNumero(1)}
            />

            <Botao 
            text={"2"}
            background={"#b57edc"}
            color={"#fff0ff"}
            onClick={() => adicionarNumero(2)}
            />

            <Botao 
            text={"3"}
            background={"#b57edc"}
            color={"#fff0ff"}
            onClick={() => adicionarNumero(3)}
            />

            <Botao 
            text={"+"}
            background={"#dbb6ee"}
            color={"#4B0082"}
            onClick={() => conta('+')}
            />

            </div>
            <div className='linhas'>

            <BotaoZero 
            text={"0"}
            background={"#b57edc"}
            color={"#fff0ff"}
            onClick={() => adicionarNumero(0)}
            />

            <Botao 
            text={"."}
            background={"#dbb6ee"}
            color={"#4B0082"}
            onClick={() => adicionarPonto()}
            />

            <Botao 
            text={"="}
            background={"#dbb6ee"}
            color={"#4B0082"}
            onClick={() => resultado()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
