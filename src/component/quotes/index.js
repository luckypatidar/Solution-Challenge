import React from 'react'
import { Container, Inner, Title, SubTitle, Item, Box, Image } from './quotes';

export default function Quotes({ children, direction = "row", ...rest }) {
    return (
        <Item {...rest}>
            <Inner direction={direction}>
                {children}
            </Inner>
        </Item>
    )
}

Quotes.Container = function QuotesContainer({ children, ...rest }) {
    return <Container {...rest}>{children}</Container>;
}

Quotes.Title = function QuotesTitle({ children, ...rest }) {
    return <Title {...rest}>{children}</Title>;
}

Quotes.SubTitle = function QuotesSubTitle({ children, ...rest }) {
    return <SubTitle {...rest}>{children}</SubTitle>
}


Quotes.Box = function QuotesBox({ children, ...rest }) {
    return <Box {...rest}>{children}</Box>;
}

Quotes.Image = function QuotesImage({ ...rest }) {
    return <Image {...rest} />
}