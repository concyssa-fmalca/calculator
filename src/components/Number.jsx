import React,{useContext} from 'react'
import {UserContext} from '../context/UserContext'
import './Number.css'

export const Number = ({number}) => {

    const { setCurrentValue, isCalc, setIsCalc } = useContext(UserContext)

    const handleClick = (e) =>{      
        switch(e.target.innerText){
            case 'AC':
                setCurrentValue('');
                break;
            case '+/-':
                break;
            case '%':
                break;
            default:
                if (isCalc) {
                    setCurrentValue(e.target.innerText);          
                    setIsCalc(false);
                } else {
                    setCurrentValue( (value) => value + e.target.innerText);      
                }
        }
    }

  return (
    <button
        onClick={handleClick}
        >
        {number}
    </button>
  )
}
