import React from 'react'
import Header from '../component/header/index';
import logo from '../logo.png';

export default function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo alt="Education" src={logo} />
                <Header.ButtonLink>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}