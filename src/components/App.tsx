import * as React from 'react'
import colors from '../colors'
import Color from './Color'

function App() {
  return (
    <>
      <h1 className="text-2xl text-center uppercase">css colors</h1>
      <div className="flex flex-wrap justify-center mx-auto">
        {colors.map((color) => (
          <Color key={color.name} color={color} />
        ))}
      </div>
    </>
  )
}

export default App
