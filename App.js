import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: StackNavigator({
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: {
            screen: StackNavigator({
              review: { screen: ReviewScreen },
              settings: { screen: SettingsScreen }
            })
          }
        }, {
            tabBarPosition: 'bottom',
            animationEnabled: false,
            swipeEnabled: false,
            lazyLoad: false,
            tabBarOptions: {
              activeTintColor: '#e91e63'
            }
          })
      }
    }, {
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
        lazyLoad: false,
        tabBarOptions: {
          activeTintColor: '#e91e63'
        }
      });

    return (
      <View style={styles.container}>
        <MainNavigator />
        <Text>Hi Madhur</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
