/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import React, { useReducer } from 'react'
import './App.css'
import { useStore } from './hooks/store'
import { Button, Container, Row, Col } from 'react-bootstrap'
import InterchangeIcon from './assets/InterchangeIcon'

const App = () => {
  const { fromLanguage, toLanguage, interchangeLanguage } = useStore()

  const onHandleInterchange = () => {
    interchangeLanguage()
  }

  return (
    <Container className='Conatoner'>
      <h1>gonza translate</h1>
      <Row>
        <Col>
          <h2>From</h2>
          {fromLanguage}
        </Col>
        <Col>
          <InterchangeIcon onHandleInterchange={onHandleInterchange} />
        </Col>
        <Col>
          <h3>to</h3>
          {toLanguage}
        </Col>
      </Row>
    </Container>
  )
}

export default App
