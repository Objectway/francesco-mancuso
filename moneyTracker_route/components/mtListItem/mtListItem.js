myApp
    .component('mtListItem', {
        bindings: {
            itemData: '=',
            itemIndex: '=',
            removeItem: '&?'
        },
        controller: function($rootScope, mtServiceList) {

            var ctrl = this;

            ctrl.deleteItem = function() {
                console.log('sto cancellando', ctrl.itemIndex);
                mtServiceList.removeItemFromList(ctrl.itemIndex);
                // $rootScope.$broadcast('listItemDelete', ctrl.itemIndex);
            }

            ctrl.deleteItemFromBinding = function() {
                ctrl.removeItem();
            }

        },
        templateUrl: 'components/mtListItem/mtListItem.html'
    })
