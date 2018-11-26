
export default (name, component) => {  
  global.__modulazy.emitter.emit('registration', {
    component,
    name,
  })
}