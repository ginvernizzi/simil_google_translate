/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import React, { useReducer, useRef } from 'react'
import './App.css'
import { useStore } from './hooks/store'
import { Container, Row, Col, Form } from 'react-bootstrap'
import InterchangeIcon from './assets/InterchangeIcon'
import { FromLanguage, Language } from './types'
import { AUTO_LENGUAGE, SUPPORTED_LAGNUAGES } from './constants/constants'
import SelectorLanguages from './components/SelectorLanguages'
import { translate } from './services/translate'

const App = () => {
  const caca = useRef(null)
  const { fromLanguage, toLanguage, interchangeLanguage, setFromLanguage, setToLanguage, setFromText, fromText } = useStore()
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

  const onHandleFromText = (e) => {
    if (e.target.value.length > 3) {
      setFromText('mi auto es rojo')
    }
  }

  const onHandleTranslate = () => {
    console.log(fromLanguage, toLanguage, fromText)
    translate({ fromLanguage, toLanguage, text: fromText })
      .then(res => console.log(res))
  }

  return (
    <Container className='Container'>
      <h1>gonza translate</h1>
      <Row>
        <Col>
          <h2>From</h2>
          <SelectorLanguages language={fromLanguage} lenguagesList={fromLanguages} handleChangeLang={onHandleSelectFromLanguages} />
          <Form.Control onChange={(e) => onHandleFromText(e)} as='textarea' style={{ marginTop: '10px', height: '100px' }} type="text" name="fromText" />
        </Col>
        <Col>
          <InterchangeIcon onHandleInterchange={onHandleInterchange} />
        </Col>
        <Col>
          <h3>to</h3>
          <SelectorLanguages language={toLanguage} lenguagesList={toLengages} handleChangeLang={onHandleSelectToLanguages} />
          <Form.Control as='textarea' style={{ marginTop: '10px', height: '100px' }} type="text" name="toText" />
        </Col>
      </Row>
      <button onClick={onHandleTranslate}>Traducir</button>
    </Container>
  )
}

export default App
