import { ADD_LETTER, ADD_PAGE, LOAD_PAGES } from './actionTypes'

let nextPageID = 0

export const addLetter = letter => ({
  type: ADD_LETTER,
  payload: { letter }
})

export const addPage = content => ({
  type: ADD_PAGE,
  id: ++nextPageID,
  payload: { content }
})

export const loadPages = pages => ({
  type: LOAD_PAGES,
  payload: { pages }
})
