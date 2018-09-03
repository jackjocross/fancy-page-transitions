import React from 'react'
import {
  Flipper as FlipperImpl,
  Flipped as FlippedImpl,
} from 'react-flip-toolkit'

const __BROWSER__ = typeof window !== 'undefined'

export const Flipper = FlipperImpl
export const Flipped = __BROWSER__
  ? FlippedImpl
  : ({ children }) => <React.Fragment>{children}</React.Fragment>
