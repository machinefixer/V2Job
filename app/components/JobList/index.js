import React, { Component }from 'react';
import {
    AsyncStorage,
    FlatList,
    View,
} from 'react-native';

import { Header } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import  Picker  from 'react-native-picker';

import JobCell from '../JobCell';
import styles from './styles';
import { parseJobCell } from '../../util/parser';

const cityArray = ['无','北京', '上海', '广州', '深圳', '浙江', '成都', '南京'];

export default class JobList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            refreshing: false,
            page: 1,
            jobArray: [],
            cityArray: cityArray,
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

    _filterButtonClicked = () => {
        console.log("navbar right button clicked");
        Picker.init({
            pickerData: this.state.cityArray,
            selectedValue: ['无'],
            pickerTitleText: '请选择城市',
            pickerConfirmBtnColor: [77, 82, 86, 1],
            pickerCancelBtnColor: [77, 82, 86, 1],
            pickerTitleColor: [77, 82, 86, 1],
            onPickerConfirm: data => {
                console.log('picker confirm: ' + data);
            },
            onPickerCancel: data => {
                console.log('picker cancel: ' + data);
            },
            onPickerSelect: data => {
                console.log('picker select: ' + data);
            },
        });
        Picker.show();
    };

    render() {
        return (
            <View style={styles.container}>
                <Header rightComponent={
                    <Icon name="filter"
                          type="font-awesome"
                          color="#FFF"
                          size={20}
                          onPress={() => {this._filterButtonClicked()}}
                    />
                }
                centerComponent={{text:"X Project", style:{color: '#fff', fontSize: 18}}}
                outerContainerStyles={{backgroundColor: '#333344'}}/>
                <FlatList style={styles.jobListView}
                          data={ this.state.jobArray}
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

