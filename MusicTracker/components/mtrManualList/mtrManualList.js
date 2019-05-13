myApp
    .component("mtrManualList",{
        bindings:{

        },
        controller:function(mtrManualListService){
            const ctrl=this;
            ctrl.$onChanges=function(){
            }
            ctrl.lista=mtrManualListService.getList();
        },
        templateUrl:'./components/mtrManualList/mtrManualList.html'
    })