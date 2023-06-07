let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 14.211279746038974, lng: 121.02127465910414 },
        zoom: 15,
    });

    new google.maps.Marker({
        position: { lat: 14.211279746038974, lng: 121.02127465910414 },
        map,
        title: "Hello World!",
    })
}

