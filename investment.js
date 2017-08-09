//Angularjs and jquery.datatable with ui.bootstrap and ui.utils

var app=angular.module('formvalid', ['ui.bootstrap','ui.utils','angular.filter']);
app.controller('validationCtrl', ['$scope', invoice]);



function invoice($scope){
 
  

    $scope.item = [{
        "eAccount": "C-00010822",
        "balance": 104063.41,
        "fID": "15000004",
        "fundName": "STANBIC IBTC GUARANTEED INVESTMENT FUND",
        "accountName": "MUSTAPHA TAOFEEKAT ADENIKE",
        "nav": "nav",
        "currency": "NGN"
    }, {
        "eAccount": "C-00010823",
        "balance": 104063.41,
        "fID": "15000004",
        "fundName": "STANBIC IBTC GUARANTEED INVESTMENT FUND",
        "accountName": "RAYYAN IREMIDE MUTAPHA",
        "nav": "nav",
        "currency": "NGN"
    }, {
        "eAccount": "C-00010831",
        "balance": 104039.93,
        "fID": "15000004",
        "fundName": "STANBIC IBTC GUARANTEED INVESTMENT FUND",
        "accountName": "RAYYAN IREMIDE MUSTAPHA",
        "nav": "nav",
        "currency": "NGN"
    }, {
        "eAccount": "C-00010832",
        "balance": 154180.36,
        "fID": "15000004",
        "fundName": "STANBIC IBTC BOND FUND",
        "accountName": "MUSTAPHA MUTAIRU OMOTOSHO",
        "nav": "nav",
        "currency": "NGN"
    }, {
        "eAccount": "C-00010834",
        "balance": 104039.93,
        "fID": "15000004",
        "fundName": "STANBIC IBTC DOLLAR FUND",
        "accountName": "MUSTAPHA TAOFEEKAT ADENIKE",
        "nav": "nav",
        "currency": "NGN"
    }, {
        "eAccount": "C-00010834",
        "balance": 104039.93,
        "fID": "15000004",
        "fundName": "STANBIC IBTC DOLLAR FUND",
        "accountName": "MUSTAPHA TAOFEEKAT ADENIKE",
        "nav": "nav",
        "currency": "NGN"
    }, {
        "eAccount": "C-00010834",
        "balance": 104039.93,
        "fID": "15000004",
        "fundName": "STANBIC IBTC DOLLAR FUND",
        "accountName": "MUSTAPHA TAOFEEKAT ADENIKE",
        "nav": "nav",
        "currency": "NGN"
    }, {
        "eAccount": "C-00010834",
        "balance": 104039.93,
        "fID": "15000004",
        "fundName": "STANBIC IBTC DOLLAR FUND",
        "accountName": "MUSTAPHA TAOFEEKAT ADENIKE",
        "nav": "nav",
        "currency": "NGN"
    }, {
        "eAccount": "C-00010834",
        "balance": 104039.93,
        "fID": "15000004",
        "fundName": "STANBIC IBTC DOLLAR FUND",
        "accountName": "MUSTAPHA TAOFEEKAT ADENIKE",
        "nav": "nav",
        "currency": "NGN"
    }, {
        "eAccount": "C-00010834",
        "balance": 104039.93,
        "fID": "15000004",
        "fundName": "STANBIC IBTC DOLLAR FUND",
        "accountName": "MUSTAPHA TAOFEEKAT ADENIKE",
        "nav": "nav",
        "currency": "NGN"
    }, {
        "eAccount": "C-00010834",
        "balance": 104039.93,
        "fID": "15000004",
        "fundName": "STANBIC IBTC DOLLAR FUND",
        "accountName": "MUSTAPHA TAOFEEKAT ADENIKE",
        "nav": "nav",
        "currency": "NGN"
    }, {
        "eAccount": "C-00011306",
        "balance": 500000.00,
        "fID": "06012017",
        "fundName": "STANBIC IBTC DOLLAR FUND",
        "accountName": "MUSTAPHA MUTAIRU OMOTOSHO",
        "nav": "nav",
        "currency": "USD"
    }];

 $scope.getTotal = function(type) {
        var total = 0;
        angular.forEach($scope.item, function(el) {
            total += el[type];
        });
        return total;
    };

$scope.dataTableOpt = {
   //custom datatable options 
  // or load data through ajax call also
  "aLengthMenu": [[5, 10, 50, 100,-1], [5,10, 50, 100,'All']],
  };


}