import React from 'react'
import { hydrate, render } from 'react-dom'
import 'normalize.css'
import 'border-box.css'

import App from './components/App'
import { printAscii } from './utils'

printAscii()

const rootElement = document.getElementById('groot')!
if (rootElement.hasChildNodes()) hydrate(<App />, rootElement)
else render(<App />, rootElement)
