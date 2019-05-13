myApp
    .component('mtListItemId', {
        bindings: {
            itemId: '=?',
            itemDataFromRoute: '=?',
            showDelete: '=?'
        },
        controller: function($rootScope, mtServiceList) {

            let ctrl = this;

            ctrl.$onInit = function() {

                if (ctrl.itemId) {
                    ctrl.itemData = mtServiceList.getItemById(ctrl.itemId);
                }

                if (ctrl.itemDataFromRoute) {
                    ctrl.itemData = ctrl.itemDataFromRoute;
                }

                ctrl.showDeleteInView = true;
                if (ctrl.showDelete !== undefined) {
                    ctrl.showDeleteInView = !!ctrl.showDelete;
                }

            }

            ctrl.deleteItem = function() {
                mtServiceList.removeItemById(ctrl.itemId);
            }

        },
        templateUrl: 'components/mtListItemId/mtListItemId.html'
    });
