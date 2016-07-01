/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

var Index = require('./code/index');

class reactnative1 extends Component {
  render() {
    return (
      <Index></Index>
    );
  }
}

AppRegistry.registerComponent('reactnative1', () => reactnative1);
