var admins = angular.module("pebApp", ['ngRoute', 'ngResource']);

admins.config(['$routeProvider',
    function ($routeProvider) {

        $routeProvider.

        when('/admin', {
            resolve: {
                "check": function ($location) {

                    var kue = document.cookie;
                    var kueIndex = kue.split(';')[0];
                    var kueExplode = kueIndex.split('=');
                    var kueFinal = [{"session": kueExplode[0], "status": kueExplode[1], "token": kueExplode[2]}];
                    var kueStatus = kueFinal[0]['status'];

                    if(kueStatus == 'true') {
                        $location.path('/adminhome');
                    }

                }
            },
            templateUrl: 'Public/Page/Admin/adminLogin.html',
            controller: 'loginController',
            title: 'VBI Auth'
        }).

        when('/adminkeluar', {
            resolve: {
                "check": function ($location) {

                    var date = new Date();
                    date.setTime(date.getTime()+(1*1000));
                    var expires = "expires="+date.toGMTString();

                    document.cookie = 'token=false=null;'+expires;
                    var kue = document.cookie;
                    var kueIndex = kue.split(';')[0];
                    var kueExplode = kueIndex.split('=');
                    var kueFinal = [{"session": kueExplode[0], "status": kueExplode[1], "token": kueExplode[2]}];
                    var kueStatus = kueFinal[0]['status'];

                    if(kueStatus == 'false') {
                        $location.path('/admin');
                    }

                }
            }
        }).

        when('/adminhome', {
            resolve: {
                "check": function ($location) {

                    var kue = document.cookie;
                    var kueIndex = kue.split(';')[0];
                    var kueExplode = kueIndex.split('=');
                    var kueFinal = [{"session": kueExplode[0], "status": kueExplode[1], "token": kueExplode[2]}];
                    var kueStatus = kueFinal[0]['status'];

                    if(kueStatus == 'false') {
                        $location.path('/admin');
                    }
                }
            },
            templateUrl: 'Public/Page/Admin/adminHome.html',
            title: 'Selamat Datang'
        }).

        when('/adminregion', {
            resolve: {
                "check": function ($location) {

                    var kue = document.cookie;
                    var kueIndex = kue.split(';')[0];
                    var kueExplode = kueIndex.split('=');
                    var kueFinal = [{"session": kueExplode[0], "status": kueExplode[1], "token": kueExplode[2]}];
                    var kueStatus = kueFinal[0]['status'];

                    if(kueStatus == 'false') {
                        $location.path('/admin');
                    }
                }
            },
            templateUrl: 'Public/Page/Admin/adminRegion.html',
            controller: 'regionController',
            title: 'Region'
        }).

        when('/adminteam', {
            resolve: {
                "check": function ($location) {

                    var kue = document.cookie;
                    var kueIndex = kue.split(';')[0];
                    var kueExplode = kueIndex.split('=');
                    var kueFinal = [{"session": kueExplode[0], "status": kueExplode[1], "token": kueExplode[2]}];
                    var kueStatus = kueFinal[0]['status'];

                    if(kueStatus == 'false') {
                        $location.path('/admin');
                    }
                }
            },
            templateUrl: 'Public/Page/Admin/adminTeam.html',
            title: 'Team'
        }).

        when('/404', {
            templateUrl: 'Public/Page/404.html',
            title: 'Selamat 404'
        }).

        // Otherwise
        otherwise({
            redirectTo: '/admin'
        });
    }
]);

admins.run(['$location', '$rootScope',
    function ($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current) {
            if (current.hasOwnProperty('$$route')) {
                $rootScope.title = current.$$route.title;
                $rootScope.urls = $location.path();
            }
        });
    }
]);

admins.controller('NavClass', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});