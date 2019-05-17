let myApp = angular.module("mock",[]);

myApp
    .component("component1",{
        bindings:{

        },
        controller:function($q){

            const ctrl=this;
            ctrl.dati="none"
            ctrl.$onInit=function() {
                let deferred=$q.defer();

                fetch("/rest/v1/authors/")
                    .then(function(response){
                       console.log(response)
                    })
                    .then(function(myJson){
                        debugger
                        console.log(myJson)
                    })
                    
            
            }
        },
        templateUrl:"components/component1/component1.html"
    })
