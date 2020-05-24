import React, { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from 'react-native-vector-icons'

import Home from '../screens/Home'
import TodoListScreen from '../screens/TodoListScreen'
import Photos from '../screens/Photos'

const Tab = createBottomTabNavigator()

const BottomTabs: FC = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                )
            }}
        />
        <Tab.Screen
            name="TodoList"
            component={TodoListScreen}
            options={{
                tabBarLabel: 'TodoList',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                )
            }}
        />
        <Tab.Screen
            name="Photos"
            component={Photos}
            options={{
                tabBarLabel: 'Photos',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="image-multiple" color={color} size={size} />
                )
            }}
        />
        </Tab.Navigator>
      )
}

export default BottomTabs
