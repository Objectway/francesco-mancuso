myApp
    .component('mtFormTransaction',{
        bindings:{
            lista:'=',
            //isPositive:'='
        },
        controller:function($scope,$rootScope, mtServiceList){
            const ctrl=this;

            ctrl.isPositive=true;
            
            ctrl.$onInit=function(){
                
            }
            
            ctrl.addItem2=function(){
                console.log(sette)
                this.lista.splice(0,0,sette)
            }
            ctrl.addItem3=function(){
                let sette= {
                    id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10),
                    data:'09/05/19',
                    isPositive: ctrl.isPositive,
                    amount: $scope.amount,
                    description: $scope.description
                }
                mtServiceList.addItemToList(sette);
                $scope.amount='',
                $scope.description=''

            }
            ctrl.verify=function(){
                    ctrl.isPositive=!ctrl.isPositive;
            }
            
            
        },
        
        templateUrl:'./components/mtFormTransaction/mtFormTransaction.html'
    })