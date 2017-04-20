import constants from '../constants';

export default {

    searchPodcasts: (params) => {
        console.log('searchPodcasts: ' + JSON.stringify(params));
    },

    podcastsReceived: (podcasts) => {
        return {
            type: constants.PODCAST_RECEIVED,
            podcasts: podcasts
        }
    }
};