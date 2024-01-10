import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider domain='dev-qxxzh7bi0kte6nq6.us.auth0.com'
     clientId="Rqvcb9SJCYhtyI411bomcCWHudnAW2MK"
     authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
      <App/>
    </Auth0Provider>
  </React.StrictMode>
);
