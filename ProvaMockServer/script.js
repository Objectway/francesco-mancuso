
fetch('/rest/v1/authors/')
    .then(function(response){
        return response.json();
    })
    .then(function(myJson){
        console.log(JSON.stringify(myJson))
    })





