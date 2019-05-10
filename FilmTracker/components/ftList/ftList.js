myApp
    .component('ftList',{
        bindings:{
        },
        controller:function(ftServiceList){
            const ctrl=this;
            ctrl.$onInit=function(){
                ctrl.lista= ftServiceList.getList();
            }
            
        },
        templateUrl:"./components/ftList/ftList.html"
    })