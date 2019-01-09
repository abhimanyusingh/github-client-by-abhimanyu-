import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from './github-client.js'


function App() {
    return (
        <div>
         <Provider/>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
