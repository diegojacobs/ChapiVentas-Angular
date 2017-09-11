(function(){
	'use strict';

	angular
	.module('app')
	.factory('coursesRepository', coursesRepository);

	coursesRepository.$inject = ['$http'];

	function coursesRepository($http){
		var service = {
            obtainAvailableCourses: obtainAvailableCourses,
            obtainImportantDates: obtainImportantDates,
			obtainPromos: obtainPromos,
			saveEvent: saveEvent,
            deleteEvent: deleteEvent,
			date: new Date(),
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
        function deleteEvent(event){
			return $http({
				method: "POST",
				url: "http://13.58.81.154/api/promocion/delete",
				data: {
					"id": event.id,
				},
				headers: {
					accept: "application/json"
				}
			})
		}
        function saveEvent(event){
			return $http({
				method: "POST",
				url: "http://13.58.81.154/api/promocion",
				data: {
					"tipo": event.title,
					"descuento": event.percentage,
					"descripcion": event.description,
					"fechaInicioPromo": event.startsAt,
					"fechaFinalPromo": event.endsAt,
                    "color": event.color.primary
				},
				headers: {
					accept: "application/json"
				}
			})
		}
		function obtainPromos(startDate = new Date(service.date.getFullYear(), service.date.getMonth(), 1), endDate = new Date(service.date.getFullYear(), service.date.getMonth() + 1, 0)) {
      //return service.defaultDates;
			return $http({
				method: "GET",
				url: "http://13.58.81.154/api/promocion/query",
				params: {
					fechaInicio: startDate,
					fechaFinal: endDate
				},
				headers: {
					accept: "application/json"
				}
			})
			.then(success)
			.catch(error);
    	}
		function obtainImportantDates(month){
			return $http({
				method: "GET",
				url: "http://13.58.81.154/api/carrera/fecha",
				headers: {
					accept: "application/json"
				}
			})
			.then(success)
			.catch(error);
		}
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
