admins.directive('fileNya', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            elem.bind('change', function () {
                $parse(attrs.fileNya).assign(scope, elem[0].files);
                scope.$apply();
            })
        }
    }
});


admins.controller('teamController', function ($scope, $http, $location) {
    $scope.regisTeam = function () {
        var formData = new FormData();
        angular.forEach($scope.files, function (file) {
            formData.append('filenya', file);
        });

        if (selfUrl == '::1') {
            selfUrl = 'localhost';
        }
        $http({
            method: 'POST',
            url: 'http://' + selfUrl + '/api-vbi/vbi-api/team/addnewteam',
            data: formData,
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        }).
        success(function (data) {
            console.log(data);
        }).
        error(function (data, status, header, config) {
            console.log('D :' + data, 'S :' + status, 'H :' + header, 'C :' + config);
        })

    }
});