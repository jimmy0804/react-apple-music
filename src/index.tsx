import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';

const renderApp = () => ReactDOM.render(
  <App />, 
  document.getElementById('root') as HTMLElement
)

// if (process.env.NODE_ENV !== 'production' && module.hot) {
//   module.hot.accept('./pages/App', renderApp)
// }

renderApp()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
