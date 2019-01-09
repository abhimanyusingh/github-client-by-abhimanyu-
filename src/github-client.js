/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from "react";
import netlify from 'netlify-auth-providers'
import { PrimaryButton } from './shared/pattern'
import { GraphQLClient } from 'graphql-request';
import {navigate, createHistory} from '@reach/router'

const GithubClientContext = React.createContext();
const {Provider, Consumer } = GithubClientContext;
//let history = createHistory(window)


//https://developer.github.com/v4/guides/intro-to-graphql/
async function authWithGithub () {
    return new Promise((resolve, reject)=> {
        const authenticator = new netlify({
            site_id: '795dc8d0-1786-4e5f-8516-f4a67af8b8df'
        })

        authenticator.authenticate(
            {provider: 'github', scope:'public_repo,read:org,read:user'}, 
            function(err, data) {
                if(err) {
                    reject(err)
                }

                resolve(data)
            }
        )
    })
}

class GithubClientProvider extends React.Component {
    constructor(...args) {
        super(...args)
        this.state = {error: null}
    }

    getClient = token => {
        const headers = { Authorization:  `bearer ${token}` }
        const client =  new GraphQLClient('https://api.github.com/graphql', {
            headers
        })

        return Object.assign(client, {
          login: this.login,
          logout: this.logout  
        })
    }
    logout = () => {
        window.localStorage.removeItem('github-toke')
        this.setState({client: null, error: null})
        navigate('/')
    }

    login = async () => {
      const data = await authWithGithub().catch(error => {
        console.log('Oh no', error)
      })  
      window.localStorage.setItem('github-token', data.token)
      console.log(this.getClient(data.token))
      this.setState({client: this.getClient(data.token)})
    }

    render() {
        const {client, error} = this.state;
        const {children} = this.props;
        return client ? (
            <Provider value={client}>{children}</Provider>
        ): (
            <div
                css={{
                    marginTop: 250,
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                {error ? (
                    <div>
                    <p>Oh no! There was an error.</p>
                    <pre>{JSON.stringify(error, null, 2)}</pre>
                  </div>
                 ) : (
                    <div>
                        <PrimaryButton onClick={this.login}>
                            Login with Github
                        </PrimaryButton>
                    </div>
                 )}
            </div>
        )
    }
}

export {
    GithubClientProvider as Provider,
    Consumer,
    GithubClientContext as Context

}