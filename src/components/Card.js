import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { Flipped } from 'react-flip-toolkit'

const __BROWSER__ = typeof window !== 'undefined'

export class Card extends React.Component {
  state = { flipping: false }

  handleClick = () => {
    if (this.link) {
      this.link.click()
    }
  }

  handleStart = () => this.setState({ flipping: true })
  handleComplete = () => this.setState({ flipping: false })

  render() {
    const { title, to, imageSizes } = this.props
    const { flipping } = this.state

    const card = (
      <div
        css={{
          background: '#fff',
          overflow: flipping ? 'visible' : 'hidden',
          zIndex: flipping ? 10 : 0,
          borderRadius: 0,
          borderWidth: '1px 0',
          borderStyle: 'solid',
          borderColor: '#eaecee',
          marginBottom: 20,
          cursor: 'pointer',
          ':last-child': {
            marginBottom: 0,
          },
          '@media(min-width: 500px)': {
            borderRadius: 2,
            borderWidth: 1,
          },
        }}
        onClick={this.handleClick}
      >
        <div css={{ flexDirection: 'column' }}>
          <Img sizes={imageSizes} alt="" height="auto" width="100%" />
          <div
            css={{
              fontSize: 21,
              fontWeight: 700,
              padding: 20,
              textDecoration: 'none',
            }}
          >
            <Link
              to={to}
              css={{
                color: 'black',
                textDecoration: 'none',
              }}
              innerRef={link => (this.link = link)}
            >
              {title}
            </Link>
          </div>
        </div>
      </div>
    )

    if (__BROWSER__) {
      return (
        <Flipped
          flipId={title}
          onStart={this.handleStart}
          complete={this.handleComplete}
        >
          {card}
        </Flipped>
      )
    }

    return card
  }
}
