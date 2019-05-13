myApp
    .factory('mtServiceList', [function() {

        let lista = [
            {
                id: 'asdflkasdj',
                isPositive: false,
                amount: 100,
                description: 'pranzo'
            },
            {
                id: 'fgnfgnerl',
                isPositive: true,
                amount: 1000,
                description: 'stipendio'
            }
        ];

        return {

            getList: function() {
                console.log(lista);
                return lista;
            },

            getListIds: function() {
                return lista.map(x => x.id);
                // return lista.map(function(elementoLista) { return elementoLista.id })
            },

            getItemById: function(id) {
                let itemFind = lista.filter(function(item) {
                    return item.id === id;
                });
                return itemFind.length ? itemFind[0] : false;
            },

            addItemToList: function(item) {
                lista.push(item);
            },

            removeItemFromList: function(index) {
                console.log(index);
                lista.splice(index, 1);
                console.log(lista);
            },

            removeItemById: function(id) {
                // prima trovo l'indice
                let ids = lista.map(e => e.id);
                let indexToRemove = ids.indexOf(id);

                // poi splaiso
                if (indexToRemove !== -1) {
                    lista.splice(indexToRemove, 1)
                }

            },

            getTotal: function() {

                let value = 0;

                lista.forEach(item => {
                    if (item.isPositive) {
                        value = value + item.amount;
                    } else {
                        value = value - item.amount;
                    }
                    // value += item.isPositive ? item.amount : item.amount * -1;
                })


                return value;

            }

        }

    }])
