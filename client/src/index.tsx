import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Dashboard from './containers/Dashboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Dashboard />,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
