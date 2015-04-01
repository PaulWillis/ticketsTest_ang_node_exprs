(function () {
    "use strict";

    var theCurrentApp = angular.module("common.services" );

    theCurrentApp.factory("ticketResource", ["$resource", ticketResource]);


    function ticketResource($resource) {
        console.log('in ticketResource line9');
        return $resource("http://10.0.6.147/TicketWebService/api/Tickets/:id")
    }


}());
