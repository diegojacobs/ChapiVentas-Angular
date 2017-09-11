(function() {
    'use strict';

    angular
        .module('app')
        .controller('calendarController', calendarController);

    calendarController.$inject = [
                                'calendarConfig',
                                'productsRepository',
                                'coursesRepository',
                                "$scope", 
                                "$rootScope",
                                '$window'
                                ];
    function calendarController(calendarConfig, productsRepository, coursesRepository, $scope, $rootScope, $window) {
        var vm = this;
        vm.calendarView = 'month';
        vm.viewDate = new Date();
        vm.eventClicked = eventClicked;
        vm.events = [];
        vm.cellIsOpen = true;
        vm.addEvent = addEvent;
        vm.toggle = toggle;
        vm.saveEvent = saveEvent;
        vm.deleteEvent = deleteEvent;
        vm.products = productsRepository.obtainAvailableProducts();
        coursesRepository
          .obtainAvailableCourses()
          .then(success)
          .catch(error);
        coursesRepository
            .obtainPromos()
            .then(promosSuccess)
            .catch(error);
        coursesRepository
            .obtainImportantDates()
            .then(datesSuccess)
            .catch(error);
        function saveEvent(){
            $window.alert("Successfully Saved!");
            coursesRepository
                .saveEvent(vm.activeEvent)
                .then(successGeneral)
                .catch(error);
        }
        function deleteEvent(){
            coursesRepository
                .deleteEvent(vm.activeEvent)
                .then(successDelete)
                .catch(error);
        }
        function successDelete(data){
            vm.events.splice(vm.events.indexOf(vm.activeEvent), 1);
            vm.activeEvent = undefined;

        }
        function successGeneral(data){
            console.log(data);
        }
        function success(data) {
          vm.courses = data;
        }
        function error(error) {
          console.log(error);
        };
        function datesSuccess(data){
            data.forEach(function(element) {
              vm.events.push({
                id: element._id,
                title: element.titulo,
                startsAt: new Date(element.fechaEvento),
                endsAt: new Date(element.fechaEvento),
                description: element.descripcion,
                color: {
                  primary: "#ebdb23",
                  secondary: "#ebdb23"
                },
                draggable: true,
                resizable: true,
                editable: false
              });
            }, this);
        }
        function promosSuccess(data){
            data.forEach(function(element) {
              vm.events.push({
                id: element._id,
                title: element.tipoPromocion.tipo,
                startsAt: new Date(element.fechaInicioPromo),
                endsAt: new Date(element.fechaFinalPromo),
                description: element.descripcionPromocion.descripcion,
                percentage: element.descuento,
                color: {
                  primary: element.color,
                  secondary: "#ebdb23"
                },
                draggable: true,
                resizable: true,
                editable: true
              });
            }, this);
        }
        function addEvent() {
            vm.events.push({
                id: "",
                title: 'New promotion',
                startsAt: moment().startOf('day').toDate(),
                endsAt: moment().endOf('day').toDate(),
                color: {
                    primary: "#f0f5f0",
                    secondary: "#f0f5f0"
                },
                draggable: true,
                resizable: true,
                editable: true
            });
            vm.activeEvent = vm.events[vm.events.length-1];
            $window.scrollTo(0, angular.element('table')[0].offsetTop);
        };
        function eventClicked(event) {
            if(event.editable == true){
                vm.activeEvent = event;
                $window.scrollTo(0, angular.element('table')[0].offsetTop);
            }
        };
        function toggle($event, field, event) {
            $event.preventDefault();
            $event.stopPropagation();
            event[field] = !event[field];
        };
        vm.timespanClicked = function(date, cell) {
            if (vm.calendarView === 'month') {
                if ((vm.cellIsOpen && moment(date).startOf('day').isSame(moment(vm.viewDate).startOf('day'))) || cell.events.length === 0 || !cell.inMonth) {
                vm.cellIsOpen = false;
                } else {
                vm.cellIsOpen = true;
                vm.viewDate = date;
                }
            } else if (vm.calendarView === 'year') {
                if ((vm.cellIsOpen && moment(date).startOf('month').isSame(moment(vm.viewDate).startOf('month'))) || cell.events.length === 0) {
                vm.cellIsOpen = false;
                } else {
                vm.cellIsOpen = true;
                vm.viewDate = date;
                }
            }

        };
    }
})();
// var actions = [{
        //         label: '<i class=\'glyphicon glyphicon-pencil\'></i>',
        //         onClick: function(args) {
        //             alert.show('Edited', args.calendarEvent);
        //         }
        //     }, {
        //         label: '<i class=\'glyphicon glyphicon-remove\'></i>',
        //         onClick: function(args) {
        //             alert.show('Deleted', args.calendarEvent);
        //         }
        //     }];
        // vm.events = [
        //     {
        //         title: 'An event',
        //         color: calendarConfig.colorTypes.warning,
        //         startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
        //         endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
        //         draggable: true,
        //         resizable: true,
        //         actions: actions,
        //         editable: true
        //     }, {
        //         title: '<i class="glyphicon glyphicon-asterisk"></i> <span class="text-primary">Another event</span>, with a <i>html</i> title',
        //         color: calendarConfig.colorTypes.info,
        //         startsAt: moment().subtract(1, 'day').toDate(),
        //         endsAt: moment().add(5, 'days').toDate(),
        //         draggable: true,
        //         resizable: true,
        //         actions: actions,
        //         editable: true
        //     }, {
        //         title: 'This is a really long event title that occurs on every year',
        //         color: calendarConfig.colorTypes.important,
        //         startsAt: moment().startOf('day').add(7, 'hours').toDate(),
        //         endsAt: moment().startOf('day').add(19, 'hours').toDate(),
        //         recursOn: 'year',
        //         draggable: true,
        //         resizable: true,
        //         actions: actions,
        //         editable: true
        //     }
        // ];
         // vm.eventEdited = function(event) {
        // alert.show('Edited', event);
        // };

        // vm.eventDeleted = function(event) {
        // alert.show('Deleted', event);
        // };

        // vm.eventTimesChanged = function(event) {
        // alert.show('Dropped or resized', event);
        // };