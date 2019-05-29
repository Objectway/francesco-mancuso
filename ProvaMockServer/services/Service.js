let myApp = angular.module("mockserver",[]);
myApp
    .factory('Service',['$http','$q',function($http,$q){
        return {
            print:function(){
                let deferred=$q.defer();
                fetch("/rest/v1/authors")
                    .then(function(responseJson){
                        deferred.resolve(responseJson.data);
                    })
                    .catch(function(error){
                        deferred.reject(error)
                    })
                return deferred.promise;
                },
            }
            
        }
    ])