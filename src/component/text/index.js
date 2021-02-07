import React from 'react';
import { Container, Title, SubTitle, Break } from './text';

export default function Text({ children, ...rest }) {
    return (<Container {...rest}>{children}</Container>)
}

Text.Title = function TextTitle({ children, ...rest }) {
    return <Title {...rest}>{children}</Title>
}

Text.SubTitle = function TextSubTitle({ children, ...rest }) {
    return <SubTitle {...rest}>{children}</SubTitle>
}

Text.Break = function TextBreak({ children, ...rest }) {
    return <Break {...rest}>{children}</Break>
}