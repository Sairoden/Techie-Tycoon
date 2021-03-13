// Initialize and add the map
function initMap() {
  // The location of your location
  const loc = { lat: 14.556586, lng: 121.023415 };
  // The map, centered at your location
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 4,
    center: loc,
  });
  // The marker, positioned at your location
  const marker = new google.maps.Marker({
    position: loc,
    map: map,
  });
}

// GET LATITUDE/LONGTITUDE FROM GOOGLE SEARCH TO REPLACE MAP

/* MARKER GOOGLE MAP
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
*/

// STICKY MENU BACKGROUND
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});

// SMOOTH SCROLLING
$("#navbar a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});
