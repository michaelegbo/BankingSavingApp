var app = angular.module('app', ['ui.bootstrap', 'ngSanitize', 'angular.filter','ui.utils','ui.select']);



app.controller('DemoCtrl', function ($scope, $http, $timeout, $interval) {
  var vm = this;

  $scope.data = [{
      name: "Money Market Fund ",
      Number: 1,
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      Disclaimer: " The products and services on this website are offered by Stanbic IBTC Asset Management Limited (SIAML), a wholly owned subsidiary of Stanbic IBTC Holdings PLC (SIBTC) only in jurisdictions where and when they may lawfully be offered and the material on these pages is not intended for use by persons located in or resident in jurisdictions which restrict the use of the services or products we offer. While SIAML attempts to ensure that the contents within the pages of this Website are accurate, current, complete, fit for its intended purpose and compliant with the relevant Nigerian Legislation and regulations as at the date of issue, SIAML makes no representation or warranty, whether express or implied, as to the operation, integrity, availability or functionality of this Website or as to the accuracy, completeness or reliability of any information on this Website.You agree that every transaction executed on this Website or on the Online Subscription Platform is made with the knowledge that you are aware of the risks relating to such transactions and you permit SIAML to regard all activities you conduct or instructions sent after you enter your passwords and/or access codes as being authorized by you and SIAML shall not be held liable for any fraud that may occur based on SIAML's decision to act on this authority;SIAML will not accept any responsibility for information contained in any other sites which can be accessed by hypertext link from these pages or for these sites not being available at all times. None of the investments contained in this website are recommended. Please remember that past performance is not necessarily an indication of future performance. The value of units and shares and the income from these investments can go down as well as up and investors may not get back the amount originally invested. Exchange rate changes may cause the value of investments made by offshore investors to rise or fall. For further details on any of the Funds or products mentioned, please read the relevant offering document or prospectus",
      oneTime: "A unique and time sensitive access code used as added security on the Online Redemption Platform.This code does not replace the password you use to log on to the Website but provides a second layer of security. This access code will be sent to you via SMS and is valid for one online redemption session only.",
      Limitation: "For the purpose of this clause, 'we','us' or 'our' includes SIAML, as well as its affiliates, shareholders, employees, consultants, and agents. Although we have taken care to ensure that the content provided on the website is accurate, and that you suffer no loss or damage as a result of using it, the website is provided 'as is' and SIAML shall not be liable for any damages whatsoever, relating to your use of the Website or the Online Redemption Platform. SIAML, shall in no way be liable for any direct,indirect,incidental,special or consequential loss or damages which might arise from the use of , or reliance upon,any material or content contained in the Website or any linked Websites,even if SIAML has been advised of the possibility of such loss, expense,nclaim or damages. We shall not be liable for:<p> a.Any damages which you suffer as a result of a compromise of your password and / or access codes; <p> b.Any interruption, malfunction, downtime or other failure of the Website, Online Redemption Platform,third party system, databases or any component part thereof for whatever reason; <p> c.Any interruption, malfunction,downtime or other failure of services provided by third parties,including, without limitation,third party systems such as the public switched telecommunication service providers,internet service providers,local authorities and certification authorities; <p> d.Any event over which we have no direct control.You hereby indemnify us against all losses,costs,claims or damages which we incur on your behalf in respect of any third party arising from:<p> a.your use of this Website; <p> b.Unauthorized instructions executed which were not due to our negligence.",
      Termination: "SIAML may in its sole discretion terminate, suspend and modify this Website and/or your use of this Website, with or without notice to you. You agree that SIAML will not be liable to you in the event that it chooses to suspend, modify or terminate this Website or your use of this Website. SIAML is authorized and regulated by Securities & Exchange Commission as an investment adviser and portfolio manager. By clicking on the 'I AGREE' button you shall be deemed to have accepted and agreed to be bound by the terms of this Important Legal Notice.",
      Privacy: " If you choose to complete any of our on-line forms the personal information you provide will be used by SIAML to enable us answer your queries and to provide you with information about the products that are of interest to you. It may also be used to monitor the progress of your enquiry within SIAML and to register any subsequent sale of any of our products about which you have enquired. We may also use such information to update our website and keep you informed of further product information and site developments if you have indicated any such preference.<p>If you have appointed a financial adviser to act on your behalf, we will make details of the investment available to him and also send copies of correspondence to him where appropriate to enable him give you advice. The personal information you provide to us will be kept confidential. We will not sell or transfer the personal information that you provide us to third parties outside the SIBTC group for the purposes of marketing products or services to you. Agents and contractors of ours who are given access to the personal information that you provide us will be required to keep this information confidential and not to use it for any purpose other than to carry out the services they are providing for us.<p>Your personal data shall not be used or disclosed in any manner incompatible with the purposes for which they are held save that, circumstances may arise when we are required to disclose your personal information to third parties for purposes other than to support your customer relationship with us such as in a corporate divestiture or dissolution where we sell all or a portion of our business or assets (including our associated customer lists containing your personal information), or if disclosure is required by law or is pertinent to judicial or governmental investigations or proceedings.",
      img: "mutual.jpg",
      modalheader: "Terms and conditions"
    },
    {
      name: "Balance Fund",
      Number: 2,
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      img: "mutual.jpg",
      modalheader: "Terms and conditioning"
    },
    {
      name: "Bond Fund",
      Number: 3,
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      img: "mutual.jpg"
    },
    {
      name: "Imaan Fund",
      Number: 4,
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      img: "mutual.jpg"
    },
    {
      name: "Dollar Fund",
      Number: 5,
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      img: "mutual.jpg"
    },
    {
      name: "Nigerian equity Fund",
      Number: 6,
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      img: "mutual.jpg"
    },
    {
      name: "Ethical Fund",
      Number: 7,
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      img: "mutual.jpg"
    },
    {
      name: "Guaranteed investment fund",
      Number: 8,
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      img: "mutual.jpg"
    }



  ];







  vm.people = [{
        "eAccount": "C-00010822",
        "balance": "104063.41",
        "fID": "15000004",
        "fundName": "STANBIC IBTC GUARANTEED INVESTMENT FUND",
        "accountName": "MUSTAPHA TAOFEEKAT ADENIKE",
        "nav": "nav",
        "currency": "NGN"
    }, {
        "eAccount": "C-00010823",
        "balance": "104063.41",
        "fID": "15000004",
        "fundName": "STANBIC IBTC GUARANTEED INVESTMENT FUND",
        "accountName": "RAYYAN IREMIDE MUTAPHA",
        "nav": "nav",
        "currency": "NGN"
    }, {
        "eAccount": "C-00010831",
        "balance": "104039.93",
        "fID": "15000004",
        "fundName": "STANBIC IBTC GUARANTEED INVESTMENT FUND",
        "accountName": "RAYYAN IREMIDE MUSTAPHA",
        "nav": "nav",
        "currency": "NGN"
    }, {
        "eAccount": "C-00010832",
        "balance": "154180.36",
        "fID": "15000004",
        "fundName": "STANBIC IBTC BOND FUND",
        "accountName": "MUSTAPHA MUTAIRU OMOTOSHO",
        "nav": "nav",
        "currency": "NGN"
    }, {
        "eAccount": "C-00010834",
        "balance": "104039.93",
        "fID": "15000004",
        "fundName": "STANBIC IBTC DOLLAR FUND",
        "accountName": "MUSTAPHA TAOFEEKAT ADENIKE",
        "nav": "nav",
        "currency": "NGN"
    }, {
        "eAccount": "C-00011306",
        "balance": "500000.00",
        "fID": "06012017",
        "fundName": "STANBIC IBTC DOLLAR FUND",
        "accountName": "MUSTAPHA MUTAIRU OMOTOSHO",
        "nav": "nav",
        "currency": "USD"
    }];

});