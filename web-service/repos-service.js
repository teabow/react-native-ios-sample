'use strict';

const BASE_URL = 'https://api.github.com';

class RepositoriesService {

    constructor(user) {
        this.user = user;
    }

    _buildUrl() {
        return BASE_URL + '/users/' + this.user + '/repos'
    }

    getRepos() {
        return fetch(this._buildUrl());
    }

}

module.exports = RepositoriesService;
