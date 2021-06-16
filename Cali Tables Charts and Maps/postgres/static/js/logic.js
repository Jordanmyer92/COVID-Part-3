
var queryUrl = "https://alshamsi1996.github.io/final_data.geojson";
var queryUrl2 = "https://alshamsi1996.github.io/gz_2010_us_050_00_500k.json";


    d3.json(queryUrl, function(Coviddata){
        
        L.geoJSON(Coviddata, {
          style: function (feature) {
            cases = feature.properties.cases;
            if (cases < 100000) {return {color :"black", fillColor: "#008000", fillOpacity: 0.5, dashArray: '3', weight: 2}}
            else if (cases < 200000) {return {color :"black", fillColor: "#7CFC00", fillOpacity: 0.5, dashArray: '3', weight: 2}}
            else if (cases < 300000) {return {color :"black", fillColor: "#F0E68C", fillOpacity: 0.5, dashArray: '3', weight: 2}}
            else if (cases < 400000) {return {color :"black", fillColor: "#FFD700", fillOpacity: 0.5, dashArray: '3', weight: 2}}
            else if (cases < 500000) {return {color :"black", fillColor: "#FFFF00", fillOpacity: 0.5, dashArray: '3', weight: 2}}
            else if (cases < 6000000) {return {color :"black", fillColor: "#FF4500", fillOpacity: 0.5, dashArray: '3', weight: 2}}
            else if (cases < 7000000) {return {color :"black", fillColor: "#F4A460", fillOpacity: 0.5, dashArray: '3', weight: 2}}
            else if (cases < 800000) {return {color :"black", fillColor: "#FA8072", fillOpacity: 0.5, dashArray: '3', weight: 2}}
            else if (cases < 900000) {return {color :"black", fillColor: "#FF6347", fillOpacity: 0.5, dashArray: '3', weight: 2}}
            else {return {color: "black", fillColor: "#FF0000", fillOpacity: 0.5, dashArray: '1', weight: 2}}
          }
        }).bindPopup(function (layer) {
          return layer.feature.properties.NAME;
        }).addTo(myMap);
  
    });

    d3.json(queryUrl2, function(data){
        // do something with your data
        // console.log(data);
        L.geoJSON(data, {
            style: function (feature) {
                return { color: 'black', 
                weight: 0.5 };
  
            }
        
    
        }).bindPopup(function (layer) {
          return layer.feature.properties.NAME;
        }).addTo(myMap)
    
    
    });



const myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
});

const streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
}).addTo(myMap);

var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/dark-v10",
    accessToken: API_KEY
});



/* Setting the legend to appear in the bottom right of our chart */
var legend = L.control({
    position: 'bottomleft'
});
    /* Adding on the legend based off the color scheme we have */
legend.onAdd = function (color) {
    var div = L.DomUtil.create('div', 'info legend');
    var levels = ['Cases >100,000', '100,000-200,000', '200,000-300,000', '300,000-400,000', '400,000-500,000', '500,000-600,000', '600,000-700,000', '700,000-800,000', '800,000-900,000','900,000+ Cases' ];
    var colors = ['#008000', '#7CFC00', '#F0E68C', '#FFD700', '#FFFF00', '#FF4500','#F4A460','#FA8072','#FF6347','#FF0000']
    for (var i = 0; i < levels.length; i++) {
                div.innerHTML += '<i style="background:' + colors[i] + '"></i>' + levels[i] + '<br>';
            }
        return div;
    }
legend.addTo(myMap);

