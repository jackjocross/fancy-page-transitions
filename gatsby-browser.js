import React from 'react'
import { Location } from '@reach/router'
import { Flipper } from 'react-flip-toolkit'

// sane style defaults
import 'normalize.css'
import { css } from 'glamor'
css.global('html', {
  fontFamily:
    '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
  backgroundColor: '#f5f7f9',
})

export const wrapRootElement = ({ element }) => (
  <React.Fragment>
    <Location>
      {({ location }) => <Flipper flipKey={location.key}>{element}</Flipper>}
    </Location>
  </React.Fragment>
)
