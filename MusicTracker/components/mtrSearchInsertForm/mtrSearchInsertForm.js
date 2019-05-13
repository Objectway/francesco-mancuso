myApp
    .component("mtrSearchInsertForm",{
        bindings:{

        },
        controller:function(mtrSearchService){
            const ctrl=this;
            ctrl.Search=null;
            // ctrl.listarisultati=mtrSearchService.getListaRisultati();
            ctrl.$onInit=function(){
            ctrl.cerca=function(){
                mtrSearchService.SearchAlbum(ctrl.titolo)
                    .then(function(responseJson){
                    ctrl.Search=responseJson.results;
                    console.log(ctrl.Search)
            })};
        }
        },
        templateUrl:'./components/mtrSearchInsertForm/mtrSearchInsertForm.html'
    })