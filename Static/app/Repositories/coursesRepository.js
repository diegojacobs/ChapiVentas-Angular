(function(){
	'use strict';

	angular
	.module('app')
	.factory('coursesRepository', coursesRepository);

	coursesRepository.$inject = ['$http'];

	function coursesRepository($http){
		var service = {
            obtainAvailableCourses: obtainAvailableCourses,
            defaultCourses:[{
                    key: "Ingenieria Industria",
                    y: 5
                },
                {
                    key: "Psicologia",
                    y: 2
                },
                {
                    key: "Ingenieria Mecanica",
                    y: 9
                },
                {
                    key: "Antropologia",
                    y: 7
                },
                {
                    key: "Ingenieria Quimica",
                    y: 4
                },
                {
                    key: "Biologia",
                    y: 3
                },
                {
                    key: "Educación",
                    y: .5
                }
            ]
		};

		return service;
		function obtainAvailableCourses(){
            //return service.defaultCourses;
			return $http(
			{
				method: 'GET',
				url: "http://13.58.81.154/api/carrera",
				headers: {
                    "accept": "application/json"
				}
			}
			)
			.then(success)
			.catch(error);
		}
		function success(response) {
			return response.data;
		}

		function error(error) {
			return error.data;
		}
	}
})();
