import React from 'react'
import { Container, Copyright } from './footer';

export default function Footer({ children, ...rest }) {
    return <Container {...rest}>{children}</Container>
}

Footer.Copyright = function FooterCopyright({ children, ...rest }) {
    return <Copyright {...rest}>{children}</Copyright>
}
