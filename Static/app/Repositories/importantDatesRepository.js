(function(){
	'use strict';

	angular
	.module('app')
	.factory('importantDatesRepository', importantDatesRepository);

	importantDatesRepository.$inject = ['$http'];

	function importantDatesRepository($http){
		var service = {
			obtainImportantDates: obtainImportantDates,
			obtainPromos: obtainPromos,
			saveEvent: saveEvent,
			date: new Date(),
            defaultDates:[
                {
                    title: "Math Exam",
                    startsAt: new Date("2017-08-16T12:00:00Z"),
                    endsAt: new Date("2017-08-16T14:00:00Z")
                }
            ]
		};

		return service;
		function saveEvent(event){
			return $http({
				method: "POST",
				url: "http://13.58.81.154/api/promocion",
				data: {
					"tipo": event.title,
					"descuento": event.percentage,
					"descripcion": event.description,
					"fechaInicioPromo": event.startsAt,
					"fechaFinalPromo": event.endsAt
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
				url: "http://13.58.81.154/api/promocion",
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
		function success(response) {
			return response.data;
		}

		function error(error) {
			return error.data;
		}
	}
})();
