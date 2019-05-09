let myApp = angular.module("moneytracker",['ui.router']);

myApp.
    config(function($stateProvider){
        let routes=[
            {
                name:'insert',
                url:'/insert',
                component:'mtFormTransaction'
        },
        {
            name:'list',
            url:'/list',
            component:'mtList',
            resolve:{
                listaIds: function(mtServiceList){
                    return mtServiceList.getListIds();
                }
            }
        },
        {
            name:'detail',
            url:'list/{itemId}',
            component: 'mtListItemId',
            reslove:{
                itemId:function($transitions$){
                    return $transitions$.params().itemId
                }
            }
        }
    ];
    routes.forEach(element => {
        $stateProvider.state(element);
    });
    })