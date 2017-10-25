import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SettingsScreen extends Component {

    render() {
        return (
            <View>
                <Button
                    title="Reset Liked Jobs"
                    large
                    icon={{ name: 'delete-forever' }}
                    backgroundColor="#F444336"
                    onPress={this.props.clearLikedJobs}
                >
                </Button>

            </View>
        );
    }
}

export default connect(null, actions)(SettingsScreen);

