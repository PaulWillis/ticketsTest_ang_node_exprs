(function () {
    "use strict";

    var theCurrentApp = angular.module("common.services" );

    theCurrentApp.factory("ticketResource", ["$resource", ticketResource]);


    function ticketResource($resource) {
        console.log('in ticketResource line9');
        return $resource("http://10.0.6.147/TicketWebServicePOCO/api/Tickets/:id")
    }

    function UserService() {
        console.log('in UserService');
        return {
            loading : true
        };
    }






}());
