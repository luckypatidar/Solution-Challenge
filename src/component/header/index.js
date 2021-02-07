import React from 'react';
import { Container, ButtonLink, Logo, Background } from '../header/header';


export default function Header({ bg = true, children, ...rest }) {
    return bg ? <Background {...rest}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...rest }) {
    return <Container {...rest}>{children}</Container>;
}

Header.ButtonLink = function HeaderButtonLink({ children, ...rest }) {
    return <ButtonLink {...rest}>{children}</ButtonLink>;
}

Header.Logo = function HeaderLogo({ ...rest }) {
    return <Logo {...rest} />
}