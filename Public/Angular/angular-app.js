var pebs = angular.module("pebApp", ['ngRoute', 'ngResource']);

pebs.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.

        when('/', {
            templateUrl: 'Public/Page/landing.html',
            title: 'Selamat Datang'
        }).

        when('/404', {
            templateUrl: 'Public/Page/404.html',
            title: 'Selamat 404'
        }).

        when('/race', {
            templateUrl: 'Public/Page/race.html',
            title: 'Racing Event'
        }).

        when('/region', {
            templateUrl: 'Public/Page/region.html',
            title: 'Daftar Region Cabang'
        }).

        when('/chat', {
            templateUrl: 'Public/Page/chat.html',
            title: 'Nama Room Chat Room'
        }).

        // Akun
        when('/daftar', {
            templateUrl: 'Public/Page/register.html',
            title: 'Registrasi'
        }).

        when('/masuk', {
            templateUrl: 'Public/Page/login.html',
            title: 'Login'
        }).

        // Otherwise
        when('', {
            redirectTo: '/'
        }).

        otherwise({
            redirectTo: '/'
        });
    }]);

pebs.run(['$location', '$rootScope',
    function ($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            if (current.hasOwnProperty('$$route')) {
                $rootScope.title = current.$$route.title;

                var authSession = JSON.parse(sessionStorage.getItem('sesi'));

                if (!authSession) {
                    $rootScope.akun = '1';
                } else {
                    var sessions = authSession.session;
                    if (sessions == 'true') {
                        $rootScope.akun = '2';
                    } else {
                        $rootScope.akun = false;
                    }
                }
            }
        });
    }]);

pebs.controller('NavClass', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});
