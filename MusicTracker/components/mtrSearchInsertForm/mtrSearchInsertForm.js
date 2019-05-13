myApp
    .component("mtrSearchInsertForm",{
        bindings:{

        },
        controller:function(mtrSearchService,mtrManualListService){
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
                if(ctrl.voto){
                    let elemento={
                        Artista:ctrl.selected.artistName,
                        ArtistaId:ctrl.selected.artistId,
                        Album:ctrl.selected.collectionName,
                        Tracce:ctrl.selected.trackCount,
                        Prezzo:ctrl.selected.collectionPrice,
                        Voto:ctrl.voto
                    }
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
                
                ctrl.titolo="";
                ctrl.Search=[];
                mtrManualListService.AddDati(elemento)
            }
        }}
        },
        templateUrl:'./components/mtrSearchInsertForm/mtrSearchInsertForm.html'
    })