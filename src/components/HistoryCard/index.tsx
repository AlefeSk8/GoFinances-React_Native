import React from 'react';
import {
    Container,
    Title,
    Amount,
} from './styles';

interface Props {
    title: string;
    amount: number;
    color: string;
}

export function HistoryCard({ title, amount, color } : Props) {
    return (
        <Container color={color}>
            <Title>{title}</Title>
            <Amount>
                {amount.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                })}
            </Amount>
        </Container>
    );
}