import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import * as GithubContext from './github-client.js'
import { IsolateContainer, LoadingMessagePage } from './shared/pattern'
import { ErrorBoundary } from 'react-error-boundary'
import {Router} from '@reach/router'
import loadable from 'react-loadable'

const fallbackCompoenent = ({error}) => {
    return (
        <IsolateContainer>
            <p>There was an error</p>
            <pre>{JSON.stringify(error, null, 2)}</pre>
        </IsolateContainer>
    )
}

const LoadingFallback = ({error, }) => {
    if(error) {
        throw error
    }

    return <LoadingMessagePage>Loading Application</LoadingMessagePage>
}

const Home = loadable({
    loader: () => import('./screens/home'),
    loading: LoadingFallback
})

const User = loadable({
    loader: () => import('./screens/user'),
    loading: LoadingFallback
})


function App() {
    return (
        <div>
         <GithubContext.Provider>
            <ErrorBoundary FallbackComponent={fallbackCompoenent}>
                <Router>
                    <Home path="/"></Home>
                    <User path="/:username"></User>
                </Router>
            </ErrorBoundary>
         </GithubContext.Provider>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
