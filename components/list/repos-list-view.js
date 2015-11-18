/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var RepoDetailsComponent = require('../details/repo-details-view');
var RepositoriesService = require('../../web-service/repos-service');
var session = require('../../session/session-manager');
var styles = require('./list.styles');

var {
    AlertIOS,
    Text,
    Image,
    ListView,
    View,
    TouchableHighlight
} = React;

var ReposListComponent = React.createClass({

    getInitialState: function () {
        return {
            repositories: [],
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
            modal: {
                animated: true,
                transparent: true,
                visible: false
            },
            repo: {
                name: ''
            }
        }
    },

    componentWillMount: function () {
        new RepositoriesService('teabow').getRepos()
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseJson)
                });
            })
            .catch((error) => {

            })
            .done();
    },

    render: function () {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRepo}
            />
        );
    },

    renderRepo: function (repo) {
        return (
            <TouchableHighlight
                onPress={this.confirmDetails.bind(this, repo)}
                underlayColor="#dcdcdc">
                <View>
                    <View style={styles.repoContainer}>
                        <Image
                            style={styles.thumbnail}
                            source={{uri: repo.owner.avatar_url}}/>
                        <View style={styles.textContainer}>
                            <Text style={styles.description}>{repo.name}</Text>
                            <Text
                                numberOfLines={1}
                                style={styles.description}>{repo.description}</Text>
                        </View>
                    </View>
                    <View style={styles.separator}/>
                </View>
            </TouchableHighlight>
        );
    },

    confirmDetails: function (repo) {
        session.repo = repo;
        AlertIOS.alert(
            'View '+ repo.name + '?',
            '',
            [
                {text: 'Close', onPress: () => this.setState({modal: {visible: false}})},
                {text: 'Ok', onPress: () => {
                    this.props.navigator.push({
                        title: 'Details',
                        component: RepoDetailsComponent
                    })
                }}
            ]
        );
    }

});

module.exports = ReposListComponent;
