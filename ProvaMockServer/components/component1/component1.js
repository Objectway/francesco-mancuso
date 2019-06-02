
myApp
    .component("component1",{
        bindings:{

        },
        controller:function(Service){

            const ctrl=this;
            ctrl.dati="none"
            ctrl.$onInit=function() {
                console.log(Service.print()
                .then((item) => {
                    console.log(item)
                    ctrl.dati=item
                }))
            }
        },
        templateUrl:"components/component1/component1.html"
    })
