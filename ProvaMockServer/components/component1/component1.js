
myApp
    .component("component1",{
        bindings:{

        },
        controller:function(Service){

            const ctrl=this;
            ctrl.dati="none"
            ctrl.$onInit=function() {
                console.log(Service.print());
            }
        },
        templateUrl:"components/component1/component1.html"
    })
