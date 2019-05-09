myApp
    .component('mtListItem',{
        bindings:{
            itemId:'=',
            itemIndex:'=',

        },
        controller: function($scope,mtServiceList){
            var ctrl=this
            ctrl.$onInit=function(){
              //  console.log(this.objectWay,this.itemIndex);
                console.log(ctrl.itemIndex)
            }
            // ctrl.deleteItem= function(){
            //   //  console.log('sto cancellando', ctrl.itemIndex);
            //     $scope.$emit('listItemDelete',ctrl.itemIndex);
            // }
            // ctrl.deleteItem2=function(index){
            //     ctrl.deleteItemAtIndex();
            // }
            ctrl.deleteItem3= function(){
                mtServiceList.deleteItemFromList(ctrl.itemIndex);
            }
            
        },
        templateUrl:'/components/mtListItem/mtListItem.html'
    })