myApp
    .factory('mtrManualListService',[function(){
        let lista=[
            {   
                Artista:"Ed Sheeran",
                ArtistaId: "bho",
                Album: "L'ultimo",
                Tracce: 10,
                Prezzo: 100,
                Voto: 5,
            },
            {
                Artista:"Imagine Dragons",
                ArtistaId: "bho",
                Album: "L'ultimo",
                Tracce: 12,
                Prezzo: 200,
                Voto: 4,
            }
        ]
        return {
            getList:function(){
                return lista;
            },
            AddDati:function(sette){
                lista.push(sette);
                }
            }
            
        }
    ])