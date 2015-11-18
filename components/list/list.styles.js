'use strict';

var React = require('react-native');
var { StyleSheet } = React;

/**
 * Index styles
 */
var styles = StyleSheet.create({
    appTitle: {
        fontSize: 32,
        backgroundColor: '#58ACFA',
        padding: 20,
        color: '#ffffff',
        textAlign: 'center'
    },
    listContainer: {
        flex: 1,
        paddingTop: 64
    },
    repoContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    thumbnail: {
        width: 92,
        height: 92
    },
    textContainer: {
        flex: 1
    },
    description: {
        flex: 1,
        padding: 20
    },
    separator: {
        height: 1,
        backgroundColor: '#dcdcdc'
    }
});

module.exports = styles;
