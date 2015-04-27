(function () {
    "use strict";

//   angular.module('scotchTodo', ['todoController', 'todoService']);



console.log('running app.js');
    var app = angular.module("scotchTodo",
                            ["common.services"
                            , "ui.router" ,'todoController', 'todoService'
                             ]); //setter method has [] to hold parameters

    app.config(["$stateProvider", "$urlRouterProvider",
            function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise("/");

                $stateProvider
                        .state("home_state", {
                            url: "/",
                            templateUrl: "ticketListView.html"
                        })

                        //Products
                        .state("productList_state", {
                            url: "/products",
                            templateUrl: "productListView.html",
                            controller: "ProductListCtrl as vm"
                        })

                        //Tickets
                        .state("ticketList_state", {
                            url: "/tickets",
                            templateUrl: "ticketListView.html",
                            controller: "TicketListCtrl as vm"
                        })


                        //Detail
                        .state("ticketDetail_state", {
                            url: "/tickets/:id",
                            templateUrl: "ticketDetailView.html",
                            controller: "TicketDetailCtrl as vm",
                            resolve: {
                                ticketResource: "ticketResource",
                                ticket: function (ticketResource, $stateParams) {
                                    var id = $stateParams.id;
                                     console.log('trying ticketResource -- id from $stateParam is:' + id);
                                    return ticketResource.get({ id: id }).$promise; //get method returns a single item. note query seems to work with real data and get works with mock

                                }
                            }
                        })








                    }
            ])


}());
