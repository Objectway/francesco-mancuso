myApp
    .component('mtList', {
        bindings: {
            title: '=',
            listaIds: '='
        },
        controller: function($scope, mtServiceList) {

            var ctrl = this;

            // ctrl.$onInit = function() {
            //     ctrl.listaIds = mtServiceList.getListIds();
            // }
            //
            // ctrl.$doCheck = function () {
            //     ctrl.listaIds = mtServiceList.getListIds();
            //     ctrl.total = mtServiceList.getTotal();
            // }

        },
        controllerAs: 'mtListCtrl',
        templateUrl: 'components/mtList/mtList.html'
    })
