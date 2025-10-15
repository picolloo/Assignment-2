var vg_1 = "js/choropleth_map_rainfall_bar.vg.json";
vegaEmbed("#map", vg_1).then(function(result) {
}).catch(console.error);

var vg_2 = "js/rainfall_boxplot.vg.json";
vegaEmbed("#boxplot", vg_2).then(function(result) {
}).catch(console.error);

var vg_3 = "js/flood_loss_stacked_bar.vg.json";
vegaEmbed("#stackedbar", vg_3).then(function(result) {
}).catch(console.error);