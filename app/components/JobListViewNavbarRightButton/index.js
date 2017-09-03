import React, { Component, PropTypes } from 'react';
import {
    View,
    Button,
} from 'react-native';

import { Icon } from 'react-native-elements';

export default class JobListViewNavBarRightButton extends Component {
    static propTypes = {
        shouldShowIcon: PropTypes.bool.isRequired,
        selectedCity: PropTypes.string,
        filterButtonHandler: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.shouldShowIcon) {
            return (
                <Icon name="filter"
                      type="font-awesome"
                      color="#FFF"
                      size={20}
                      iconStyle={{marginRight: 8}}
                      onPress={() => this.props.filterButtonHandler()}
                      underlayColor="rgba(255, 255, 255, 0)"/>

            );
        } else {
            return (
                <Button onPress={() => this.props.filterButtonHandler()}
                        tilte={this.state.selectedCity}/>
            );
        }
    }

}