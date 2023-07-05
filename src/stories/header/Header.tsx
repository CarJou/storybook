import React from 'react';

import './header.css';
import { ButtonTest } from '../button/ButtonTest';
import Image from "next/image";
import HeartFill from "../assets/heart-fill.svg";

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header>
    <div className="storybook-header">
      <div className='storybook-namhe-header'>
      <Image
          src={HeartFill}
          width={20}
          height={20}
          alt="Heart"
        />
        <h1>Acme</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <ButtonTest size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <ButtonTest size="small" onClick={onLogin} label="Log in" />
            <ButtonTest primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);
