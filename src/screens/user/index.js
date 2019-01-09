

import React from 'react'
import PropTypes from 'prop-types'
import Query from './components/query'
import { 
    IsolateContainer, 
    LoadingMessagePage, 
    PrimaryButton,
    ButtonLink,
    Text,
} from '../../shared/pattern';
import {Context as GithubContext} from '../../github-client'
import {Container, Row, Column} from '../../shared/layout'
import Profile from  './components/profile';
import RepoFilter from './components/repo-filter'
import UserContext from './user-context'

const gql = String.raw

const userQuery = gql`
query getUserData($username: String!) {
  user(login: $username) {
    name
    login
    avatarUrl
    followers {
      totalCount
    }
    following {
      totalCount
    }
    repositories(
      privacy: PUBLIC
      first: 100
      isFork: false
      ownerAffiliations: [COLLABORATOR, OWNER]
      orderBy: {field: PUSHED_AT, direction: DESC}
    ) {
      totalCount
      edges {
        node {
          id
          name
          description
          url
          pushedAt
          stargazers {
            totalCount
          }
          forkCount
          languages(first: 1) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
    organizations(first: 100) {
      edges {
        node {
          avatarUrl
          id
          login
          url
        }
      }
    }
  }
}
`

function normalizeUserData () {

}

class User extends React.Component {
    static propTypes = {
        username: PropTypes.string,
    }

    static contextType = GithubContext


    render() {
        const { username } = this.props;
        return (
            <Query
                query={userQuery}
                variables={username}
                normalize={normalizeUserData}
            >   

                {
                    ({fetching, data, error}) => 
                    error ? (
                        <IsolateContainer>
                            <p>There was an error loading the data</p>
                            <pre>{JSON.stringify(error, undefined, 2)}</pre>
                        </IsolateContainer>
                    ) : fetching ? (
                        <LoadingMessagePage>Loading data for {username}</LoadingMessagePage>
                    ) : data ? (
                            <UserContext.Provider value={data}>
                                <Container>
                                    <Row>
                                        <Column width="3">
                                            <Profile />
                                            <PrimaryButton
                                                css={{

                                                }}
                                            >
                                            Logout
                                            </PrimaryButton>
                                            <ButtonLink css={{}}>
                                                Try another
                                            </ButtonLink>
                                        </Column>
                                        <Column width="9">
                                            <Text size="subheading">Repositories</Text>
                                            <RepoFilter>
                                            </RepoFilter>
                                        </Column>
                                    </Row>
                                </Container>
                            </UserContext.Provider>
                        ): (
                            <IsolateContainer>somthing else</IsolateContainer>
                        )
                }
            </Query>
        )
    }
}

export default User;