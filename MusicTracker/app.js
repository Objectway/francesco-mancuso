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
    ];
    routes.forEach(r => {
        $stateProvider.state(r);
    });
    })