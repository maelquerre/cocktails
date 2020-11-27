import { StatusBar } from 'expo-status-bar'
import 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import FavoritesScreen from './screens/FavoritesScreen'
import HomeScreen from './screens/HomeScreen'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Cocktail',
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarLabel: 'Favorites',
          }}
        />
      </Tab.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  )
}
