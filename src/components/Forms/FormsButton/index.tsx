import React from 'react';
import {
    Button,
    Icon,
    Title,
} from './styles';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
    type: 'Income' | 'Outcome';
    icon: string;
    title: string;
    isActive: boolean;
}

export function FormsButton({ icon, title, type = 'Income', isActive, ...rest } : Props) {
    return (
        <Button
            {...rest}
            isActive={isActive}
            type={type}
        >
            <Icon 
                name={icon} 
                type={type}
            />
            <Title>{title}</Title>
        </Button>
    )
}