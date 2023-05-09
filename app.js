document.addEventListener("DOMContentLoaded", function() {
    let regForm = document.getElementById("reg-form");
  
    regForm.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log()
      let userDate = document.getElementsByClassName("reg-input-field")
      console.log(userDate[0].value)
      console.log(userDate[1].value)
      
    });
    
    let loc = [14.433824581541954, 50.08703265602295]
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW55YWFjaGFuIiwiYSI6ImNsZmdvYTNpMDA1ZmQzdnJzMnhma2xybXkifQ.x3AS6_WhkUlar_9LvRunWA';
    let map = new mapboxgl.Map({
    container: 'map',
    center: loc, /* in google it is like latitute, longtitute, but it expect the reverse */
    zoom: 14,
    style: "mapbox://styles/mapbox/light-v11"
});
  map.addControl(new mapboxgl.NavigationControl()); 
  map.scrollZoom.disable(); 
/* creating an instance in which we constructing the new map with some information given to help */

  });


