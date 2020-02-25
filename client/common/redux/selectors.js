import { CHAR_WIDTH } from '../constants'

export const getPageContent = (s, id) => s.pages[id].content
export const getPageIDs = (s, start, end) =>
  s.ids.slice(start, end)
export const getLatestPageIDs = (s, count) =>
  s.ids.slice(-count)
export const getLatestPages = (s, count) =>
  getLatestPageIDs(s, count).map(id => s.byID[id])

export const getCharsPerLine = (s) => Math.floor(s.width / CHAR_WIDTH)
export const getOverhang = (s) => getRelativeOffset(s, s.offset)
export const getRelativeOffset = (s, offset) => offset % getCharsPerLine(s)
