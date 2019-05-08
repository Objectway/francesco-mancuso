let myApp = angular.module("moneytracker",[]);
myApp
    .component('mtList',{
        bindings:{
            lista:'=',
            title: '=',
            onButton:'&',
        },
        controller: function($scope){
            const ctrl=this;
            this.faiCose= function(){
                this.title='faccio cose';
                //alert('sto facendo cose');
            }
            this.$onInit= function(){
            }
            this.$onChanges= function(cambiamento){
                console.log('onChanges', cambiamento)
            }
            $scope.$on('listItemDelete', function(event,index){
                console.log('sto ascoltando per indice '+index);
                ctrl.lista.splice(index,1);
            })
            $scope.$on('listItemAdd',function(event,amount,description){
                let oggetto={
                    data:'09/05/19',
                    amount:amount,
                    description:description
                }
                console.log('sto ascoltando per aggiungere '+amount+" "+description);
                ctrl.lista.splice(0,0,oggetto);
            })
        },
        templateUrl:'/components/mtList/mtList.html'
    })