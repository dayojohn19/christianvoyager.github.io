// NOTES **** IMPORTANT

// -[0] latitude
//     - [1] longitude
//         - [2] Title
//             - [3] Description
//                 - [4] Url Link
//                     - [5] Video Duration
//                         > example of adding:
// `[12.2312, 102.131232, "The Title", 'this is the paragrapgh', 'https://Your_url_toVide'${youtubeOptions}, 1600]`

console.log("\n\n Start _____-APIs/MapSimple/src/initial.js ");
youtubeOptions = "?autoplay=1&mute=1&controls=0&listType=playlist&rel=0";
// *** EDIT here add more
AllPosition = [
  [18.582625336239676, 120.89739802905959, "Patapat Bridge", "One of the Famous tourist", `https://www.youtube.com/embed/cyWLLsfOqG0${youtubeOptions}`, 9000],
  [18.06504125349679, 120.52061717613465, "San Agustin Church of Paoay", "Famous for its Baroque-style architecture", `https://www.youtube.com/embed/4MrZPyfXKx4${youtubeOptions}`, 8000],
  [18.04538170398049, 120.47649604111857, "Panguil Ilocos North PH coast", "untapped by tourist", `https://www.youtube.com/embed/df-Zji5tLYc${youtubeOptions}`, 15000],
  [18.068983475069917, 120.56643614688097, "Batac and Laoag Ilocos North PH", "Batac and Paoay are known where one of the most controversy President of Ph grew and lived", `https://www.youtube.com/embed/0NxHUoo7wc0${youtubeOptions}`, 18000],
  [17.548089108584076, 120.36444527839778, "Vigan City Ilocos Sur", "Emerging surfing point in Vigan City, Caoayan", `https://www.youtube.com/embed/BnV2seHdTxI${youtubeOptions}`, 16000],
];
// 18.068983475069917, 120.56643614688097
// AllPosition = []
// encodGeoPosition = geoPosition.forEach(element => {
//     AllPosition.push({ lat: element[0], lng: element[1] })
// });

// *** IMPORTANT BELOW
toShow = document.createElement("div");
toShow.setAttribute("id", "toshow");
document.body.appendChild(toShow);
iPosition = 0;
//  **** IMPORTANT ABOVE

var map;

// Initialize and add the map
function initMap() {
  // The location of StartPosition
  const StartPosition = { lat: AllPosition[0][0], lng: AllPosition[0][1] };

  // The map, centered at StartPosition
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: StartPosition,
    disableDefaultUI: true,
  });

  // The marker, positioned at StartPosition
  // const marker = new google.maps.Marker({
  //     position: StartPosition,
  //     map: map,
  // });
  console.log("Map Initated and Logged  Init Position");
}

console.log("End _____-APIs/MapSimple/src/initial.js \n\n ");
