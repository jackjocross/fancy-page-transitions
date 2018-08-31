import React from 'react'

import { Post } from '../components/Post'

const SmallDog = ({ data: { smallDog } }) => (
  <Post title="Small Dog" imageSizes={smallDog.childImageSharp.sizes} />
)

export const query = graphql`
  query SmallDogQuery {
    smallDog: file(relativePath: { eq: "small-dog.jpg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`

export default SmallDog
