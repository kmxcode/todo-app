import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import BottomTabs from './components/BottomNavigation'
import { StatusBar } from 'react-native'

import Colors from './constans/Colors'

const darkTheme = {
  dark: true,
  colors: {
    primary: Colors.white,
    background: Colors.black,
    card: Colors.codGray,
    text: Colors.doveGray,
    border: Colors.codGray
  }
}

interface IMainProps { }

const Main: FC<IMainProps> = props => {
    return (
    <NavigationContainer theme={darkTheme}>
      <StatusBar barStyle='light-content' />
      <BottomTabs />
    </NavigationContainer>
    )
}

export default Main