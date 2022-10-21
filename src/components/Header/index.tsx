import React from 'react';
import {
    Container,
    HeaderCategory,
    Title,
} from './styles';

type Props = {
    title: string;
}

export function Header({ title } : Props) {
    return (
        <Container>
            <HeaderCategory>
                <Title>{title}</Title>
            </HeaderCategory>
        </Container>
    )
}