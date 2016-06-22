admins.controller('regionController', function ($scope, $http, $location, $interval) {

    $scope.regisRegion = function (region) {
        var kue = document.cookie;
        var kueIndex = kue.split(';')[0];
        var kueExplode = kueIndex.split('=');
        var kueFinal = [{"session": kueExplode[0], "status": kueExplode[1], "token": kueExplode[2]}];
        var kueStatus = kueFinal[0]['status'];
        if (kueStatus == 'true') {
            if (selfUrl == '::1') {
                selfUrl = 'localhost';
            }
            $http.post('http://' + selfUrl + '/api-vbi/vbi-api/region/addnew', {
                'wilayahRegion': $scope.region.wilayah,
                'pengurusRegion': $scope.region.pengurus,
                'koordinatRegion': $scope.region.koordinat,
                'auth': kueExplode[2]
            }).
            success(function (data) {
                $scope.datanya = data;
                $scope.region = '';
                $scope.allRegion();
            }).
            error(function (data, status, header, config) {
                console.log('D :' + data, 'S :' + status, 'H :' + header, 'C :' + config);
                $location.path('/admin');
                $scope.apply();
            })
        }
    }

    $scope.allRegion = function () {
        var kue = document.cookie;
        var kueIndex = kue.split(';')[0];
        var kueExplode = kueIndex.split('=');
        var kueFinal = [{"session": kueExplode[0], "status": kueExplode[1], "token": kueExplode[2]}];
        var kueStatus = kueFinal[0]['status'];
        if (kueStatus == 'true') {
            if (selfUrl == '::1') {
                selfUrl = 'localhost';
            }
            $http.get('http://' + selfUrl + '/api-vbi/vbi-api/region/allreg').
            success(function (data) {
                $scope.allReg = data;
            }).
            error(function (data, status, header, config) {
                console.log('D :' + data, 'S :' + status, 'H :' + header, 'C :' + config);
                $location.path('/admin');
                $scope.apply();
            })
        }
    }
});