import React from 'react';
import logo from './logo.svg';
import './App.css';

import Amplify from 'aws-amplify';
import config from './aws-exports';

import { withAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react';

Amplify.configure(config);

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <AmplifySignIn />
    </div>
  );
}

export default withAuthenticator(App)
