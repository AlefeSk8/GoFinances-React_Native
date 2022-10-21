import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { categories } from '../../utils/categories';
import { 
    Container,
    Section,
    Category,
    Icon,
    Name,
    Footer,
} from './styles';

interface Category {
    key: string;
    name: string;
}

type Props = {
    title: string;
    category: Category;
    setCategory: (category: Category) => void;
    closeSelectCategory: () => void;
}

export function CategorySelect({ 
    title, 
    category, 
    setCategory,
    closeSelectCategory 
} : Props) {

function handleCategorySelect(category: Category) {
    setCategory(category);
}
    
    return (
        <Container>
            <SafeAreaView style={{backgroundColor: '#5636D3'}} />
            <Header title='Categoria' />        
            
            <Section>
                <FlatList 
                    data={categories}
                    style={{ flex: 1, width: '100%' }}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item }) => (
                        <Category
                            onPress={() => handleCategorySelect(item)}
                            isActive={category.key === item.key}
                        >
                            <Icon name={item.icon} />
                            <Name>{item.name}</Name>
                        </Category>
                    )}
                />
            </Section>

            <Footer>
                <Button 
                    title="Selecionar"
                    onPress={closeSelectCategory}
                />
            </Footer>
        </Container>
    )
}