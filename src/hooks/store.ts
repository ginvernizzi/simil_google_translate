/* eslint-disable @typescript-eslint/consistent-type-imports */
import { useReducer } from 'react'
import { action, FromLanguage, Language, TraductorState } from '../types'

const InitialState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

const reducer = (state: TraductorState, action: action) => {
  const { type } = action
  if (type === 'INTERCHANGE_LANGUAGE') {
    if (state.fromLanguage === 'auto') {
      return { ...state }
    }
    return { ...state, fromLanguage: state.toLanguage, toLanguage: state.fromLanguage }
  }

  if (type === 'SET_FROM_LANGUAGE') {
    return { ...state, fromLanguage: action.payload }
  }

  if (type === 'SET_TO_LANGUAGE') {
    return { ...state, toLanguage: action.payload }
  }

  if (type === 'SET_FROM_TEXT') {
    return { ...state, fromText: action.payload, loading: true, result: '' }
  }

  if (type === 'SET_RESULT') {
    return { ...state, result: action.payload, loading: false }
  }
  return state
}

export function useStore() {
  const [{ fromLanguage, toLanguage, fromText, result, loading }, dispatch] = useReducer(reducer, InitialState)

  const interchangeLanguage = () => {
    dispatch({ type: 'INTERCHANGE_LANGUAGE' })
  }

  const setFromLanguage = (payload: FromLanguage) => {
    console.log('set from Leng method')
    dispatch({ type: 'SET_FROM_LANGUAGE', payload })
  }

  const setToLanguage = (payload: Language) => {
    console.log('set to Leng method')
    dispatch({ type: 'SET_TO_LANGUAGE', payload })
  }

  const setFromText = (payload: string) => {
    dispatch({ type: 'SET_FROM_TEXT', payload })
  }

  const setResult = (payload: string) => {
    dispatch({ type: 'SET_RESULT', payload })
  }

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguage,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  }
}
