import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { 
    Container, 
    Header,
    Title, 
    Icon,
    Amount,
    LastTransaction,
} from './styles';

interface Props extends TouchableOpacityProps {
    title: string;
    type: 'up' | 'down' | 'total';
    amount: number;
    lastTransaction: string;
}

const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign',
}

export function ResumeCards({ title, type, amount, lastTransaction, ...rest } : Props) {
    return (
        <Container
            activeOpacity={0.3}
            type={type}
            {...rest}
        >
            <Header>
                <Title type={type} >{title}</Title>
                
                <Icon
                    name={icon[type]}
                    type={type}
                />
            </Header>

            <Amount type={type} >
                {amount.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                })}
            </Amount>
            
            <LastTransaction type={type} >
                {lastTransaction}
            </LastTransaction>

        </Container>
    )
}