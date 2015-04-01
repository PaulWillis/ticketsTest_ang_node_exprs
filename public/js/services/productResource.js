(function () {
    "use strict";

    var theCurrentApp = angular.module("common.services" );

    theCurrentApp.factory("productResource", ["$resource", productResource]);
    theCurrentApp.factory("mything", ["$resource", mything]);

    function productResource($resource) {
        console.log('in productResource line8');
        return $resource("http://10.0.6.147/Service.MetroEQuotesLOB/api/products/:id")
    }

    function mything($resource) {
        console.log('in mything line8');

    }


}());
