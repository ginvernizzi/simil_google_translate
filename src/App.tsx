/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import React, { useReducer } from 'react'
import './App.css'
import { useStore } from './hooks/store'
import { Button } from 'react-bootstrap'

const App = () => {
  const { fromLanguage, toLanguage, interchangeLanguage } = useStore()

  const onHandleInterchange = () => {
    interchangeLanguage()
  }

  return (
    <div className='App'>
      <h1>gonza translate</h1>
      <div style={{ display: 'flex', gap: '5px' }}>
        <div>{fromLanguage} </div>
        <Button onClick={onHandleInterchange}>Interchange</Button>
        <div>{toLanguage} </div>
      </div>
    </div>
  )
}

export default App
