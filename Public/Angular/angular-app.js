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

        when('/berita', {
            templateUrl: 'Public/Page/berita.html',
            title: 'Judul Berita'
        }).

        when('/chat', {
            templateUrl: 'Public/Page/chat.html',
            title: 'Nama Room Chat Room'
        }).

        when('/race', {
            templateUrl: 'Public/Page/race.html',
            title: 'Racing Event'
        }).

        when('/galeri', {
            templateUrl: 'Public/Page/galeri.html',
            title: 'Photo dan Video'
        }).

        when('/region', {
            templateUrl: 'Public/Page/region.html',
            title: 'Daftar Region Cabang'
        }).

        when('/teamrider', {
            templateUrl: 'Public/Page/teamrider.html',
            title: 'Team & Rider'
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
            }
        });
    }]);

pebs.controller('NavClass', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});
