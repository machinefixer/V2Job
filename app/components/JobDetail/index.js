import React, { Component, PropTypes } from 'react';
import {
    ScrollView,
    View,
    Text,
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import Markdown from 'react-native-simple-markdown';
import { Icon } from 'react-native-elements';

import styles from './styles';
import V2EX from '../../util/api';

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

    constructor (props) {
        super(props);
        this.state ={
            markdownContent: '',
            jobTitle: '',
            authorName: '',
            topicID: '',
        }
    }

    componentDidMount() {
        const { params } = this.props.navigation.state;
        this.setState({
            jobTitle: params.jobTitle,
            authorName: params.authorName,
            topicID: params.topicID,
        });

        this._refreshData(params.topicID, (content) => {
            this.setState({
                markdownContent: content,
            });
        });
    }

    _refreshData = (topicID, callback) => {
        V2EX.getTopicDetailByID(topicID, callback);
    };

    render () {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Text style={ styles.jobTitleTextView }>
                        {this.state.jobTitle}
                    </Text>
                    <View style={ styles.infoContainer }>
                        <Text style={ styles.authorNameTextView }>
                            {this.state.authorName}
                        </Text>
                        <Text style={ styles.infoTextView }>
                        </Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <Markdown>
                        {this.state.markdownContent}
                    </Markdown>
                </View>
            </ScrollView>
        )
    }
}

