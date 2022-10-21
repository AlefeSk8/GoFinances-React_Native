import React from 'react';
import {
    Container,
    Header,
    Title,
    Amount,
    Footer,
    Icon,
    Category,
    DataOfTransaction,
}from './styles';
import { transactionStorageDTO } from '../../storage/transaction/transactionStorageDTO';
import { categories } from '../../utils/categories';

type Props = {
    data: transactionStorageDTO
}

export function TransactionCard({ data } : Props){
    const [ category ] = categories.filter(
        item => item.key === data.category
    );
    return (
        <Container>
            <Header>
                <Title>{data.title}</Title>
                <Amount type={data.type} >
                    { data.type === 'Outcome' && '- ' }
                    {data.amount.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    })}
                </Amount>
            </Header>


            <Footer>
                <Icon 
                    name={category.icon}
                />
                <Category>
                    {category.name}
                </Category>

                <DataOfTransaction>
                    {data.date}
                </DataOfTransaction>
            </Footer>
        </Container>
    )
}