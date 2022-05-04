import { graphql } from 'react-relay'

export default graphql`
  query repositoryQuery {
    repository(owner: "sugiyamaryota" name: "next-template-2022") {
      name
    }
  }
`