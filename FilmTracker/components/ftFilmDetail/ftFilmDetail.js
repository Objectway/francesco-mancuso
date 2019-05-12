myApp
    .component('ftFilmDetail',{
        bindings:{
            imdbId:'='
        },
        controller:function($scope,ftSearchFilm){
            let ctrl=this;
            function getFilmData(){
                if(ctrl.imdbId){
                    ftSearchFilm.getFilmById(ctrl.imdbId)
                    .then(filmData => {
                        ctrl.filmData=filmData;
                    })
                    .catch(error => {
                        console.log(error)
                    })
                }
                
            }
            ctrl.$onInit=function(){
                getFilmData();
            }
            ctrl.$doCheck=function(){
                getFilmData();
            }
            ctrl.getFilmById=ftSearchFilm.getFilmById("tt1037492");
            console.log($scope.filmId)
        },
        templateUrl:'./components/ftFilmDetail/ftFilmDetail.html'
    })