import { NavigationContainer } from '@react-navigation/native'

import HomeScreen from '../../screens/Home';
import LoginScreen from '../../screens/Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ tabBarLabel: '홈' }}
                />
                <Tab.Screen
                    name="Loign"
                    component={LoginScreen}
                    options={{ tabBarLabel: '로그인' }}
                />
                </Tab.Navigator>
        </NavigationContainer>
    )
}
export default Navigation;