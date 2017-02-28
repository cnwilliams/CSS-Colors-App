console.log("ColorsShowController running!");

angular
  .module("colorsApp")
  .controller("ColorsShowController", ColorsShowController);

ColorsShowController.$inject = ["$http", "$routeParams", "$location"];

function ColorsShowController(   $http,   $routeParams,   $location) {
  var vm = this;

  $http({
    method: "GET",
    url: "https://gist.githubusercontent.com/cnwilliams/7dc0acc39978358f2065c23276fe5193/raw/0adf0eca7f86a8cc476b29cb742512eabd58739f/webcolors.json"
  }).then(function handleGetByHex(json) {
    console.log("get by hex function running")
    var allColors = json.data.colors;
    console.log("allColors is ", allColors);
    for (var i = 0; i < allColors.length; i++){
      if ($routeParams.hex == allColors[i].hex){
         vm.color = allColors[i];
      }
    }
  }, function onError(json, err){
    console.log("There was an error requesting the specific color", err);
  }); // end of get by hex request

  // function handleGetByHex(json) {
  //     console.log("get by hex function running")
  //     var allColors = json.data;
  //     console.log("allColors is ", allColors);
  //     for (var i = 0; i < allColors.length; i++){
  //       if ($routeParams.hex == allColors[i]){
  //         return vm.color;
  //       }
  //     }

  }
