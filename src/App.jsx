import './App.css'
import { Botao } from './components/botao/botao';
import { BotaoZero } from './components/botaoZero/BotaoZero';

function App() {
  return (
    <div className='content'>
      <div className='calculadora'>
        <div className='calculatorHeader'> 
          <p className='equacao'>9</p>
          <p className='solucao'>/ 3 </p>
        </div>
        <div className='botoes'>
          <div className='linhas'>
            <Botao 
            text={"CE"}
            background={"#616161"}
            color={"#A5A5A5"}
            onClick
            />

            <Botao 
            text={"C"}
            background={"#616161"}
            color={"#A5A5A5"}
            onClick
            />

            <Botao 
            text={"%"}
            background={"#616161"}
            color={"#A5A5A5"}
            onClick
            />

            <Botao 
            color={'#339dff'} 
            background={'#005db2'} 
            onClick 
            text={'/'} 
            />
            </div>
            <div className='linhas'>
            <Botao 
            text={"7"}
            background={"#616161"}
            color={"#339DFF"}
            onClick
            />

            <Botao 
            text={"8"}
            background={"#616161"}
            color={"#339DFF"}
            onClick
            />

            <Botao 
            text={"9"}
            background={"#616161"}
            color={"#339DFF"}
            onClick
            />

            <Botao 
            text={"X"}
            background={"#005db2"}
            color={"#339DFF"}
            onClick
            />
            </div>
            <div className='linhas'>
            <Botao 
            text={"4"}
            background={"#616161"}
            color={"#339DFF"}
            onClick
            />
            
            <Botao 
            text={"5"}
            background={"#616161"}
            color={"#339DFF"}
            onClick
            />

            <Botao 
            text={"6"}
            background={"#616161"}
            color={"#339DFF"}
            onClick
            />

            <Botao 
            text={"-"}
            background={"#005DB2"}
            color={"#339DFF"}
            onClick
            />

            </div>
            <div className='linhas'>
            
            <Botao 
            text={"1"}
            background={"#616161"}
            color={"#339DFF"}
            onClick
            />

            <Botao 
            text={"2"}
            background={"#616161"}
            color={"#339DFF"}
            onClick
            />

            <Botao 
            text={"3"}
            background={"#616161"}
            color={"#339DFF"}
            onClick
            />

            <Botao 
            text={"+"}
            background={"#005DB2"}
            color={"#339DFF"}
            onClick
            />

            </div>
            <div className='linhas'>

            <BotaoZero 
            text={"0"}
            background={"#616161"}
            color={"#339DFF"}
            onClick
            />

            <Botao 
            text={"."}
            background={"#005DB2"}
            color={"#339DFF"}
            onClick
            />

            <Botao 
            text={"="}
            background={"#005DB2"}
            color={"#339DFF"}
            onClick
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
