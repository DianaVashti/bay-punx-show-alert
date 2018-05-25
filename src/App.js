import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import FlyerList from './components/FlyerList';

export default class App extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="What We Do Is Secret" />
        <FlyerList />
      </View>
    );
  }
}
