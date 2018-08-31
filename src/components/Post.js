import React from 'react'

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
