import React from 'react'

import { Post } from '../components/Post'

const BigDog = ({ data: { bigDog } }) => (
  <Post title="Big Dog" imageSizes={bigDog.childImageSharp.sizes} />
)

export const query = graphql`
  query BigDogQuery {
    bigDog: file(relativePath: { eq: "big-dog.jpg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`

export default BigDog
