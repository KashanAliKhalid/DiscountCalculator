/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
    TouchableOpacity,
    Alert,
    Modal
} from 'react-native';

import Home from "./Screens/main";
import History from "./Screens/history";





const Tab = createStackNavigator();

class MyTabs extends React.Component {
    render(): React$Node {
        return (
            <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    options={{
                        headerShown:false,

                    }}
                    name="Home" component={Home}/>
                <Tab.Screen
                    options={{
                        headerShown:false,

                    }}
                    name="History" component={History}/>

            </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

export default MyTabs





