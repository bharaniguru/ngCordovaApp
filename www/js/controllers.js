angular.module('starter.controllers', [])
 
.controller('AppCtrl', function() {})
 
.controller('DeviceCtrl', function($ionicPlatform, $scope, $cordovaDevice) {
    $ionicPlatform.ready(function() {
        $scope.$apply(function() {
            // sometimes binding does not work! :/
 
            // getting device infor from $cordovaDevice
            var device = $cordovaDevice.getDevice();
 
            $scope.manufacturer = device.manufacturer;
            $scope.model = device.model;
            $scope.platform = device.platform;
            $scope.uuid = device.uuid;
 
        });
 
    });
})
.controller('BatteryCtrl', function($ionicPlatform, $rootScope, $scope, $cordovaBatteryStatus) {
 
    $ionicPlatform.ready(function() {
 
        // This code never worked on my Samsung Note III
        $rootScope.$on('$cordovaBatteryStatus:status', function(result) {
            $scope.$apply(function() {
                // sometimes binding does not work! :/
                console.log(result);
                $scope.batteryLevel = result.level; // (0 - 100)
                $scope.isPluggedIn = result.isPlugged; // bool
            });
        });
 
        // But this code works!!
        // $scope.onBatteryStatus = function(result) {
        //     $scope.batteryLevel = result.level; // (0 - 100)
        //     $scope.isPluggedIn = result.isPlugged; // bool
        // }
 
        // if (!$rootScope.batteryEvtAttached) {
        //     // prevent from registering multiple times
        //     // Ideally needs to be added in .run()
        //     // This is for the sake of example
 
        //      window.addEventListener('batterystatus', $scope.onBatteryStatus, false);
        //     $rootScope.batteryEvtAttached = true;
        // }
    });
})