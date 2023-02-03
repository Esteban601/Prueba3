AmCharts.theme = AmCharts.themes.light;

if (locale == "es") {
    var chart1_title = "Colaboradores por división"
    var chart2_title = "Colaboradores por tipo de funciones"
} else {
    var chart1_title = "Colaboradores por división"
    var chart2_title = "Colaboradores por tipo de funciones"
}

var chart1 = AmCharts.makeChart("chart1", {
    "type": "pie",
    "titleField": "title",
    "valueField": "value",
    "titles": [
        {
            "text": chart1_title,
            "size": 15
        }
    ],
    "radius": "30%",
    "innerRadius": "0",
    "percentPrecision": "0",
    "labelRadiusField": "radius",
    "labelTickAlpha": 0.1,
    "colors": [
        '#03b7f1', '#3b5d87', '#cbcdce', '#0388cc', '#98cd48', '#e0f4fd', '#ed7028'
    ],
    "balloonText": "[[title]]:[[percents]]%",
    "labelText": "[[percents]]%",
    "dataProvider": [
        {
            "title": "Concesiones 1826",
            "value": 1826,
            // "radius": -40,
        },
        {
            "title": "Terminal del Puerto de Altamira 797",
            "value": 797,
            // "radius": -40
        },
        {
            "title": "Materiales e insumos 168",
            "value": 168,
            // "radius": -40
        },
        {
            "title": "Construcción 44",
            "value": 44,
            // "radius": 20
        },
        {
            "title": "Honorarios 47",
            "value": 47,
            "radius": 30
        },
        {
            "title": "Corporativo Central 156",
            "value": 156,
            "radius": 40
        },
    ],
    "legend": {
        "maxColumns": 1,
        "align": "center",
    },
});

var chart2 = AmCharts.makeChart("chart2", {
    "type": "pie",
    "titleField": "title",
    "valueField": "value",
    "titles": [
        {
            "text": chart2_title,
            "size": 15
        }
    ],
    "radius": "30%",
    "innerRadius": "0",
    "percentPrecision": "0",
    // "labelRadiusField": "radius",
    "labelTickAlpha": 0.1,
    "colors": [
        '#03b7f1', '#3b5d87', '#cbcdce', '#0388cc', '#98cd48', '#e0f4fd', '#ed7028'
    ],
    "balloonText": "[[title]]:[[percents]]%",
    "labelText": "[[percents]]%",
    "dataProvider": [
        {
            "title": "Administración 351",
            "value": 351,
            // "radius": -40,
        },
        {
            "title": "Operaciones 2618",
            "value": 2618,
            // "radius": -40
        },
        {
            "title": "Construcción e ingeniería 44",
            "value": 44,
            // "radius": -40
        },
        {
            "title": "Directivos relevantes 8",
            "value": 8,
            // "radius": 20
        },
        {
            "title": "Directivos 17",
            "value": 17,
            // "radius": 40
        },
    ],
    "legend": {
        "maxColumns": 1,
        "align": "center",
    },
});
