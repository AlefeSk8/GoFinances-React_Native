import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';

import { Loading } from './src/components/Loading';

import theme from './src/global/styles/theme';
import { ThemeProvider } from 'styled-components/native';

import { 
  useFonts, 
  Poppins_400Regular, 
  Poppins_500Medium, 
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import 'intl'; //Apenas para funcionar as formatações no android também
import 'intl/locale-data/jsonp/pt-BR';//explicação acima.


export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular, 
    Poppins_500Medium, 
    Poppins_700Bold,
  });

    return (
      <ThemeProvider theme={theme}>
        <SafeAreaView style={{backgroundColor: theme.COLORS.PRIMARY}} />
        <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
          translucent
        />
  
        {fontsLoaded ?
          <NavigationContainer>
            <AppRoutes />
          </NavigationContainer> : <Loading />
        }
  
      </ThemeProvider>  
    );
  
}

  

