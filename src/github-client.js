/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from "react";
import netlify from 'netlify-auth-providers'
import { PrimaryButton } from './shared/pattern'

async function authWithGithub () {
    return new Promise((resolve, reject)=> {
        const authenticator = new netlify({

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

    login = async () => {
      const data = await authWithGithub().catch(error => {
        console.log('Oh no', error)
      })  
      console.log(data)
    }

    render() {
        return (
            <div
                css={{
                    marginTop: 250,
                    display: 'flex',
                    justifyContent: 'center'
                }}>
            <div>
                <PrimaryButton onClick={this.login}>
                    Login with Github
                </PrimaryButton>
            </div>
            </div>
        )
    }
}

export {
    GithubClientProvider as Provider
}