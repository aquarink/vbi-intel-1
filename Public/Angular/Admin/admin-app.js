var admins = angular.module("pebApp", ['ngRoute', 'ngResource']);

admins.config(['$routeProvider',
    function ($routeProvider) {

        $routeProvider.

        when('/admin', {
            resolve: {
                "check": function ($location) {
                    var authSession = JSON.parse(sessionStorage.getItem('sesi'));

                    if (!authSession) {
                        console.log('Session Empty');
                    } else {
                        var sessions = authSession.session;
                        if (sessions == 'true') {
                            $location.path('/adminhome');
                        } else {
                            $location.path('/admin')
                        }
                    }
                }
            },
            templateUrl: 'Public/Page/Admin/adminLogin.html',
            controller: 'loginController',
            title: 'Selamat Datang Bro'
        }).

        when('/adminkeluar', {
            resolve: {
                "check": function ($location) {
                    var authSession = JSON.parse(sessionStorage.getItem('sesi'));

                    if (!authSession) {
                        $location.path('/admin');
                    } else {
                        var sessions = authSession.session;
                        if (sessions == 'true') {
                            sessionStorage.clear();
                            $location.path('/admin');
                        }
                    }
                }
            }
        }).

        when('/adminhome', {
            resolve: {
                "check": function ($location) {
                    var authSession = JSON.parse(sessionStorage.getItem('sesi'));

                    if (!authSession) {
                        $location.path('/admin');
                    } else {
                        var sessions = authSession.session;
                        if (sessions == 'true') {

                        } else {
                            $location.path('/admin');
                        }
                    }
                }
            },
            templateUrl: 'Public/Page/Admin/adminHome.html',
            title: 'Selamat Datang Om'
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
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
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
