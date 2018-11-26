export default (src) => {
  const onLoad = (event) => {
    console.log('it loaded, yo!')
  }

  const onError = (error) => {
    throw new URIError("The script " + error.target.src + " didn't load correctly.")
  }

  return new Promise((resolve, reject) => {
    global.__modulazy.emitter.on('registration', (event) => {
      console.log({ event }, event.detail)
      console.log('registeredddd')
      global.__modulazy.registry[event.name] = event.component
      resolve(event.component)
    })
  
    const element = document.createElement('script')
  
    element.setAttribute('src', src)
    element.addEventListener('load', onLoad)
    element.addEventListener('error', onError)
    document.body.append(element)
  })
}