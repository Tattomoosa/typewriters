import { socket } from 'server/router'

let onConnect = _ => {
  console.log('onConnect')
}

let onMessage = _ => {
  console.log('onMessage')
}

let onDisconnect = _ => {
  console.log('onDisconnect')
}

export default [
  socket('connect', onConnect),
  socket('message', onMessage),
  socket('disconnect', onDisconnect)
]
