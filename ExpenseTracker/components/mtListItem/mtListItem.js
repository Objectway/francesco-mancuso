myApp
    .component('mtListItem',{
        bindings:{
            objectWay:'=',
            itemIndex:'='
        },
        controller: function($scope){
            var ctrl=this

            
            ctrl.$onInit=function(){
                console.log(this.objectWay,this.itemIndex);
            }
            ctrl.deleteItem= function(){
                console.log('sto cancellando', ctrl.itemIndex);
                $scope.$emit('listItemDelete',ctrl.itemIndex);
            }
           
        },
        templateUrl:'/components/mtListItem/mtListItem.html'
    })