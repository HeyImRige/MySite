    

// create our angular app and inject ui.bootstrap
var angularApp = angular.module('angularApp', ['ui.bootstrap','ngAnimate']);

angularApp.controller('mainController',['$scope','$sce','$window', function($scope,$sce,$window) {
    $scope.windowWidth;

    $scope.isCollapsed;
    $scope.myAnimationButton = function(changeType) {
        console.log("in button");
        $scope.animationBool =!$scope.animationBool;
        setTimeout(function(){
            if(changeType.localeCompare('software')==0){
                $scope.software=true;
                $scope.audio=false;
                $('#software').addClass('current');
                $('#audio').removeClass('current');
                $('#both').removeClass('current');
            }
            if(changeType.localeCompare('audio')==0){
                $scope.software=false;
                $scope.audio=true;
                $('#software').removeClass('current');
                $('#audio').addClass('current');
                $('#both').removeClass('current');
            }
            if(changeType.localeCompare('both')==0){
                $scope.software=true;
                $scope.audio=true;
                $('#software').removeClass('current');
                $('#audio').removeClass('current');
                $('#both').addClass('current');
            }
            $scope.animationBool =!$scope.animationBool;
            $scope.$apply();
            }, 500);
    };
    $scope.to_trusted = function(html_code) {
        return $sce.trustAsResourceUrl(html_code); };
    $scope.customFilter = function(item){
            if(item.type.localeCompare("software")==0&&$scope.software){
                return true;
            }
            if(item.type.localeCompare("audio")==0&&$scope.audio){
                return true;
            }
    };
}]);
angularApp.directive('resize', function ($window) {
    return function (scope, element) {
        var w = angular.element($window);
        scope.getWindowDimensions = function () {
            return {
                'h': w.height(),
                'w': w.width()
            };
        };
        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
            
            scope.windowWidth = newValue.w;
            scope.flexType = function(){
                if(scope.windowWidth>700){
                    return {
                        'flex-direction': 'row',
                        'align-items': 'stretch'

                    };
                }
                else{
                    return{
                        'flex-direction':'column',
                        'align-items': 'center'
                    };
                }
            }
            scope.style = function () {
                if(scope.windowWidth>1000){
                    return {
                        'width': '590px'
                    };
                }else if(scope.windowWidth>700){
                    return {
                        'width':  Math.floor(scope.windowWidth*(0.6)) + 'px'
                    };
                }
                else{
                    return {
                        'width': Math.floor(scope.windowWidth*(.9)) + 'px'
                    };
                }
            };
            scope.videostyle = function () {
                if(scope.windowWidth>1000){
                    return {
                        'height': '225px',
                        'width': '400px'
                    };
                }
                else if(scope.windowWidth>700){
                    return { 
                        'height': Math.floor(scope.windowWidth*(0.225)) + 'px',
                        'width': Math.floor(scope.windowWidth*(0.4)) + 'px'
                    };
                }
                else{
                    return {
                        'height': Math.floor(scope.windowWidth*(9/16)) + 'px',
                        'width': Math.floor(scope.windowWidth) + 'px'
                    };
                }
            };
        }, true);

        w.bind('resize', function () {
            scope.$apply();
        });
    }
})
