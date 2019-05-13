myApp
    .component("mtrArtistInformation",{
        bindings:{
            artistaId:'='
        },
        controller:function(mtrSearchService,mtrManualListService){
            const ctrl=this;
            ctrl.$onInit=function() {
                console.log(ctrl.artistaId)
            }
        },
        templateUrl:'./components/mtrArtistInformation/mtrArtistInformation.html'
    })