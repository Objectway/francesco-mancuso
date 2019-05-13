myApp
    .component("mtrRankingStar",{
        bindings:{
            votoStar:"="
        },
        controller:function($scope,mtrManualListService){
            const ctrl=this;
            ctrl.$onInit=function(){    
                // console.log(ctrl.votoStar)
                ctrl.array= new Array(ctrl.votoStar)
            }
        },
        templateUrl:'./components/mtrRankingStar/mtrRankingStar.html'
    })