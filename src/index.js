import mitt from 'mitt'

import load from './load'
import register from './register'

const modulazy = global.__modulazy || {}

if (!global.__modulazy) {
  modulazy.registry = {}
  modulazy.emitter = mitt()
  
  modulazy.load = load
  modulazy.register = register
  global.__modulazy = modulazy
}

export default modulazy
