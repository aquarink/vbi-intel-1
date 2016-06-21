admins.controller('loginController', function ($scope, $http, $location) {
    $scope.masukAdmin = function () {
        if (selfUrl == '::1') {
            selfUrl = 'localhost';
        }
        $http.post('http://' + selfUrl + '/api-vbi/vbi-api/admin/login', {
            'emailVbi': $scope.email,
            'passVbi': $scope.pass
        }).
        success(function (data) {
            var d = $scope.datanya = data;

            if (d[0].err === 'false') {
                console.log('login berhasil');
                document.cookie = 'token=true=' + d[1].enc_token;
                $location.path('/adminhome');
            } else {
                console.log('login gagal');
                $scope.pesan = 'Email atau Password Salah!';
                $scope.pass = '';
            }
        }).
        error(function (data, status, header, config) {
            console.log('D :' + data, 'S :' + status, 'H :' + header, 'C :' + config);
            $location.path('/admin');
            $scope.apply();
        })
    }
});

admins.controller('checkCookie', function ($scope, $http, $location) {
    if (selfUrl == '::1') {
        selfUrl = 'localhost';
    }
    $http.post('http://' + selfUrl + '/api-vbi/vbi-api/admin/login', {
        'emailVbi': $scope.email,
        'passVbi': $scope.pass
    }).
    success(function (data) {
        var d = $scope.datanya = data;

        if (d[0].err === 'false') {
            console.log('login berhasil');
            document.cookie = 'token=true=' + d[1].enc_token;
            $location.path('/adminhome');
        } else {
            console.log('login gagal');
            $scope.pesan = 'Email atau Password Salah!';
            $scope.pass = '';
        }
    }).
    error(function (data, status, header, config) {
        console.log('D :' + data, 'S :' + status, 'H :' + header, 'C :' + config);
        $location.path('/admin');
        $scope.apply();
    })
});