// Google Maps API callback function
function initMap() {
    // Coordinates for the initial map center
    const myLatLng = { lat: 41.83155375445465, lng: -87.62724193181992 };

    // Create a new Google Map
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: myLatLng,
    });

    // HTML content for the InfoWindow
    const contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="first heading" class="first heading">Downtown</h1>' +
        '<div id="body content">' +
        "<p><b>Tourist Attraction</b>, also referred to as <b>Chicago</b>" +
        "</div>" + "</div>";

    // Create an InfoWindow with the specified content
    const infowindow = new google.maps.InfoWindow({
        content: contentString,
        ariaLabel: "IIT",
    });

    // Create a marker and set its properties
    const marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "IIT",
    });

    // Add a click event listener to the marker to open the InfoWindow
    marker.addListener("click", () => {
        infowindow.open({
            anchor: marker,
            map: map,
        });
    });

    // Add a Traffic Layer to the map
    const trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
}

// Make the initMap function available globally
window.initMap = initMap;
