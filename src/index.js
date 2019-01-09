import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import * as GithubContext from './github-client.js'
import { IsolateContainer } from './shared/pattern'
import { ErrorBoundary } from 'react-error-boundary'
import {Router} from '@reach/router'

const fallbackCompoenent = ({error}) => {
    return (
        <IsolateContainer>
            <p>There was an error</p>
            <pre>{JSON.stringify(error, null, 2)}</pre>
        </IsolateContainer>
    )
}

const Home = lodable({
    
})
function App() {
    return (
        <div>
         <GithubContext.Provider>
            <ErrorBoundary FallbackComponent={fallbackCompoenent}>
                <Router>
                    <Home path="/"></Home>
                </Router>
            </ErrorBoundary>
         </GithubContext.Provider>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
