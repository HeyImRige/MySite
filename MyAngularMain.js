var angularApp = angular.module('angularApp', ['ui.bootstrap','ngAnimate']);

angularApp.controller('mainController',['$scope','$sce','$window', function($scope,$sce,$window) {
    $scope.windowWidth;
    $scope.test;
    $scope.isCollapsed;
    $scope.software=true;
    $scope.audio=true;
    $scope.softwareBtn=true;
    $scope.audioBtn=true;
    $scope.animationBool=true;
    /*TODO: move this data into a json file */ 
    $scope.projects = [
        
        {"type":"audio","date":1462597200000 ,"title":"[Future Bass] Candy","media":"https://www.youtube.com/embed/xNQH2ZLkUi4","content":"'Candy!' is a future bass track. Following the general trend of future bass tracks, it contains bits of short synths and samples that give the track a cute tone and sound. Many of the elements are samples that are pitched up to produce a chipmunk style, while synths maintain a simple and clean quality that prevents that from becoming too harsh.","contentSmall":"'Candy!' is a future bass track. Following the general trend of future bass tracks, it contains bits of short synths and samples that give the track a cute tone and sound."},
        {"type":"audio","date":1474174800000,"title":"[Drumstep] Overwatch Victory Remix","media":"https://www.youtube.com/embed/LAGoi9QgShk","content":"Overwatch remix yeah yeah yeah"},
        {"type":"audio","date":1473051600000,"title":"[Epic Movie Trailer] An Adversary","media":"https://www.youtube.com/embed/gVGhPOorDr4","content":"Track in the styel movie trailer yeah yeah"},
         {"type":"audio","date":1471669200000,"title":"[Progressive House] Burning","media":"https://www.youtube.com/embed/SMBXaJPF9sM","content":"'Burning' is a progressive house track. The track features female vocals that are complimented by a driving rythmic chord progression. Many of the lead synths are short samples of vocal chops, as per the style. 'Burning' is promoted by the indie label 'Phantom Stone Records'.","additionalLink":"https://soundcloud.com/phantomstonerecords/progressive-house-rige-burning-phantom-stone-release","additionalText":"View on Soundcloud"},
        {"type":"software","date":1460869200000,"title":"Never Late Smart Alarm","media":"smartAlarm.jpg","content":"Never late smart alarm is a native android application. Type in your destination and time you need to be there, and it will notify you when you need to leave. Google traffic data is called in real time, so you wont be surprised by wrecks on your commute to work. Sudden snow storms or road closing are no worry either. Sleep easy!","additionalLink":"http://devpost.com/software/neverlate-smartalarm-1vyjbi","contentSmall":"Never late smart alarm is a native android application. It uses real time google traffic data, so you'll never be late due to traffic!","additionalText":"Read more on Devpost"},
        {"type":"software","date":1476334800000,"title":"This Site!","media":"websiteGif.gif","content":"This is my site! The project was a way for me to experiement with angular and bootstrap. An additional perk was a way to show off some of the projects I have worked on. It is scaleable, both in size in terms of window size, and additional data being added.","contentSmall":"This is my site! The project was a way for me to experiement with angular and bootstrap. An additional perk was a way to show off some of the projects I have worked on. It is scaleable, both in size in terms of window size, and additional data being added."},
        {"type":"software","date":1460610000000,"title":"UTA Now","media":"UtaNow.jpg","content":"'UTA NOW' is a mobile application developed by mobi. My person contribution was work to the back end firebase server and front end andriod application. The tool allows UTA students to sign up with an account, and add events that happen around UTA. As a student you can browse through events that are going to happen around campus and set yourself to attend the event. You will be reminded when the even time gets closer. Great for looking for activties and things to do around campus.","":""},
        {"type":"software","date":1420113600,"title":"Mav Schedueling Service","media":"imgur.com","content":"helps make your schedule for school","additionalLink":"https://github.com/GroupOmicron/MSS2","additionalText":"Read more on Github"}
    ];
    $scope.myAnimationButton = function(changeType) {
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
                        'width': '610px'
                    };
                }else if(scope.windowWidth>700){
                    return {
                        'width':  scope.windowWidth-Math.floor(scope.windowWidth*(0.4))+'px'
                    };
                }
                else{
                    return {
                        'width': 'inherit'
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
