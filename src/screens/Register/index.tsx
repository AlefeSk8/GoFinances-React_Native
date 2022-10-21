import React from 'react';
import { 
    Container,
    Section,
    SectionContent,
    ButtonContent,
} from './styles';
import { 
    Modal, 
    TouchableWithoutFeedback, 
    Keyboard,
    Alert,
} from 'react-native';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Header } from '../../components/Header';
import { InputForm } from '../../components/Forms/InputForm';
import { FormsButton } from '../../components/Forms/FormsButton';
import { Button } from '../../components/Button';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';
import { CategorySelect } from '../CategorySelect';
import { addTransaction } from '../../storage/transaction/addTransaction';
import { useNavigation } from '@react-navigation/native';

interface FormData {
    [name: string]: any;
}

const schema = Yup.object().shape({
    name: Yup
    .string()
    .required("Nome é obrigatório"),
    amount: Yup
    .number()
    .transform((_value, originalValue) => Number(originalValue.replace(/,/, '.')))
    .required("Informe um valor")
    .typeError("Informe um valor númerico")
    .positive("O valor não pode ser negativo"),
});

export function Register(){
    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);
    const [category, setCategory] = useState({
        key: 'category',
        name: 'categoria',
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema)
    });

    const navigation = useNavigation();

    function handleTransactionTypeSelect(type: 'Income' | 'Outcome'){
        setTransactionType(type)
    }

    function handleOpenSelectCategoryModal() {
        setCategoryModalOpen(true);
    }
    
    function handleCloseSelectCategoryModal() {
        setCategoryModalOpen(false);
    }

    async function handleRegister(form: FormData) {
            if (!transactionType)
            return Alert.alert('Selecione o tipo da transação.');
        
            if (category.key === 'category')
            return Alert.alert('Selecione a categoria.');

            const data = {
                id: String(new Date().getTime()),
                name: form.name,
                title: form.name,
                amount: Number(form.amount),
                type: transactionType,
                category: category.key,
                date: new Date(), //`${FormattedDate}/${new Date().getUTCFullYear()}`
            };

        try {
            await addTransaction(data);

            reset();
            setTransactionType('');
            setCategory({
                key: 'category',
                name: 'categoria',
            });
            navigation.navigate('Listagem');
        } catch (error) {
            console.log(error);
            Alert.alert('Não foi possível salvar');
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header title="Cadastro"/>
                <Section>
                    <SectionContent>
                        <InputForm
                            name="name"
                            control={control}
                            placeholder="Nome"
                            autoCapitalize='sentences'
                            autoCorrect={false}
                            error={errors.name && errors.name.message}
                        />
                        <InputForm
                            name="amount"
                            control={control}
                            placeholder="Preço"
                            keyboardType='numeric'
                            error={errors.amount && errors.amount.message}
                        />
                        <ButtonContent>
                            <FormsButton
                                type='Income'
                                title="Entrada"
                                icon='arrow-up-circle'
                                onPress={() => handleTransactionTypeSelect('Income')}
                                isActive={transactionType === 'Income'}
                            />
                            <FormsButton
                                type='Outcome'
                                title="Saída"
                                icon='arrow-down-circle'
                                onPress={() => handleTransactionTypeSelect('Outcome')}
                                isActive={transactionType === 'Outcome'}
                            />
                        </ButtonContent>
                        <CategorySelectButton
                            title={category.name}
                            onPress={handleOpenSelectCategoryModal}
                        />
                    </SectionContent>
                    <Button
                        title="Enviar"
                        onPress={handleSubmit(handleRegister)}
                    />
                </Section>

                <Modal visible={categoryModalOpen} >
                    <CategorySelect
                        title='string'
                        category={category}
                        setCategory={setCategory}
                        closeSelectCategory={handleCloseSelectCategoryModal}
                    />
                </Modal>
            </Container>
        </TouchableWithoutFeedback>
    )
}