myApp
    .component('mtTracker', {
        controller: function() {

            var ctrl = this;

            ctrl.lista = [
                {
                    amount: 100,
                    description: 'pranzo'
                },
                {
                    amount: 1,
                    description: 'caffe'
                },
                {
                    amount: 1.5,
                    description: 'metro'
                }
            ];

        },
        templateUrl: 'components/mtTracker/mtTracker.html'
    })
