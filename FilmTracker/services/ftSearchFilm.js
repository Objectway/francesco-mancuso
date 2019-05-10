myApp
    .factory('ftSearchFilm',['$http','$q',function($http,$q){
        const key='51fb3d47';
        let endpoint= 'http://www.omdbapi.com/?apikey='+key;
        return{
            searchForTitle: function(searchString){

                let deferred= $q.defer()
            
                let searchEndpoint= endpoint+'&s='+ searchString;

                    $http({
                        method:'GET',
                        url:searchEndpoint
                    })
                        .then(function(responseJson){
                            if(responseJson.data.Response==="True"){
                                deferred.resolve(responseJson.data.Search)
                            }
                            else{
                                deferred.reject(responseJson.data.Error)
                            }
                        })
                        .catch(function(error){
                            deferred.reject(error)
                        })
                return deferred.promise;
            },
            getFilmById:function(imdbID){
                let deferred= $q.defer()
            
                let searchEndpoint= endpoint+'&i='+ imdbID;

                    $http({
                        method:'GET',
                        url:searchEndpoint
                    })
                        .then(function(responseJson){
                            if(responseJson.data.Response==="True"){
                                deferred.resolve(responseJson.data)
                            }
                            else{
                                deferred.reject(responseJson.data.Error)
                            }
                        })
                        .catch(function(error){
                            deferred.reject(error)
                        })
                return deferred.promise;
            }



                // fetch(searchEndpoint)
                //     .then(response => {
                //         console.log(response.json());
                //     })
                //     .catch(error =>{
                //         console.log(error);
                //     })
            
        }
    }])