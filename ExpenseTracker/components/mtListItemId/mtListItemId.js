myApp
    .component('mtListItemId',{
        bindings:{
            itemId: '='
        },
        controller: function($scope,mtServiceList){
            var ctrl=this
            ctrl.$onInit= function(){
                ctrl.itemId = mtServiceList.getItemById(ctrl.itemId);
            }
            ctrl.deleteItem4= function(){
                mtServiceList.removeItemById(ctrl.itemId);
            }
        },
        templateUrl:'/components/mtListItemId/mtListItemId.html'
    })