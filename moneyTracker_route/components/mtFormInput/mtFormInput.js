myApp
    .component('mtFormInput', {
        bindings: {
            'lista': '=listData'
        },
        controller: function($scope, $rootScope) {

            let ctrl = this;

            ctrl.addItem = function(amount, descr) {

                let expense = {
                    amount: amount,
                    description: descr
                };

                console.log(expense);
                $rootScope.$broadcast('listItemAdd', expense)

            }

            ctrl.addItemByScope = function() {
                let expense = {
                    amount: $scope.amountValue,
                    description: $scope.descriptionValue
                }

                console.log(expense);
                $rootScope.$broadcast('listItemAdd', expense)

            }

            ctrl.addItemToList = function() {
                let expense = {
                    amount: $scope.amountValue,
                    description: $scope.descriptionValue
                }
                ctrl.lista.push(expense);
            }

        },
        templateUrl: 'components/mtFormInput/mtFormInput.html',
        transclude: true
    })
