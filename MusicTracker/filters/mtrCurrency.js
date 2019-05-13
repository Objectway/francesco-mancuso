myApp.filter('mtrCurrency', function() {
        return function(x) {
            let out=Math.round(x*100)/100;
            return out;
        };
    });