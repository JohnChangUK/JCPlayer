import React, { Component } from 'react';
import { Search } from '../presentation';
import { APIClient } from '../../utils';
import { connect } from 'react-redux';
import actions from '../../actions';
import APlayer from 'aplayer';

class Playlist extends Component {
    constructor() {
        super();
        this.state = {
            player: null
        };
    }

    initializePlayer(list) {
        let sublist = [];
        if (list.length > 5) {
            for (var i =1; i < 5; i++) {
                sublist.push(list[i]);
            }
        } else {
            sublist = Object.assign([], list);
        }

        var ap1 = new APlayer({
            element: document.getElementById('player1'),
            narrow: false,
            autoplay: true,
            showlrc: false,
            mutex: true,
            theme: '#e6d0b2',
            preload: 'metadata',
            mode: 'circulation',
            music: sublist
        });
        this.setState({
            player: ap1
        });
    }

    searchPodcasts(event) {
        if (event.keyCode != 13)
            return;

    const endpoint = '/search/' + event.target.value;

        APIClient
        .get(endpoint, null)
        .then(response => {
// Grabbing the results key from the response, then dispatching it
            this.props.podcastsReceived(response.results);
        })
        .catch(err => {
            console.log("Error: " + err.message);
        });
    }

    componentDidUpdate() {
        if (this.props.podcasts.selected == null)
            return;

    // grab the feed url, then make a request for rss feed
        const feedUrl = this.props.podcasts.selected['feedUrl'];
        if (feedUrl == null)
            return; 

        if (this.props.podcasts.trackList != null) {
            if (this.state.player == null)
                this.initializePlayer(this.props.podcasts.trackList);

            return;
        }

        // Reset the player;
        if (this.state.player != null) {
            this.state.player.pause();
            this.setState({
                player: null
            });
        }

        APIClient
        .get('/feed', {url: feedUrl})
        .then(response => {
            const podcast = response.podcast;
            const item = podcast.item;

            let list = [];
            item.forEach((track, i) => {
                let trackInfo = {};
                trackInfo['title'] = track.title[0];
                trackInfo['author'] = this.props.podcasts.selected.collectionName;
                trackInfo['pic'] = this.props.podcasts.selected['artworkUrl600'];

                let enclosure = track.enclosure[0]['$'];
                trackInfo['url'] = enclosure['url'];
                list.push(trackInfo);
            });
    // This action will populate the trackList in the Reducer
            this.props.trackListReady(list);
        })
        .catch(err => {
            console.log("Error: " + err.message);
        });
    }

    render() {
        return (
            <div>
            <div style={{paddingTop:64}} className="hero-header bg-shop animated fadeindown"> 
                <img src="music.jpg" alt="" height="250" width="100" />       
                    <div className="p-20 animated fadeinup delay-1">
                    <div style={{background:'#fff'}} id='player1' className='aplayer'></div>
                    </div>
                </div>

                <Search onSearch={this.searchPodcasts.bind(this)} />
            </div> 
        );
    }
}

const stateToProps = (state) => {
    return {
        podcasts: state.podcast
    }
}

const dispatchToProps = (dispatch) => {
    return {
        podcastsReceived: (podcasts) => dispatch(actions.podcastsReceived(podcasts)),
        trackListReady: (list) => dispatch(actions.trackListReady(list))
    }
}

export default connect(stateToProps, dispatchToProps)(Playlist);
