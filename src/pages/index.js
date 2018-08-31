import React from 'react'
import { graphql } from 'gatsby'

import { Card } from '../components/Card'

const IndexPage = ({ data: { bigDog, smallDog, twoDogs, oneDog } }) =>
  console.log({ bigDog, smallDog, twoDogs, oneDog }) || (
    <div
      css={{
        maxWidth: 800,
        margin: '30px auto',
        '@media(min-width: 700px)': {
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridGap: 10,
          gridAutoRows: 'minmax(100px, auto)',
        },
      }}
    >
      <Card
        title="Big Dog"
        to="/big-dog"
        imageSizes={bigDog.childImageSharp.sizes}
      />
      <Card
        title="Small Dog"
        to="/small-dog"
        imageSizes={smallDog.childImageSharp.sizes}
      />
      <Card
        title="Two Dogs"
        to="/two-dogs"
        imageSizes={twoDogs.childImageSharp.sizes}
      />
      <Card
        title="One Dog"
        to="/one-dog"
        imageSizes={oneDog.childImageSharp.sizes}
      />
    </div>
  )

export const query = graphql`
  query IndexQuery {
    bigDog: file(relativePath: { eq: "big-dog.jpg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes
        }
      }
    }
    smallDog: file(relativePath: { eq: "small-dog.jpg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes
        }
      }
    }
    twoDogs: file(relativePath: { eq: "two-dogs.jpg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes
        }
      }
    }
    oneDog: file(relativePath: { eq: "one-dog.jpg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`

export default IndexPage
