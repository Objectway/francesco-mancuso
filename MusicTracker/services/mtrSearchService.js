myApp
    .factory('mtrSearchService',['$http','$q',function($http,$q){
        let RisultatoRicerca=[]
        let endpoint="https://itunes.apple.com/search?entity=album&term="
        return {
            
            SearchAlbum:function(searchString){
                let deferred=$q.defer();
                let searchEndpoint=endpoint+searchString
                $http({
                    method:'GET',
                    url:searchEndpoint
                })
                    .then(function(responseJson){
                        deferred.resolve(responseJson.data);
                    })
                    .catch(function(error){
                        deferred.reject(error)
                    })
                return deferred.promise;
                },
            getListaRisultati:function(){
                return RisultatoRicerca;
            }
            }
            
        }
    ])