myApp
    .component('ftFilmDetail',{
        bindings:{
            imdbID:'='
        },
        controller:function(ftSearchFilm){
            let ctrl=this;
            function getFilmData(){
                if(ctrl.imdbID){
                    ftSearchFilm.getFilmById(ctrl.imdbID)
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
        },
        templateUrl:'./components/ftFilmDetail/ftFilmDetail.html'
    })