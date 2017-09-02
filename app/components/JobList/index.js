import React, { Component }from 'react';
import {
    AsyncStorage,
    FlatList,
    View,
    RefreshControl,
} from 'react-native';

import { Header } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import  Picker  from 'react-native-picker';

import JobCell from '../JobCell';
import styles from './styles';
import { parseJobCell } from '../../util/parser';

const cityArray = ['无','北京', '上海', '广州', '深圳', '杭州', '成都', '南京'];

export default class JobList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            isRefreshing: false,
            page: 1,
            jobArray: [],
            selectedCity: cityArray[0],
            cityArray: cityArray,
        }
    }

    componentDidMount() {
        this._refreshData();
    }

    _refreshData = () => {
        this.setState({
            isRefreshing: true,
        });
        parseJobCell(jobs => this._handleResult(jobs), 1);
    };

    _loadMoreData = () => {
        let nextPage = this.state.page + 1;
        this.setState({
            loading: true,
        });
        parseJobCell(jobs => {
            this.setState({
                loading: false,
                page: nextPage,
                jobArray: [...this.state.jobArray, ...jobs],
            });
        }, nextPage);
    };

    _handleResult = (jobs) => {
        this.setState({
            isRefreshing: false,
            jobArray: jobs,
        });
    };

    _filterButtonClicked = () => {
        console.log("navbar right button clicked");
        Picker.init({
            pickerData: this.state.cityArray,
            selectedValue: [this.state.selectedCity],
            pickerTitleText: '请选择城市',
            pickerConfirmBtnText: '确认',
            pickerCancelBtnText: '取消',
            pickerConfirmBtnColor: [77, 82, 86, 1],
            pickerCancelBtnColor: [77, 82, 86, 1],
            pickerTitleColor: [77, 82, 86, 1],
            pickerFontSize: 20,
            onPickerConfirm: data => {
                console.log('picker confirm: ' + data[0]);
                this.setState({
                    selectedCity: data[0],
                });
                // this._filterJobsByCity(this.state.jobArray, data[0]);
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

    _filterJobsByCity= (jobs, city) => {
        let copyOfJobArray = JSON.parse(JSON.stringify(jobs));
        if (city === '无') {
            return copyOfJobArray;
        }

        let res = [];
        for (let job of copyOfJobArray) {
            if (job.jobTitle.indexOf(city) !== -1) {
                res.push(job);
            }
        }

        return res;
    };

    render() {
        let filteredJobArray = this._filterJobsByCity(this.state.jobArray, this.state.selectedCity);
        return (
            <View style={styles.container}>
                <Header
                    rightComponent={
                    <Icon name="filter"
                          type="font-awesome"
                          color="#FFF"
                          size={22}
                          onPress={() => {this._filterButtonClicked()}}
                          underlayColor="rgba(255, 255, 255, 0)"
                    />
                    }
                centerComponent={{text:"X Project", style:{color: '#fff', fontSize: 18}}}
                outerContainerStyles={{backgroundColor: '#333344'}}/>
                <FlatList style={styles.jobListView}
                          data={filteredJobArray}
                          renderItem={
                              ({item}) => <JobCell avatarImageURL={item.avatarImageURL}
                                                   authorName={item.authorName}
                                                   jobTitle={item.jobTitle}
                                                   replyCount={item.replyCount}
                                                   publishTime={item.publishTime}
                              />
                          }
                          keyExtractor={item => item.jobTitle+item.authorName+Math.random()%100}
                          extraData={this.state}
                          refreshing={this.state.isRefreshing}
                          onRefresh={() => { parseJobCell(jobs=>{this._handleResult(jobs)}, 1) }}
                          onEndReached={() => {
                              if (!this.state.onEndReachedCalledDuringMomentum) {
                                  this._loadMoreData();
                                  this.setState({
                                      onEndReachedCalledDuringMomentum: true,
                                  })
                              }
                          }}
                          onMomentumScrollBegin={() => {this.setState({onEndReachedCalledDuringMomentum: false})}}
                />
            </View>
        )
    }
}

