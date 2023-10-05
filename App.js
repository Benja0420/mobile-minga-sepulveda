import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './view/Register.jsx';
import Main from './view/Main.jsx';
import Login from './view/Login.jsx';
import Mangas from './view/Mangas.jsx';
import { Provider } from 'react-redux/es';
import store from './redux/store.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

const Stack = createNativeStackNavigator();

export default app = () => {
  const [initialRoute, setInitialRoute] = useState('Main');

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token !== null) {
          setInitialRoute('Mangas');
        }
      } catch (error) {
        console.log(error);
      }
    }

    checkToken();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={initialRoute}>
          <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
          <Stack.Screen name="Mangas" component={Mangas} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}