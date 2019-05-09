myApp
    .factory('mtServiceList',[function() {
        let lista =[
            {   
                id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10),
                data: "09/05/19",
                isPositive:false,
                amount:10,
                description:'pranzo'
            },
            {
                id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10),
                data: "09/05/19",
                amount:1,
                isPositive:true,
                description:'rimborso'
            } 
        ]
        return {
            
            getList:function(){
                return lista;
            },
            getListIds:function(){
                return lista.map(itemId => itemId.id);
            },
            addItemToList: function(item){
                lista.push(item);
                console.log(lista);
            },
            deleteItemFromList:function(index){
                lista.splice(index,1);
            },
            getItem:function(index){
                return lista[index];
            },
            getItemById:function(id){
                let itemFind = lista.filter((item)=>{
                    return item.id==id;
                });
                return (itemFind.length ? itemFind[0]: false);
            },
            removeItemById: function(id){
                let ids=lista.map(itemId => itemId.id);
                let index= ids.indexOf(id)
                lista.splice(index,1)
            },
            getTotal: function(){

                let value=0;
                lista.forEach(element => {
                    if(element.isPositive==true){
                        value=value+element.amount;
                    }
                    else{
                        value=value-element.amount;
                    }
                });

                return value;
            }
        }

        console.log(getItemById());
    }])