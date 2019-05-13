let myApp = angular.module("musictracker",['ui.router']);
myApp
    .config(function($stateProvider){
        let routes=[
            {
                name:'default',
                url:'',
                component:'mtrSearchInsertForm'
            },
            {
                name:'aggiungi',
                url:'/aggiungi',
                component:'mtrSearchInsertForm'
            },
            {
                name:'lista',
                url:'/lista',
                component:'mtrManualList'
            },
            {
                name:'artista',
                url:'/artista/{artistId}',
                component:'mtrArtistInformation',
                resolve:{
                    artistaId:function($transition$){
                        return $transition$.params().artistId
                    }
                }
            }
    ];
    routes.forEach(r => {
        $stateProvider.state(r);
    });
    })