import * as React from 'react'
import colors from '../colors'

function App() {
  return (
    <>
      <h1 className="text-2xl text-center uppercase">css colors</h1>
      <div>
        {colors.map((color) => {
          return (
            <span className="inline-block w-48 h-24" style={{ backgroundColor: color }} key={color}>
              {color}
            </span>
          )
        })}
      </div>
    </>
  )
}

export default App
