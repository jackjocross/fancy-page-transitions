import React from 'react'
import { Location } from '@reach/router'
import { Flipper } from 'react-flip-toolkit'

// We're not flipping anything during SSR but want to create an identical DOM structure
export const wrapRootElement = ({ element }) => (
  <React.Fragment>
    <Location>
      {({ location }) => <Flipper flipKey={location.key}>{element}</Flipper>}
    </Location>
  </React.Fragment>
)
