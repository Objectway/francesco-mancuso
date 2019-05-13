myApp
    .component("mtrArtistInformation",{
        bindings:{
            artistaId:'='
        },
        controller:function(mtrSearchService,mtrManualListService){
            const ctrl=this;
            ctrl.information=null;
            ctrl.$onInit=function() {
                console.log(ctrl.artistaId)
                mtrSearchService.getArtistInformation(ctrl.artistaId)
                .then(function(responseJson){
                    ctrl.information=(responseJson.data.results[0])
                })
                .catch(function(error){
                    console.log(error)
                })
            }
        },
        templateUrl:'./components/mtrArtistInformation/mtrArtistInformation.html'
    })