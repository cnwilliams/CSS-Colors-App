console.log("app.js is running!")

angular
  .module("colorsApp", ["ngRoute"])
  .config(config);

config.$inject = ["$routeProvider", "$locationProvider"]

function config(   $routeProvider,   $locationProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "/templates/colors-index.html",
      controllerAs: "cic",
      controller: "ColorsIndexController"
    })
    .when("/colors/:hex", {
      templateUrl: "/templates/colors-show.html",
      controllerAs: "csc",
      controller: "ColorsShowController"
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    })
}