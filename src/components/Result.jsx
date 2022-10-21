import React,{useContext} from 'react'
import {UserContext} from '../context/UserContext'
import './Result.css'

export const Result = () => { 
  
  const {currentValue} = useContext(UserContext)

  return (
    <>
        <input 
          type="text" 
          readOnly 
          value={currentValue}          
          />
    </>
  )
}
