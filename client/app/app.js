'use strict';

// Declare app level module which depends on filters, and services

angular.module('tvShows', ['ui.router'])
  .config(function($stateProvider) {

        $stateProvider.state('shows', {
            url: "/shows",
            views: {
                'introContent': {
                    templateUrl: 'fmp/introScreen/introScreen.html'
                }
            }
        });
        
        // if none of the above routes are met, use this fallback
        $stateProvider.state("otherwise", {
            url: "*path",
            templateUrl: 'main.html'
        });
});
