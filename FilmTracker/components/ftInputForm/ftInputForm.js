myApp
    .component('ftInputForm',{
        bindings:{

        },
        controller: function(ftServiceList,ftSearchFilm){
            const ctrl=this;
            ctrl.voto=0;
            ctrl.list=ftServiceList.getList();
            ctrl.searchResults=[];
            ctrl.imdbID=null;
            ctrl.selected=null;
            ctrl.AddFilm=function(){
                let film={
                    id:ctrl.selected.imdbID,
                    titolo:ctrl.selected.Title,
                    voto:ctrl.voto,
                    visto:ctrl.visto
                }
                ftServiceList.AddFilm(film);
            }
            ctrl.Search=function(){
                ftSearchFilm.searchForTitle(ctrl.titolo)
                .then(results => {
                    console.log('risposta', results)
                    ctrl.searchResults=results;
                })
                .catch(error => {
                    console.log(error);
                })
            }

        },
        
        templateUrl:'./components/ftInputForm/ftInputForm.html'
    })