import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Details from '../pages/Details';

const Route = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Route.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#f0874c' },
      }}
      initialRouteName="SignIn"
    >
      <Route.Screen name="SignIn" component={SignIn} />
      <Route.Screen name="SignUp" component={SignUp} />
      <Route.Screen name="Details" component={Details} />
      <Route.Screen name="Home" component={Home} />
    </Route.Navigator>
  );
};

export default Routes;
