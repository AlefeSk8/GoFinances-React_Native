import React, { useState, useCallback, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { ScrollView, FlatList, } from 'react-native';
import { 
    Container, 
    Header,
    Content,
    Photo,
    UserInfo,
    UserGreetings,
    UserName,
    LogoutButton,
    Icon,
    Highlight,
    Section,
    SectionTitle,
} from './styles';

import { ResumeCards } from '../../components/ResumeCards';
import { TransactionCard } from '../../components/TransactionCard';
import { Loading } from '../../components/Loading';

import { getTransactions } from '../../storage/transaction/getTransactions';
import { transactionStorageDTO } from '../../storage/transaction/transactionStorageDTO';
import { transactionRemove } from '../../storage/transaction/transactionRemove';

export function Dashboard(){
    const [transactions, setTransactions] = useState<transactionStorageDTO[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [resumeCardData, setResumeCardData] = useState({
        incomeTotal: 0,
        outcomeTotal: 0,
        total: 0,
        date: {
            lastIncome: 'não há nenhuma transação aqui.',
            lastOutcome: 'não há nenhuma transação aqui.',
            lastTotal: 'não há nenhuma transação aqui.',
        },
    });

    let incomeTotal = 0;
    let outcomeTotal = 0;
    let total = 0;
    let date = {
        lastIncome: '',
        lastOutcome: '',
        lastTotal: '',
    };

    async function fetchTransactions() {
        try {
            setIsLoading(true);
            const data = await getTransactions();
            setTransactions(data);
            
            //atualiza os cards de Resumo
            incomeTotal = 0;
            outcomeTotal = 0;
            data.map((transaction: transactionStorageDTO) => {
                if (transaction.type === 'Income') {
                    incomeTotal += Number(transaction.amount);
                    date.lastIncome = `Última entrada dia ${new Date(Number(transaction.id)).getDate()} de ${new Date(Number(transaction.id)).toLocaleString('pt-BR', {month: 'long'})}`;
                     
                } else {
                    outcomeTotal += Number(transaction.amount);
                    date.lastOutcome = `Última saída dia ${new Date(Number(transaction.id)).getDate()} de ${new Date(Number(transaction.id)).toLocaleString('pt-BR', {month: 'long'})}`;
                };
                date.lastTotal = `${Intl.DateTimeFormat('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                }).format(new Date(transaction.date))}/${new Date(transaction.date).getUTCFullYear()}`;
            }),
            
            total = incomeTotal - outcomeTotal;
            const cardData = {incomeTotal, outcomeTotal, total, date};
            setResumeCardData(cardData);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            throw error;
        };
    }

    //async function Remove() { const dataRemove = await transactionRemove(); setTransactions(dataRemove); }

    useFocusEffect(useCallback(() => {
        fetchTransactions();
    }, []));

    return (
        <Container>
                <Content>
                    <Header>
                        <Photo
                            source={{ uri: 'https://avatars.githubusercontent.com/u/112202946?v=4' }}
                        />
                        <UserInfo>
                            <UserGreetings>
                                Olá
                            </UserGreetings>
                            <UserName>
                                Álefe
                            </UserName>
                        </UserInfo>
                        <LogoutButton
                            onPress={() => {}} //Remove() 
                        >
                            <Icon
                                name='power'
                            />
                        </LogoutButton>
                    </Header>

                    <Highlight>
                        {!isLoading ?
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            >
                                <ResumeCards
                                    title="Entradas"
                                    type='up'
                                    amount={resumeCardData.incomeTotal}
                                    lastTransaction={resumeCardData.date.lastIncome}
                                    onPress={() => {}}
                                />
                                <ResumeCards
                                    title="Saídas"
                                    type='down'
                                    amount={resumeCardData.outcomeTotal}
                                    lastTransaction={resumeCardData.date.lastOutcome}
                                />
                                <ResumeCards
                                    title="Total"
                                    type='total'
                                    amount={resumeCardData.total}
                                    lastTransaction={`01 a ${resumeCardData.date.lastTotal}`}
                                />
                            </ScrollView>
                        : <Loading /> }
                    </Highlight>

                    <Section>
                        <SectionTitle>Listagem</SectionTitle>
                        {!isLoading ?
                            <FlatList
                                style={{ marginBottom: 70 }}
                                data={transactions}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => (
                                    <TransactionCard data={item} />
                                )}
                                showsVerticalScrollIndicator={false}
                            />
                        : <Loading/> }
                    </Section>
                </Content>
        </Container>
    )
}