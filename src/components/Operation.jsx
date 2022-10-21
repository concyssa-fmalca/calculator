import React,{ useContext } from 'react'
import {UserContext} from '../context/UserContext'

export const Operation = ({symbol}) => {
    const { currentValue, setCurrentValue, firstValue, currentOperation,
        setFirstValue, setCurrentOperation, setIsCalc } = useContext(UserContext)

    const handleClick = (e) => {    
        const operationSymbol = e.target.innerText;        
        if (currentValue){
            switch (operationSymbol){
                case '=':                    
                    const secondValue = Number(currentValue);                    
                    if (currentOperation==='/' && secondValue===0){
                        setCurrentValue('NAN')
                    }
                    else {
                        if (currentOperation==='+') {                            
                            setCurrentValue( firstValue + secondValue)
                            setFirstValue(0)
                            setCurrentOperation('')
                        }
                        if (currentOperation==='-'){
                            setCurrentValue( firstValue - secondValue)
                            setFirstValue(0)
                            setCurrentOperation('')
                        } 
                        if (currentOperation==='x') {
                            setCurrentValue( firstValue * secondValue)
                            setFirstValue(0)
                            setCurrentOperation('')
                        }
                        if (currentOperation==='/') {
                            setCurrentValue( firstValue / secondValue)
                            setFirstValue(0)
                            setCurrentOperation('')
                        }
                    }
                    setIsCalc(true);
                    break;
                default:
                    setCurrentOperation(e.target.innerText)
                    setFirstValue(Number(currentValue))
                    setCurrentValue('');                    
            }
        }   
    }

  return (
    <button
        onClick={handleClick}
    >
    {symbol}
    </button>
  )
}
