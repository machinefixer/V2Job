/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { testDom } from "./app/util/parser";
import JobList from "./app/components/JobList";

export default class V2Job extends Component {
  render() {
    return (
      <View style={styles.container}>
          <JobList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2E2E2',
  },
});

AppRegistry.registerComponent('V2Job', () => V2Job);
// testDom();

