//initial code taken from http://jsfiddle.net/wdP6s/15/ 
jQuery(function() {
    globalmin = 0;
    globalmax = 14 * 24 * 3600000;
    // Create the chart    
    window.chart1 = new Highcharts.StockChart({
        chart: {
            renderTo: 'container1'
        },

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
                        chart2.xAxis[0].setExtremes(e.min, e.max);
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

    window.chart2 = new Highcharts.StockChart({
        chart: {
            renderTo: 'container2'
        },

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
                        chart1.xAxis[0].setExtremes(e.min, e.max);
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
            data: MSFT}]
    });
});
