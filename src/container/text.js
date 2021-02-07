import React from 'react'
import Text from '../component/text/index';

export default function TextContainer({ children }) {
    return (
        <Text>
            <Text.Title>Education is the movement from darkness to light.</Text.Title>
            <Text.Break />
            <Text.SubTitle>The only person who is educated is the one who has learned how to learn …and change.</Text.SubTitle>
            <Text.Break />
        </Text>
    )
}