console.log("ColorsIndexController running!");

angular
  .module("colorsApp")
  .controller("ColorsIndexController", ColorsIndexController);

ColorsIndexController.$inject = ["$http"];
function ColorsIndexController(   $http ) {
  var vm = this;
  // vm.newColor = {};

  $http({
    method: "GET",
    url: "https://gist.githubusercontent.com/cnwilliams/7dc0acc39978358f2065c23276fe5193/raw/0adf0eca7f86a8cc476b29cb742512eabd58739f/webcolors.json"
  }).then(function onSuccess(response) {
    vm.colors = response.data.colors //add more
    console.log("Here is the vm.colors", vm.colors);
    console.log("here is response.data.colors.hex", response.data.colors.hex);
  },  function onError(response) {
    console.log("Error getting the data: ", response);
  }); // end of GET request

} // end of ColorsIndexController function