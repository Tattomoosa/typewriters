import { ADD_LETTER, ADD_PAGE, ADD_BLANK_PAGE, LOAD_PAGES } from '../actionTypes'

const PAGELENGTH = 40
const DEFAULT_ID = 0

const blankPage = (id) => ({
  id,
  content: '',
  offset: 0,
})

const initialState = {
  ids: [DEFAULT_ID],
  byID: {
    [DEFAULT_ID]: blankPage(DEFAULT_ID),
  },
  offset: 0,
  width: 800,
  pageLength: PAGELENGTH,
}

const pageIsFull = (page) => page.content.length >= PAGELENGTH
const currentPageID = (ids) => ids.slice(-1).pop()
const currentPage = (state) => state.byID[currentPageID(state.ids)]

const addLetter = (state, letter) => {
  let id = currentPageID(state.ids)
  // letter = letter === ' ' ?  '_' : letter
  state = { ...state,
      byID: { ...state.byID,
        [id]: { ...state.byID[id],
          id: id,
          content: state.byID[id].content.concat(letter),
        }
      },
      offset: state.offset + 1
    }
  if (!pageIsFull(currentPage(state)))
    return state
  else
    return addBlankPage(state, { content: '' }, ++id)
}

const addBlankPage = (state, content, id) => {
  return { ...state,
    ids: [ ...state.ids,
      id,
    ],
    byID: { ...state.byID,
      [id]: {
        id: id,
        content: '',
        offset: state.offset,
      }
    }
  }
}

const addPage = (state, page) => {
  let { id } = page
  return { ...state,
    ids: [ ...state.ids,
      id,
    ].sort(),
    byID: { ...state.byID,
      [id]: {
        ...page,
      }
    }
  }
}

export default function(state = initialState, action) {
  // Last page
  const id = state.ids.slice(-1).pop()
  switch (action.type) {
    case ADD_LETTER:
      const { letter } = action.payload
      return addLetter(state, letter, id)
    case ADD_BLANK_PAGE:
      const { content } = action.payload
      return addBlankPage(state, content, id)
    case LOAD_PAGES:
      state = {...action.payload}
    default:
      return state
  }
}
