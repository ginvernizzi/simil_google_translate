/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import React, { useReducer, useRef } from 'react'
import './App.css'
import { useStore } from './hooks/store'
import { Container, Row, Col } from 'react-bootstrap'
import InterchangeIcon from './assets/InterchangeIcon'
import { FromLanguage, Language } from './types'
import { AUTO_LENGUAGE, SUPPORTED_LAGNUAGES } from './constants/constants'
import SelectorLanguages from './components/SelectorLanguages'

const App = () => {
  const caca = useRef(null)
  const { fromLanguage, toLanguage, interchangeLanguage, setFromLanguage, setToLanguage } = useStore()
  const fromLanguages = [AUTO_LENGUAGE].concat(Object.keys(SUPPORTED_LAGNUAGES))
  const toLengages = Object.keys(SUPPORTED_LAGNUAGES)

  const onHandleInterchange = () => {
    interchangeLanguage()
  }

  const onHandleSelectFromLanguages = (lang: FromLanguage) => {
    setFromLanguage(lang)
  }

  const onHandleSelectToLanguages = (lang: Language) => {
    setToLanguage(lang)
  }

  return (
    <Container className='Container'>
      <h1>gonza translate</h1>
      <Row>
        <Col>
          <h2>From</h2>
          <SelectorLanguages language={fromLanguage} lenguagesList={fromLanguages} handleChangeLang={onHandleSelectFromLanguages} />
        </Col>
        <Col>
          <InterchangeIcon onHandleInterchange={onHandleInterchange} />
        </Col>
        <Col>
          <h3>to</h3>
          <SelectorLanguages language={toLanguage} lenguagesList={toLengages} handleChangeLang= {onHandleSelectToLanguages} />
        </Col>
      </Row>
    </Container>
  )
}

export default App
