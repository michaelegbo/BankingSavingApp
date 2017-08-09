$('#modChart').on('shown.bs.modal', function (event) {
    var link = $(event.relatedTarget);
function resize(){    
    $("#canvas").outerHeight($(window).height()-$("#canvas").offset().top- Math.abs($("#canvas").outerHeight(true) - $("#canvas").outerHeight()));
  }
  $(document).ready(function(){
    resize();
    $(window).on("resize", function(){                      
        resize();
    });
  });

    var data = [{
        "price": "18.2800",
        "dt": "5/11/2017 12:00:00 AM"
    }, {
        "price": "18.3200",
        "dt": "5/14/2017 12:00:00 AM"
    }, {
        "price": "18.2800",
        "dt": "5/15/2017 12:00:00 AM"
    }, {
        "price": "18.3100",
        "dt": "5/16/2017 12:00:00 AM"
    }, {
        "price": "18.2500",
        "dt": "5/17/2017 12:00:00 AM"
    }, {
        "price": "18.3700",
        "dt": "5/18/2017 12:00:00 AM"
    }, {
        "price": "18.4000",
        "dt": "5/21/2017 12:00:00 AM"
    }, {
        "price": "18.3700",
        "dt": "5/22/2017 12:00:00 AM"
    }, {
        "price": "18.4600",
        "dt": "5/23/2017 12:00:00 AM"
    }, {
        "price": "18.4200",
        "dt": "5/24/2017 12:00:00 AM"
    }, {
        "price": "18.5100",
        "dt": "5/25/2017 12:00:00 AM"
    }, {
        "price": "18.4500",
        "dt": "5/28/2017 12:00:00 AM"
    }, {
        "price": "18.4500",
        "dt": "5/29/2017 12:00:00 AM"
    }, {
        "price": "18.5500",
        "dt": "5/30/2017 12:00:00 AM"
    }, {
        "price": "18.5400",
        "dt": "5/31/2017 12:00:00 AM"
    }, {
        "price": "18.4000",
        "dt": "6/1/2017 12:00:00 AM"
    }, {
        "price": "18.2100",
        "dt": "6/4/2017 12:00:00 AM"
    }, {
        "price": "18.5100",
        "dt": "6/5/2017 12:00:00 AM"
    }, {
        "price": "18.3800",
        "dt": "6/6/2017 12:00:00 AM"
    }, {
        "price": "18.3900",
        "dt": "6/7/2017 12:00:00 AM"
    }, {
        "price": "18.4700",
        "dt": "6/8/2017 12:00:00 AM"
    }, {
        "price": "18.4000",
        "dt": "6/11/2017 12:00:00 AM"
    }, {
        "price": "18.5300",
        "dt": "6/12/2017 12:00:00 AM"
    }, {
        "price": "18.5400",
        "dt": "6/13/2017 12:00:00 AM"
    }, {
        "price": "18.5800",
        "dt": "6/14/2017 12:00:00 AM"
    }, {
        "price": "18.4800",
        "dt": "6/15/2017 12:00:00 AM"
    }, {
        "price": "18.5200",
        "dt": "6/18/2017 12:00:00 AM"
    }, {
        "price": "18.4600",
        "dt": "6/19/2017 12:00:00 AM"
    }, {
        "price": "18.4000",
        "dt": "6/20/2017 12:00:00 AM"
    }, {
        "price": "18.4000",
        "dt": "6/21/2017 12:00:00 AM"
    }];
    var price = [];
    var date = [];

    data.map(function (n) {
        price.push(n.price);
        date.push(n.dt);

    });

    // get data source
    var source = link.attr('data-source').split(',');
    // get title
    var title = link.html();
    // get labels
    var table = link.parents('table');
    var labels = [];
    $('#' + table.attr('id') + '>thead>tr>th').each(function (index, value) {
        // without first column
        if (index > 0) {
            labels.push($(value).html());
        }
    });
    // get target source
    var target = [];
    $.each(labels, function (index, value) {
        target.push(link.attr('data-target-source'));
    });
    // Chart initialisieren
    var modal = $(this);
    var canvas = modal.find('.modal-body canvas');
    modal.find('.modal-title').html(title);
    var ctx = canvas[0].getContext("2d");

    Chart.defaults.global.animationSteps = 50;
    Chart.defaults.global.tooltipYPadding = 16;
    Chart.defaults.global.tooltipCornerRadius = 0;
    Chart.defaults.global.tooltipTitleFontStyle = "normal";
    Chart.defaults.global.tooltipFillColor = "rgba(0,160,0,0.8)";
    var chart = new Chart(ctx).Line({


        responsive: true,
        labels: date,
        datasets: [{
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: price
        }]
    }, {});
}).on('hidden.bs.modal', function (event) {
    // reset canvas size
    var modal = $(this);
    var canvas = modal.find('.modal-body canvas');
    canvas.attr('width', '568px').attr('height', '300px');
    // destroy modal
    $(this).data('bs.modal', null);
});