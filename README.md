# modulazy

```js
// ExternalComponent.js
import React from 'react'
import modulazy from 'modulazy'

modulazy.register('ExternalComponent', () => {
  return (
    <div>
      <h1>I am a Component.</h1>
    </div>
  )
})
```

```js
// MainApp.js
import React from "react";
import ReactDOM from "react-dom";
import modulazy from "modulazy";

modulazy.load('https://url.to/ExternalComponent.js').then((Component) => {
  const root = document.getElementById('root')

  const App = () => (
    <div>
      <Component />
      <small>The component will work!</small>
    </div>
  )

  ReactDOM.render(
    <App />,
    root
  )
})


```