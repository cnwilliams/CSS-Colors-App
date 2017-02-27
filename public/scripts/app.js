angular
  .module("colorsApp", ["ngRoute"])
  .config(config);

config.$inject = ["$routeProvider", "$locationProvider"]

function config(   $routeProvider,   $locationProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "templates/colors-index.html",
      controllerAs: "cis",
      controller: "ColorsIndexController"
    })
    .when("/colors/:id", {
      templateUrl: "templates/colors-show.html",
      controllerAs: "csc",
      controller: "ColorsShowControler"
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    })
}