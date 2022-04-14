var map = L.map('map').setView([38.356855, -98.782616], 3.5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let cynIcon = L.icon({
    iconUrl: 'cyn.png',
    iconSize: [35,35]
});

let intDestinations = [
    {
        'id': 0,
        'title': 'Cancun',
        'lat': 21.041628,
        'lon': -86.782019,
        'descrip': 'Went to Cancun three times during three spring breaks. Got to see Chichen Itza, cenotes, and go snorketling.',
        'url': 'beach.png'
    },
    {
        'id': 1,
        'title': 'Puerto Vallarta',
        'lat': 20.584612,
        'lon': -105.244038,
        'descrip': 'Visited Puerto Vallarta once during 12th grade.',
        'url': 'beach.png'
    },
    {
        'id': 2,
        'title': 'Cabo San Lucas',
        'lat': 22.889455, 
        'lon': -109.902758,
        'descrip': 'Visted Cabo San Lucas during high school, was quite underwhelming compared to the other places I\'ve visited in Mexico.',
        'url': 'beach.png'
    },
    {
        'id': 3,
        'title': 'Tijuana',
        'lat': 32.534298,
        'lon': -117.036806,
        'descrip': "Randomly drove down to Tijuana this past November because I had never been.",
        'url': 'tijuana.jpg'
    }];

let domDestinations = [
    {
        'id': 0,
        'title': 'New York City',
        'lat': 40.740172,
        'lon': -73.989257,
        'descrip': 'Went to NYC during 11th grade to visit colleges, and went again last May for fun. I will be spending this summer in NYC as well.',
        'url': 'newyork.jpg'
    },
    {
        'id': 1,
        'title': 'West Point',
        'lat': 41.389658,
        'lon': -73.955519,
        'descrip': 'I participated in a 1-week long camp at USMA West Point the summer after my junior year of high school.',
        'url': 'westpoint.jpg'
    },
    {
        'id': 2,
        'title': 'Austin',
        'lat': 30.266539,
        'lon': -97.763085,
        'descrip': 'Spent my 4th of July weekend this past summer in Austin; arguably one of the better college towns to exist.',
        'url': 'austin.jpg'
    },
    {
        'id': 3,
        'title': 'Dallas',
        'lat': 32.787603,
        'lon': -96.799621,
        'descrip': 'Interned at Goldman Sachs in Dallas this past summer. Yeehaw.',
        'url': 'dallas.jpg'
    }
];

// function to fly to a location by a given id number
function flyToIndex(index){
	map.flyTo([domDestinations[index].lat,domDestinations[index].lon],12)
    // open the popup
    domMarkers.getLayers()[index].openPopup()
};

function intFlyToIndex(index){
	map.flyTo([intDestinations[index].lat,intDestinations[index].lon],12)
    // open the popup
    intMarkers.getLayers()[index].openPopup()
};

let intMarkers = L.layerGroup();
let domMarkers = L.layerGroup();

intDestinations.forEach(function(item) {
    let marker =  L.marker([item.lat, item.lon], {icon: cynIcon}).bindPopup(`<div><strong>${item.title}</strong><br>
        <img src = ${item.url }><br>${item.descrip}</div>`)
    intMarkers.addLayer(marker)
    $('.sidebar').append(`<div class="sidebar-item" onclick="intFlyToIndex(${item.id})">${item.title}</div>`)
    
});
intMarkers.addTo(map);

domDestinations.forEach(function(item){
    let marker =  L.marker([item.lat, item.lon], {icon: cynIcon}).bindPopup(`<div><strong>${item.title}</strong><br>
    <img src = ${item.url }><br>${item.descrip}</div>`)
    domMarkers.addLayer(marker)
    $('.sidebar').append(`<div class="sidebar-item" onclick="flyToIndex(${item.id})">${item.title}</div>`)
});
domMarkers.addTo(map);


let layers = {
    "US Destinations": domMarkers,
    "International Destinations": intMarkers
};

L.control.layers(null, layers).addTo(map)

window.addEventListener("DOMContentLoaded", function(e) {

    var stage = document.getElementById("stage");
    var fadeComplete = function(e) { stage.appendChild(arr[0]); };
    var arr = stage.getElementsByTagName("a");
    for(var i=0; i < arr.length; i++) {
      arr[i].addEventListener("animationend", fadeComplete, false);
    }

  }, false);