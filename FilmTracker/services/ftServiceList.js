myApp
    .factory('ftServiceList',[function(){
        let lista=[
            {   
                id:1,
                titolo: "Avengers End Game",
                voto: 8,
                visto: true
            },
            {
                id:2,
                titolo: "Ciao",
                voto:2,
                visto: true
            }
        ]
        return {
            getList:function(){
                return lista;
            },
            AddFilm:function(sette){
                if(!sette.visto){
                    let setten={
                        id:sette.id,
                        titolo:sette.titolo,
                    }
                    lista.splice(0,0,setten)
                    }
                    else{
                        lista.splice(0,0,sette);
                }
            }
            
        }
    }])