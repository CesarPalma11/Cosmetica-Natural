import React from 'react';
import './Button.css';
import { LoginButton } from './Components/Login';
import { LogoutButton } from './Components/Logout';
import { Profile } from './Components/Profile';
import { useAuth0 } from '@auth0/auth0-react';



export function Button() {
  const {isAuthenticated} = useAuth0();

  return (
      <>
      {isAuthenticated ? <>
        <Profile />
      <LogoutButton />
      </>
      :
      <LoginButton />
      }        
   </>
  );
      
}