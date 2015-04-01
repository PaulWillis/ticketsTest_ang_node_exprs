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
                            templateUrl: "todoListView.html"
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
                    }
            ])


}());
