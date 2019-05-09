
myApp
    .component('mtList',{
        bindings:{
            // lista:'=',
            title: '=',
            // onButton:'&',
        },
        controller: function($scope, mtServiceList){
            const ctrl=this;
            //console.log(ctrl.listaIds);

            
            // this.$onInit= function(){
            //     // ctrl.lista=mtServiceList.getList();
            //     ctrl.listaIds=mtServiceList.getListIds();
            // }
            this.$onChanges= function(cambiamento){
            }
            // $scope.$on('listItemDelete', function(event,index){
            //     console.log('sto ascoltando per indice '+index);
            //     ctrl.lista.splice(index,1);
            // })
            // $scope.$on('listItemAdd',function(event,amount,description){
            //     let oggetto={
            //         data:'09/05/19',
            //         amount:amount,
            //         description:description
            //     }
            //     console.log('sto ascoltando per aggiungere '+amount+" "+description);
            //     ctrl.lista.splice(0,0,oggetto);
            // })
            // ctrl.deleteItemAtIndex=function(index){
            //     ctrl.lista.splice(index,1);
            // }
            
            ctrl.$doCheck =function(data){
                ctrl.listaIds = mtServiceList.getListIds();
                ctrl.total= mtServiceList.getTotal();
                console.log(ctrl.total);
            }
        },
        templateUrl:'/components/mtList/mtList.html'
    })