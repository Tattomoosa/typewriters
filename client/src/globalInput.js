import store from './redux'
import { addLetter } from './redux/actions'

const modStatus = e => {
  return e.altKey || e.ctrlKey || e.metaKey
}


export default function() {
  document.addEventListener('keydown',
    e => {
      if (!modStatus(e) && e.key.match(/^.$/)) {
        store.dispatch(addLetter(e.key))
        e.preventDefault()
      }
    })
}

