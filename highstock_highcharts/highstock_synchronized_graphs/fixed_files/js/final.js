//live test at http://jsfiddle.net/russellmazonde/f8a3ufey/
$(function () {
    globalmin = 0;
    globalmax = 14 * 24 * 3600000;
    // Create the chart    
    $('#container1').highcharts('StockChart', {
        rangeSelector: {
            selected: 1
        },

        title: {
            text: 'chart1'
        },
        navigator: {
            enabled: false
        },
        scrollbar: {
            enabled: false
        },
        xAxis: {
            maxZoom: 14 * 24 * 3600000, // fourteen days
            events: {
                setExtremes: function(e) {
                    if (globalmin == e.min && globalmax == e.max) {
                        return 0;
                    } else {
                        globalmin = e.min;
                        globalmax = e.max;
                        var xAxis = $('#container2').highcharts()
                        xAxis.xAxis[0].setExtremes(e.min, e.max);
                        return 1;
                    }
                }
            }
        },
        yAxis: {
            title: {
                text: 'value'
            }
        },

        series: [{
            data: GOOGL}]
    });

    $('#container2').highcharts('StockChart', {
        rangeSelector: {
            selected: 1
        },

        xAxis: {
            maxZoom: 14 * 24 * 3600000, // fourteen days
            events: {
                setExtremes: function(e) {
                    if (globalmin == e.min && globalmax == e.max) {
                        return 0;
                    } else {
                        globalmin = e.min;
                        globalmax = e.max;
                        var xAxis = $('#container1').highcharts()
                        xAxis.xAxis[0].setExtremes(e.min, e.max);
                        return 1;
                    }
                }
            }
        },
        title: {
            text: 'chart2'
        },
        yAxis: {
            title: {
                text: 'value'
            }
        },

        series: [{
            data: MSFT}]
    });
});
