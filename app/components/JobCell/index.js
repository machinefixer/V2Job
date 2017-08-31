import React, { Component, PropTypes } from 'react';
import {
    View,
    TouchableHighlight,
    Text,
} from 'react-native';

import { Avatar, Badge } from 'react-native-elements';

import styles from './styles';

export default class JobCell extends Component {
    static propTypes = {
        avatarImageURL: PropTypes.string.isRequired,
        authorName: PropTypes.string.isRequired,
        jobTitle: PropTypes.string.isRequired,
        replyCount: PropTypes.string.isRequired,
        publishTime: PropTypes.string.isRequired,
    };

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <View style={styles.cellContainer}>
                <TouchableHighlight style={{flex:1}} onPress={ () => console.log("JobCell clicked.") } underlayColor={ '#D3D3D3' }>
                    <View style={styles.contentContainer}>
                        <View style={styles.avatarContainer}>
                            <Avatar small
                                    rounded
                                    source={{uri: this.props.avatarImageURL }}
                                    onPress={ () => console.log("JobCell avatar image clicked.") }
                                    activeOpacity={0.7}
                            />
                        </View>
                        <View style={styles.cellCenterContainer}>
                            <Text style={ styles.jobTitleTextView }>
                                {this.props.jobTitle}
                            </Text>

                            <Text style={ styles.authorNameTextView}>
                                {this.props.authorName}
                            </Text>
                        </View>
                        <View style={styles.badgeContainer}>
                            <Badge value={this.props.replyCount}
                                containerStyle={{backgroundColor: '#AAB0C6'}}
                                textStyle={{color:'#FFF', fontSize: 12, fontWeight: 'bold'}}
                            />
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}