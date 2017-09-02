import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';

import styles from './styles';

export default class JobDetail extends component {
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

