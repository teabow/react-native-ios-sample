'use strict';

var React = require('react-native');
var {
    Text,
    View
} = React;
var session = require('../../session/session-manager');
var styles = require('./details.styles');

var RepoDetailsComponent = React.createClass({

    getInitialState: () => {
        return {
            repo: session.repo
        }
    },

    render: function () {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Repository</Text>
                <View style={styles.repoContainer}>
                    <Text style={styles.title}>{this.state.repo.name}</Text>
                    <Text style={styles.mT20}>Description : </Text>
                    <Text>{this.state.repo.description}</Text>
                    <Text style={styles.mT20}>Language : {this.state.repo.language}</Text>
                </View>
            </View>
        );
    }

});

module.exports = RepoDetailsComponent;
