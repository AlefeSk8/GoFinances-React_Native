import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from '../screens/Dashboard';
import { Register } from '../screens/Register';
import { Resume } from '../screens/Resume';
import { useTheme } from 'styled-components';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator()
 
 export function AppRoutes() {
    const theme = useTheme();

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.COLORS.SECONDARY,
                tabBarInactiveTintColor: theme.COLORS.TEXT,
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {
                    height: 80,
                    paddingVertical: Platform.OS === 'ios' ? 5 : 0,
                }
            }}
        >
            <Screen
                name='Listagem'
                component={Dashboard}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name='format-list-bulleted'
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />

            <Screen
                name='Cadastrar'
                component={Register}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name='attach-money'
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />

            <Screen
                name='Resumo'
                component={Resume}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name='pie-chart'
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
        </Navigator>
    );
 }