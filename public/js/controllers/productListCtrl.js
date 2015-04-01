(function () {
    "use strict";

    var myMod = angular.module("scotchTodo");
    myMod.controller("ProductListCtrl", ["productResource", ProductListCtrl]);

    function ProductListCtrl(productResource) {
        var vm = this;

        console.log('in ProductListCtrl  productResource ');

        productResource.query(function (data) {
            vm.products = data;
        });



        vm.showImage = false;

        vm.toggleImage = function () {
            vm.showImage = !vm.showImage;
        };

    }

}());
