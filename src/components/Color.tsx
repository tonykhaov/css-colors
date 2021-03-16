import * as React from 'react'
import { useCopyToClipboard } from 'react-use'

type ColorProps = { color: string }

function Color({ color }: ColorProps) {
  const [, copyToClipboard] = useCopyToClipboard()
  return (
    <span
      className="flex items-center justify-center inline-block w-48 h-24 cursor-pointer"
      style={{ backgroundColor: color }}
      onClick={() => copyToClipboard(color)}
    >
      {color}
    </span>
  )
}

export default Color
