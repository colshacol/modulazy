
export default (name, component) => {
  console.log('registering', name)
  
  global.__modulazy.emitter.emit('registration', {
    component: component(),
    name,
  })
}