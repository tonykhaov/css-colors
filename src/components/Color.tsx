import * as React from 'react'
import { useCopyToClipboard } from 'react-use'
import type { ColorType } from '../colors'

type ColorProps = { color: ColorType }

function Color({ color }: ColorProps) {
  const [, copyToClipboard] = useCopyToClipboard()
  return (
    <span
      className="flex items-center justify-center w-48 h-24 cursor-pointer"
      style={{ backgroundColor: color.hex }}
      onClick={() => copyToClipboard(color.hex)}
    >
      {color.name}
    </span>
  )
}

export default Color
