import React from 'react';
import {
    ButtonSpace,
    ButtonText
} from './styles';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
    title: string;
}

export function Button({ title, ...rest } : Props) {
    return (
        <ButtonSpace {...rest} >
            <ButtonText>{title}</ButtonText>
        </ButtonSpace>
    )
}