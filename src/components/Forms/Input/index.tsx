import React from 'react';
import { FormsInput } from './styles';
import { TextInputProps } from 'react-native';

type Props = TextInputProps;

export function Input({ ...rest } : Props) {
    return (
        <FormsInput 
            {...rest}
        />
    )
}