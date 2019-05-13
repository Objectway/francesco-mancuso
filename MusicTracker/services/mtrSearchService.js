myApp
    .factory('mtrSearchService',['$http','$q',function($http,$q){
        let RisultatoRicerca=[]
        let endpoint="https://itunes.apple.com/search?entity=album&term="
        let endpoint2="https://itunes.apple.com/lookup?id="
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
                getArtistInformation:function(artistaId){
                    let deferred=$q.defer();
                    let searchEndpoint=endpoint2+searchString
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
                }

            }
            
        }
    ])