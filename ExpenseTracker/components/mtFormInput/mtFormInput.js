myApp
    .component('mtFormInput',{
        bindings:{
            list:'='
        },
        controller:function($scope,$rootScope){
            var ctrl=this;

            ctrl.addItem=function(){
                
                console.log('sto aggiungendo alla lista'+" "+ amount +" "+ description)
                $rootScope.$broadcast('listItemAdd',$scope.amount,$scope.description)
            }
        },
        templateUrl:'/components/mtFormInput/mtFormInput.html'
    })