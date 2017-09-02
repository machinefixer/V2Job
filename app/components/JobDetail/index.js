import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';

import { NavigationActions } from 'react-navigation';

import styles from './styles';
import { Icon } from 'react-native-elements';

export default class JobDetail extends Component {
    static navigationOptions = ({ navigation }) => {
        const { navigate } = navigation;
        return {
            title: "工作详情",
            headerTintColor: "#FFF",
            headerBackTitle: "null",
            headerStyle: { backgroundColor: '#333344' },
            headerLeft: <Icon name="chevron-left"
                              type="material-community"
                              color="#FFF"
                              size={35}
                              iconStyle={{marginLeft: 8}}
                              onPress={ () => {
                                  navigation.dispatch(NavigationActions.back())
                              }}
                              underlayColor="rgba(255, 255, 255, 0)"/>,
        };
    };

    static propTyps = {
        avatarImageURL: PropTypes.string.isRequired,
        authorName: PropTypes.string.isRequired,
    };

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                </View>
                <View style={styles.content}>
                </View>
            </View>

        )
    }
}

