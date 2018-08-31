import React from 'react'

import { Post } from '../components/Post'

const TwoDogs = ({ data: { twoDogs } }) => (
  <Post title="Two Dogs" imageSizes={twoDogs.childImageSharp.sizes} />
)

export const query = graphql`
  query TwoDogsQuery {
    twoDogs: file(relativePath: { eq: "two-dogs.jpg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`

export default TwoDogs
