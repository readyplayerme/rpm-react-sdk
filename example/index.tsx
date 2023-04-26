import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReadyPlayerMe } from '../.';

const App = () => {
  return (
    <div>
      <ReadyPlayerMe subdomain='demo' />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
