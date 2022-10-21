import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { Input } from '../Input';
import { TextInputProps } from 'react-native';
import { Container, Error } from './styles';

type Props = TextInputProps & {
    control: Control;
    name: string;
    [error: string]: any;
}

export function InputForm({ control, name, error, ...rest } : Props) {
    return (
        <Container>
            <Controller
                control={control}
                render={({ field: { onChange, value}}) => (
                    <Input
                        onChangeText={onChange}
                        value={value}
                        {...rest} 
                    />
                )}
                name={name}
            />
            {error && <Error>{error}</Error>}
        </Container>
    )
}