import React, { Component } from 'react';
import { Search } from '../presentation';
import APIClient from '../../utils';

class Playlist extends Component {

    searchPodcasts(event) {
        if (event.keyCode != 13)
            return;

        console.log('searchPodcasts: ' + event.target.value);
// example search Endpoint: http://localhost:3000/search/sports
        APIClient.get('http://localhost:3000/search/sports', null)
        .then(response => {
            console.log(JSON.stringify(response));
        })
        .catch(err => {
            console.log("Error: " + err.message);
        })
    }

    render() {
        return (
            <div>
                <div className="hero-header bg-shop animated fadeindown">
                  <h1 className="hero-title">JCPlayer Playlist</h1>
                </div>

                <Search onSearch={this.searchPodcasts.bind(this)} />
            </div>

        );
    }
}

export default Playlist;