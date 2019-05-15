myApp
    .component("mtrSearchInsertForm",{
        bindings:{

        },
        controller:function(mtrSearchService,mtrManualListService,$location){
            const ctrl=this;
            ctrl.Search=null;
            ctrl.$onInit=function(){
            ctrl.cerca=function(){
                mtrSearchService.SearchAlbum(ctrl.titolo)
                    .then(function(responseJson){
                    ctrl.Search=responseJson.results;
                    console.log(ctrl.Search)
            })};
            ctrl.salvainlista=function(){
                console.log(ctrl.voto)
                if(ctrl.voto){
                    let elemento={
                        Artista:ctrl.selected.artistName,
                        ArtistaId:ctrl.selected.artistId,
                        Album:ctrl.selected.collectionName,
                        Tracce:ctrl.selected.trackCount,
                        Prezzo:ctrl.selected.collectionPrice,
                        Voto:ctrl.voto
                    }

                    mtrManualListService.AddDati(elemento)
                }
                else{
                    let elemento={
                        Artista:ctrl.selected.artistName,
                        ArtistaId:ctrl.selected.artistId,
                        Album:ctrl.selected.collectionName,
                        Tracce:ctrl.selected.trackCount,
                        Prezzo:ctrl.selected.collectionPrice,
                        Voto:0
                }

                mtrManualListService.AddDati(elemento)
            }
                ctrl.titolo="";
                ctrl.Search=[];
                $location.path("/lista");
            
        }}
        },
        templateUrl:'./components/mtrSearchInsertForm/mtrSearchInsertForm.html'
    })