myApp
    .component('mtFormTransaction', {
        controller: function($scope, $rootScope, mtServiceList) {

            let ctrl = this;

            ctrl.isPositive = false;

            ctrl.addItem = function() {

                let expense = {
                    id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10),
                    isPositive: ctrl.isPositive,
                    amount: $scope.amountValue,
                    description: $scope.descriptionValue
                };

                console.log(expense);

                mtServiceList.addItemToList(expense);
            }

        },
        templateUrl: 'components/mtFormTransaction/mtFormTransaction.html',
        transclude: true
    })
