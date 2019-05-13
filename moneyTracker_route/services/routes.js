let myApp = angular.module('moneyTracker', ['ui.router']);

myApp.config(function($stateProvider) {

    let routes = [
        {
            name: 'insert',
            url: '/insertTheExpense',
            component: 'mtFormTransaction'
        },
        {
            name: 'list',
            url: '/list',
            component: 'mtList',
            resolve: {
                listaIds: function(mtServiceList) {
                    return mtServiceList.getListIds();
                }
            }
        },
        {
            name: 'detail',
            url: '/list/{itemId}',
            component: 'mtListItemId',
            resolve: {
                itemDataFromRoute: function(mtServiceList, $transition$) {
                    return mtServiceList.getItemById($transition$.params().itemId)
                },
                showDelete: function() {
                    return false;
                }
                // itemId: function($transition$) {
                //     return $transition$.params().itemId
                // }
            }
        }
    ];

    routes.forEach(r => {
        $stateProvider.state(r);
    })


})
