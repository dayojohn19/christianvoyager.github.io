console.log("\n\n Start _____-APIs/MapSimple/src/index.js ")




// Initialize



ip = 0;
// slowlyInitiate()

async function slowlyInitiate() {
    while (ip <= AllPosition.length) {
        console.log('first thing', ip)
        await Initiations(ip, 100) //Position number && Animation Interval
        ip++;
    }
    EndingScene(AllPosition[ip - 2])
}


function EndingScene(position) {
    map.setZoom(7);
    map.setCenter(position);
    console.log('Scence Ended')
}
function Initiations(position, AnimationInterval) {
    console.log('Initiations() MapsSimple/src')
    return new Promise((resolve) => {
        window.setTimeout(() => {
            map.setZoom(9);
            map.setCenter(position)
            console.log("INSERT MORE ALERTS HERE")
            window.setTimeout(() => {
                map.setZoom(10)
                MapPutMarker(position);
                // resolve();//to End the function continue the Flow


            }, AnimationInterval)//Zoom in

        }, AnimationInterval); //Zoom OUT

        resolve();
    })
}


// ******************
// No neet to Use already on initialization
// function MapChangeFocus(position) {
//     window.setTimeout(() => {
//         map.setZoom(9);
//         map.setCenter(position)
//         window.setTimeout(() => {
//             map.setZoom(10)
//             MapPutMarker(position);
//         }, 1000)
//     }, 1000);
// }
// ----------
function MapPutMarker(position) {
    setTimeout(() => {
        new google.maps.Marker({
            position: position,
            map,
            animation: google.maps.Animation.DROP
        });
    }, 200)// Putting the marker Animation


}




function addMarkerWithTimeout(position, timeout) {
    map.setZoom(6);
    map.setCenter(position);
    window.setTimeout(() => {
        // markers.push(
        new google.maps.Marker({
            position: position,
            map,
            animation: google.maps.Animation.DROP,
        })
        // );
    }, timeout);
}


console.log("End _____-APIs/MapSimple/src/index.js  \n\n ")
