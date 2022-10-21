import React, { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useTheme } from 'styled-components';
import { getTransactions } from "../../storage/transaction/getTransactions";
import { Header } from "../../components/Header";
import { HistoryCard } from "../../components/HistoryCard";
import { Loading } from "../../components/Loading";
import { categories } from "../../utils/categories";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { 
    Container,
    Content,
    ChartContainer, 
    MonthSelect,
    MonthSelectButton,
    SelectIcon,
    Month,
} from './styles';
import { VictoryPie } from 'victory-native';
import { addMonths, subMonths, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface CategoryData {
    key: string;
    name: string;
    total: number;
    color: string;
    percent: string;
}

export function Resume() {
    const [ isLoading, setIsLoading ] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [ totalByCategories, setTotalByCategories ] = useState<CategoryData[]>([]);
    const theme = useTheme();

    function handleDateChange(action: 'next' | 'prev'): void {
        if (action === 'next') {
            setSelectedDate(addMonths(selectedDate, 1));
        } else {
            setSelectedDate(subMonths(selectedDate, 1));
        }
    }

    async function loadData() {
        try {
            setIsLoading(true);
            const data = await getTransactions();
            const outcomes = data.filter(transaction => 
                transaction.type === 'Outcome' &&
                new Date(transaction.date).getMonth() === selectedDate.getMonth() &&
                new Date(transaction.date).getFullYear() === selectedDate.getFullYear()
            );
            const outcomesTotal =  outcomes
            .reduce((acumullator: number, outcome) => {
                return acumullator + outcome.amount;
            }, 0);

            const totalByCategory = [] as Array<CategoryData>;

            categories.forEach(category => {
                let categorySum = 0;

                outcomes.forEach(outcome => {
                    if (outcome.category === category.key) {
                        categorySum += outcome.amount
                    };
                });

                if (categorySum > 0) {
                    const percent = `${(categorySum / outcomesTotal * 100).toFixed(0)}%`;
                    totalByCategory.push({
                        key: category.key,
                        name: category.name,
                        total: categorySum,
                        color: category.color,
                        percent
                    });
                };
            });
                
            setTotalByCategories(totalByCategory);
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        };
    };

    useFocusEffect(useCallback(() => {
        loadData();
    }, [selectedDate]));

    return (
        <Container>
            <Header
                title="Resumo por categoria"
            />

            { !isLoading ?
                <Content
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: useBottomTabBarHeight(),
                    }}
                >
                    <MonthSelect>
                        <MonthSelectButton
                            onPress={() => handleDateChange('prev')}
                        >
                            <SelectIcon name='chevron-left'/>
                        </MonthSelectButton>

                        <Month>
                            { format(selectedDate, 'MMMM, yyyy', {locale: ptBR}) }
                        </Month>

                        <MonthSelectButton
                            onPress={() => handleDateChange('next')}
                        >
                            <SelectIcon name='chevron-right'/>
                        </MonthSelectButton>
                    </MonthSelect>

                    <ChartContainer>
                        <VictoryPie
                            data={totalByCategories}
                            colorScale={totalByCategories.map(
                                category => category.color
                            )}
                            style={{
                                labels: {  
                                    fontSize: 16,
                                    fontFamily: 'Arial',
                                    fontWeight: 'bold',
                                    fill: theme.COLORS.SHAPE,
                                }
                            }}
                            labelRadius={60}
                            x='percent'
                            y='total'
                        />
                    </ChartContainer>

                    {
                        totalByCategories.map(item => (
                            <HistoryCard
                                key={item.key}
                                title={item.name}
                                amount={item.total}
                                color={item.color}
                            />
                        ))
                    }
                </Content>
            : <Loading /> }
        </Container>
    )
}
