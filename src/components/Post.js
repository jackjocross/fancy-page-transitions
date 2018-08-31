import React from 'react'
import Img from 'gatsby-image'
import { Flipped } from 'react-flip-toolkit'

import { Card } from './Card'

export const Post = ({ title, imageSizes }) => (
  <div
    css={{
      maxWidth: 800,
      margin: '30px auto',
    }}
  >
    <Card title={title} imageSizes={imageSizes} />
  </div>
)
