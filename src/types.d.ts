/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/member-delimiter-style */

import { SUPPORTED_LAGNUAGES, AUTO_LENGUAGE } from './constants/constants'
export type Language = keyof typeof SUPPORTED_LAGNUAGES
export type Auto_Lenguage = typeof AUTO_LENGUAGE
export type FromLanguage = Language | Auto_Lenguage

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
  type: 'SET_FROM_LANGUAGE',
  payload: string
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
