import { SafeAreaView, StatusBar, View } from 'react-native';
import Cesta from './src/telas/Cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold, Montserrat_400Regular_Italic } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import mock from './src/mocks/cesta';

export default function App() {
  const [fonteCarregada] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold,
    'MontserratItalic': Montserrat_400Regular_Italic
  });

  if (!fonteCarregada) {
    return <AppLoading/>;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="default" />
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}

