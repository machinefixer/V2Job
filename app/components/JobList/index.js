import React, { Component }from 'react';
import {
    AsyncStorage,
    FlatList,
    View,
} from 'react-native';

import { Header } from 'react-native-elements';
import { Icon } from 'react-native-elements';

import JobCell from '../JobCell';
import styles from './styles';
import {parseJobCell, testDom} from '../../util/parser';

export default class JobList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            refreshing: false,
            page: 1,
            jobArray: [],
        }
    }

    componentDidMount() {
        this._makeRemoteRequest();
    }

    _makeRemoteRequest = () => {
        // const { page } = this.state;
        parseJobCell(jobs => {
            this.setState({
                jobArray: jobs,
            });
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Header rightComponent={
                    <Icon name="filter"
                          type="font-awesome"
                          color="#FFF"
                          size={20}
                          onPress={ () => console.log("navbar right button clicked")}/>}
                centerComponent={{text:"X Project", style:{color: '#fff', fontSize: 18}}}
                outerContainerStyles={{backgroundColor: '#333344'}}/>
                <FlatList style={styles.jobListView}
                          data={ this.state.jobArray
                              // [
                          //     {
                          //         avatarImageURL: "https://www.baidu.com",
                          //         authorName: "Someone0",
                          //         jobTitle: "We're recruiting",
                          //         replyCount: "300"
                          //     },
                          //     {
                          //         avatarImageURL: "https://www.baidu.com",
                          //         authorName: "Someone1",
                          //         jobTitle: "We're recruiting",
                          //         replyCount: "300"
                          //     },
                          //     {
                          //         avatarImageURL: "https://www.baidu.com",
                          //         authorName: "Someone2",
                          //         jobTitle: "We're recruiting",
                          //         replyCount: "300"
                          //     },
                          //     {
                          //         avatarImageURL: "https://www.baidu.com",
                          //         authorName: "Someone3",
                          //         jobTitle: "We're recruiting",
                          //         replyCount: "300"
                          //     },
                          //     {
                          //         avatarImageURL: "https://www.baidu.com",
                          //         authorName: "Someone4",
                          //         jobTitle: "We're recruiting",
                          //         replyCount: "300"
                          //     },
                          //     {
                          //         avatarImageURL: "https://www.baidu.com",
                          //         authorName: "Someone5",
                          //         jobTitle: "We're recruiting",
                          //         replyCount: "300"
                          //     },
                          //     {
                          //         avatarImageURL: "https://www.baidu.com",
                          //         authorName: "Someone6",
                          //         jobTitle: "We're recruiting",
                          //         replyCount: "300"
                          //     },
                          // ]
                          }
                          renderItem={
                              ({item}) => <JobCell avatarImageURL={item.avatarImageURL}
                                                   authorName={item.authorName}
                                                   jobTitle={item.jobTitle}
                                                   replyCount={item.replyCount}
                                                   publishTime={item.publishTime}
                              />
                          }
                          keyExtractor={item => item.jobTitle+item.authorName+item.replyCount}
                />
            </View>
        )
    }
}

