(function () {
    "use strict";

    var myMod = angular.module("scotchTodo");
    myMod.controller("TicketListCtrl", ["ticketResource", TicketListCtrl]);

    function TicketListCtrl(ticketResource) {
        var vm = this;

        console.log('in TicketListCtrlticketResource ');

        ticketResource.query(function (data) {
            vm.tickets = data;
            console.log(data);
          //  console.log(data[0]);
        });



        vm.showImage = false;

        vm.toggleImage = function () {
            vm.showImage = !vm.showImage;
        };

    }

}());
