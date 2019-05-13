myApp
    .factory('mtrManualListService',[function(){
        let lista=[
            
            {
                Artista:"Imagine Dragons",
                ArtistaId: 358714030,
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