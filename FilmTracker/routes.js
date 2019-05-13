let myApp = angular.module("filmtracker",['ui.router']);
myApp
    .config(function($stateProvider){
        let routes=[
            {
                name:'insert',
                url:'/insert',
                component:'ftInputForm'
            },
            {
                name:'list',
                url:'/list',
                component:'ftList'
            },
            {
                name:'film',
                url:'/list/{filmId}',
                component:'ftFilmDetail',
                resolve:{
                    filmId:function($transition$){
                        return $transition$.params().filmId
                    }
                }
            }
    ];
    routes.forEach(r => {
        $stateProvider.state(r);
    });
    })