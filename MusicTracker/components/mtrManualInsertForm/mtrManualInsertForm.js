myApp
    .component("mtrManualInsertForm",{
        bindings:{

        },
        controller:function(){
            const ctrl=this;
            ctrl.$onChanges=function(){
            }
            ctrl.salva=function(){
                ctrl.artista="";
                ctrl.album="";
                ctrl.tracce="";
                ctrl.prezzo=""
                ctrl.voto=null;
            }
        },
        templateUrl:'./components/mtrManualInsertForm/mtrManualInsertForm.html'
    })