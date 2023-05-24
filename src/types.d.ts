/* eslint-disable @typescript-eslint/member-delimiter-style */
export interface TraductorState {
  fromLanguage: string
  toLanguage: string
  fromText: string
  result: string
  loading: boolean
}

export type action = {
  type: 'INTERCHANGE_LANGUAGE'
} | {
  type: 'SET_FROM_LANGUAGE', payload: string
} | {
  type: 'INTERCHANGE_LANGUAGE',
  payload: string,
} | {
  type: 'SET_TO_LANGUAGE',
  payload: string
} | {
  type: 'SET_FROM_TEXT',
  payload: string
} | {
  type: 'SET_RESULT',
  payload: string
}
