import React from 'react'
import '../styles/Page.css'
import { CHAR_WIDTH, CHAR_HEIGHT } from '../common/constants'

const charStyle = {
  width: `${CHAR_WIDTH}px`,
  height: `${CHAR_HEIGHT}px`,
  lineHeight: `${CHAR_HEIGHT}px`,
  display: 'inline-block',
}
const spacerStyle = {
  ...charStyle,
  //color: 'transparent',
}

export default (props) => {
  let offset = props.offset
  let offsetChars = Array(offset).fill('.')
  //if (offset) console.log(offset)
  //if (offset) console.log(offsetChars)
  return (
    <span className="Page">
      {
        offsetChars.map((_, i)=> {
        return <span
          className="char spacer"
          key={i}
          style={spacerStyle}
        >
          _
        </span>
        })
      }
      {
        props.content.split('').map(
          (c, i) => {
          let style = {...charStyle, color: '#abcabc'}
          let cursor = {...charStyle, color: '#ffffff'}
          if (c === " ") {
            c = '_'
            style.color = 'transparent'
          }
          return <span
            className="char"
            key={i}
            style={style}
          >
            {c}
          </span>
          })
      }
      { props.latest ?
          <span
            className="flash-cursor"
          >
            &#9608;
          </span> :
          '' }
    </span>
  )
}
