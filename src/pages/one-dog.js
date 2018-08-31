import React from 'react'

import { Post } from '../components/Post'

const OneDog = ({ data: { oneDog } }) => (
  <Post title="One Dog" imageSizes={oneDog.childImageSharp.sizes} />
)

export const query = graphql`
  query OneDogQuery {
    oneDog: file(relativePath: { eq: "one-dog.jpg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`

export default OneDog
