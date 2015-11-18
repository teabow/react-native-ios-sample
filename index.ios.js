/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var ReposListComponent = require('./components/list/repos-list-view');
var styles = require('./index.styles');

var {
    AppRegistry,
    NavigatorIOS
} = React;

var GithubReposApp = React.createClass({

    render: () => {
        return (
            <NavigatorIOS
                ref="nav"
                itemWrapperStyle={styles.wrapNav}
                style={styles.nav}
                initialRoute={
                    {
                        component: ReposListComponent,
                        title: 'Repositories',
                        passProps: { repo: {} }
                    }
                }
            />
        );
    }

});

AppRegistry.registerComponent('GithubRepos', () => GithubReposApp);
