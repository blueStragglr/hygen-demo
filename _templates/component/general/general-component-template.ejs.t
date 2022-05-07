---
to: src/components/general/<%= pascal %>/<%= pascal %>.tsx
---
import React from 'react'
import {plus} from './<%= pascal %>Util'

export interface <%= pascal %>Props {
  message?: string
}

const <%= pascal %>: React.VFC<<%= pascal %>Props> = (props) => {
  const a = 2
  const b = 3

  return (
    <div>
      <%= pascal %>
      {`${a} plus ${b} is ${plus(a, b)}`}
    </div>
  )
}

export default <%= pascal %>
