let myApp = angular.module("mockserver",[]);
myApp
    .factory('Service',['$http','$q',function($http,$q){
        return {
            print:function(){
                let deferred=$q.defer();
                $http({
                    method:'GET',
                    url:"/rest/v1/authors"
                })
                    .then(function(responseJson){
                        deferred.resolve(responseJson.data);
                    })
                    .catch(function(error){
                        debug
                        deferred.reject(error)
                    })
                return deferred.promise;
                },
            }
            
        }
    ])