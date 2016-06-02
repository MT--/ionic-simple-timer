// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', [ 'ionic' ])

  .controller('MainCtrl',
    function ( $log,
               $scope,
               $timeout ) {

      $log.log('Hello from MainCtrl');

      // set some defaults
      var _timer;
      $scope.isCountingDown = false;
      $scope.countdown = 0;
      $scope.seconds = 0;

      // start or stop the timer
      $scope.startTimer = function () {
        $scope.isCountingDown = true;

        _timer = $timeout(function () {
          $log.log($scope.countdown);
          $scope.countdown--;
          $scope.startTimer();
        }, 1000);
      };

      // take input from field
      $scope.setTimer = function () {
        $scope.countdown = $scope.seconds;
      };

      // reset timer to zero
      $scope.resetTimer = function () {
        $scope.isCountingDown = false;
        $scope.countdown = 0;
        $timeout.cancel(_timer);
      };

    })

  //--------------------------------
  .run(function ( $ionicPlatform ) {
    $ionicPlatform.ready(function () {
      if ( window.cordova && window.cordova.plugins.Keyboard ) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if ( window.StatusBar ) {
        StatusBar.styleDefault();
      }
    });
  })
