import * as React from 'react'
import { useCopyToClipboard } from 'react-use'
import type { ColorType } from '../colors'

type ColorProps = { color: ColorType }

function Color({ color }: ColorProps) {
  const [, copyToClipboard] = useCopyToClipboard()

  return (
    <div
      className="flex items-center justify-center w-64 h-32 cursor-pointer"
      style={{ backgroundColor: color.hex }}
      onClick={() => copyToClipboard(color.hex)}
    >
      <p className="text-xl font-semibold tracking-wide text-white select-none" style={{ backgroundColor: color.hex }}>
        {color.name}
      </p>
    </div>
  )
}

export default Color
