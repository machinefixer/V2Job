/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import JobList from "./app/components/JobList";
import JobDetail from "./app/components/JobDetail";

export default class V2Job extends Component {
  render() {
    return (
        <Stack/>
    );
  }
}

const Stack = StackNavigator({
    JobList: { screen: JobList },
    JobDetail: { screen: JobDetail }
});

AppRegistry.registerComponent('V2Job', () => V2Job);

