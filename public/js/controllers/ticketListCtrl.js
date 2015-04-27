(function () {
    "use strict";

     angular.module("scotchTodo")
      .controller("TicketListCtrl", [ "ticketResource", '$http', TicketListCtrl ]);


    function TicketListCtrl(ticketResource ,$http) {

  		//UserService.loading = true;

        var vm = this;
        vm.loading = true;


        console.log('in TicketListCtrl ');

        ticketResource.query(function (data) {
            vm.tickets = data;
    				vm.loading = false;
        });


        vm.submit = function(mymodel){

          console.log('showing object:'); console.log(mymodel);

          var serverurl ='https://tech.truvista.biz/TicketWebService/api/CloseTicket';
          var jsonObj = {TicketNumber: mymodel.reportNum
                , TechName : mymodel.accountName };
          var header = 'Content-Type=application/json; charset=UTF-8';

          $.post( serverurl, jsonObj)
            .done(function( data ) {

              //alert( "Data Loaded: " + data );
            });

        };

        vm.showImage = false;

        vm.toggleImage = function () {
            vm.showImage = !vm.showImage;
        };


    }

}());
