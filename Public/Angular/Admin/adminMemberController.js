admins.controller('loginController', function ($scope, $http, $location ) {
    $scope.masukAdmin = function () {
        $http.post('http://localhost/api-vbi/vbi-api/admin/login', {
            'emailVbi': $scope.email,
            'passVbi': $scope.pass
        }).
        success(function (data) {
            var d = $scope.datanya = data;

            if(d[0].err === 'false') {
                console.log('login berhasil');
                sessionStorage.setItem('sesi', '{"session":"true","memberToken":"'+d[1].enc_token+'"}');
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