import React, { Component, PropTypes } from 'react';
import {
    View,
    TouchableHighlight,
    Text,
    Image,
} from 'react-native';

import { Avatar, Badge } from 'react-native-elements';
// import { CachedImage } from 'react-native-img-cache';

import styles from './styles';

export default class JobCell extends Component {
    static propTypes = {
        avatarImageURL: PropTypes.string.isRequired,
        authorName: PropTypes.string.isRequired,
        jobTitle: PropTypes.string.isRequired,
        replyCount: PropTypes.string.isRequired,
        lastCommentTime: PropTypes.string.isRequired,
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
                            {/*<Avatar small*/}
                                    {/*rounded*/}
                                    {/*source={{uri: this.props.avatarImageURL }}*/}
                                    {/*onPress={ () => console.log("JobCell avatar image clicked.") }*/}
                                    {/*activeOpacity={0.7}*/}
                            {/*/>*/}
                            <Image
                                source={{
                                    uri: this.props.avatarImageURL,
                                    cache: 'default',
                                }}
                                style={{height: 45, width: 45, marginTop: 4, borderRadius: 22.5}}
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
                                textStyle={{color:'#FFF', fontSize: 11, fontWeight: 'bold'}}
                            />
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}