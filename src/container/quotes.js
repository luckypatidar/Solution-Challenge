import React from 'react';
import quotesData from '../data/quotesData.json';
import Quotes from '../component/quotes/index';

export default function QuotesContainer() {
    return (
        <Quotes.Container>
            {quotesData.map((item) => (
                <Quotes key={item.id} direction={item.direction} >
                    <Quotes.Box>
                        <Quotes.Title>{item.title}</Quotes.Title>
                        <Quotes.SubTitle>{item.subTitle}</Quotes.SubTitle>
                    </Quotes.Box>
                    <Quotes.Box>
                        <Quotes.Image src={item.image} alt={item.alt} />
                    </Quotes.Box>
                </Quotes>
            ))}
        </Quotes.Container>
    )
}