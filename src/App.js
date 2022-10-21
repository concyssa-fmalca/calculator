import './App.css';
import { Result } from './components/Result';
import { Number } from './components/Number';
import { Operation } from './components/Operation';
import {useState } from 'react';
import {UserContext} from './context/UserContext'

const numbers = ['AC','+/-','%','7','8','9','4','5','6','1','2','3','0'];
const operations = ['/','x','-','+','='];

function App() {

  const [isCalc, setIsCalc] = useState(false)
  const [currentValue, setCurrentValue] = useState('')
  const [firstValue,setFirstValue] = useState(0)
  const [secondValue,setSecondValue] = useState(0)
  const [currentOperation, setCurrentOperation] = useState('')

  return (
    <>
      <UserContext.Provider 
        value= {{currentValue, setCurrentValue,
          firstValue, setFirstValue,
          secondValue, setSecondValue,
          currentOperation, setCurrentOperation,
          isCalc, setIsCalc
        }}         
      >
      <div className='container'>
          <Result />
        {
          numbers.map((number) => { return <Number number={number} />})
        }

        {          
          operations.map((symbol) => { return <Operation symbol={symbol} />})
        }
      </div>
      </UserContext.Provider>      
    </>
  );
}

export default App;
