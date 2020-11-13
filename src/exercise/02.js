// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

function Toggle({ children }) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return React.Children.map(children, child => { 
    if (typeof child.type === 'string') {
      return child
    } else if (!allowedTypes.includes(child.type)) {
      throw new Error(`child of type ${child.type} not allowed!`)
    }
    return React.cloneElement(child, { on, toggle })
  })
}

const ToggleOn = ({ on, children }) => on ? children : null

const ToggleOff = ({ on, children }) => on ? null : children

const ToggleButton = ({ on, toggle }) => <Switch on={on} onClick={toggle} />

const allowedTypes = [ToggleOn, ToggleOff, ToggleButton]

const MyType = () => 'Yo bitch!'

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>Hello</span>
        <MyType />
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
