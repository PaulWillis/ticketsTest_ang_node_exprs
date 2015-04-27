(function () {
    "use strict";

    var myMod = angular.module("scotchTodo");
    myMod.controller("TicketDetailCtrl", [ "ticket",  TicketDetailCtrl ]);


    function TicketDetailCtrl(ticket) {
        var vm = this;

        console.log('in TicketDetailCtrl ');

        //function callbackSetData (data) {
        //    vm.tickets = data;
        //}

        //ticketResource.query(callbackSetData);

        vm.ticket = ticket;

        vm.title = "Trouble Ticket Id: "  + vm.ticket.reportNum+ "";



        vm.submit = function(all){
          var serverurl ='http://10.0.6.147/TicketWebService/api/CloseTicket';
          var tt = {TicketNumber: all.reportNum
                , TechName : all.accountName };
          var header = 'Content-Type=application/json; charset=UTF-8';
          $.post( serverurl, tt)
              .done(function( data ) {
                //alert( "Data Loaded: " + data );
            });

        };

    }

}());
