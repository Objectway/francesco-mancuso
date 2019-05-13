myApp
    .component("mtrManualInsertForm",{
        bindings:{

        },
        controller:function(mtrManualListService){
            const ctrl=this;
            ctrl.$onChanges=function(){
            }
            ctrl.lista=mtrManualListService.getList();
            ctrl.salva=function(){
                let dati={
                    Artista:ctrl.artista,
                    Album:ctrl.album,
                    Tracce:ctrl.tracce,
                    Prezzo:ctrl.prezzo,
                    Voto:ctrl.voto
                }
                ctrl.AddDati=mtrManualListService.AddDati(dati);
                ctrl.artista="";
                ctrl.album="";
                ctrl.tracce="";
                ctrl.prezzo=""
                ctrl.voto=null;
                console.log(ctrl.lista)
            };
            
        },
        templateUrl:'./components/mtrManualInsertForm/mtrManualInsertForm.html'
    })