myApp
    .component('mtFormInput',{
        bindings:{
            lista:'='
        },
        controller:function($scope,$rootScope){
            var ctrl=this;
            
            ctrl.addItem=function(){
                
                console.log('sto aggiungendo alla lista'+" "+ amount +" "+ description)
                $rootScope.$broadcast('listItemAdd',$scope.amount,$scope.description)
            }
            ctrl.addItem2=function(){
                let sette= {
                    data:'09/05/19',
                    amount: $scope.amount,
                    description: $scope.description
                }
                
                console.log(sette)
                this.lista.splice(0,0,sette)
            }
           
        },
        templateUrl:'/components/mtFormInput/mtFormInput.html'
    })