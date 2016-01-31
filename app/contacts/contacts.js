'use strict';

angular.module('myContacts.contacts', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactsCtrl'
  });
}])

.controller('ContactsCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {

    var ref = new Firebase('https://mycontacts-mcc.firebaseio.com/contacts');

    $scope.contacts = $firebaseArray(ref);

    $scope.showAddForm = function() {
        $scope.addFormShow = true;
    };

    $scope.addFormSubmit = function() {
        $scope.addFormShow = false;
    };
}]);