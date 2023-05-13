document.addEventListener("DOMContentLoaded", function () {
  let regForm = document.getElementById("reg-form");

  regForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log()
    let userDate = document.getElementsByClassName("reg-input-field")
    console.log(userDate[0].value)
    console.log(userDate[1].value)

  });

  let events = [
    {
      time: '8:00 A.M. - 9:00 A.M.',
      title: 'Doors open and registration',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      time: '9:00 A.M. - 9:30 A.M.',
      title: 'Opening remarks',
      description: 'Lorem ipsum dolor sit amet, consectetu. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
    },
    {
      time: '9:30 A.M. - 10:30 A.M.',
      title: 'Mark Anderson: Introduction to AI',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
    },
    {
      time: '10:30 A.M. - 11:30 A.M.',
      title: 'Sarah Johnson: AI Applications in Healthcare',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
    },
    {
      time: '11:30 A.M. - 12:30 A.M.',
      title: 'Workshop 1: Developing AI Algorithms',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
    },
    {
      time: '12:30 A.M. - 1:30 P.M.',
      title: 'Lunch',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
    },
    {
      time: '1:30 P.M. - 2:30 P.M.',
      title: 'Jennifer Williams: Machine Learning',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
    },
    {
      time: '2:30 P.M. - 3:30 P.M.',
      title: 'Andrew Smith: Natural Language Processing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
    },
    {
      time: '3:30 P.M. - 4:30 P.M.',
      title: 'Workshop 2: Implementing AI in Business',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
    },
    {
      time: '4:30 P.M. - 5:30 P.M.',
      title: 'Rebecca Jones: AI and the Future',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
    },
    {
      time: '5:30 P.M. - 6:00 P.M.',
      title: 'Closing remarks and networking',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
    }
  ];

  function createTimetable(events) {
    let timetable = document.getElementById('timetable-box');
    events.forEach((event, index) => {
      let eventHTML = `
            <div class="timetable-time">
                <div class="body-text time">
                    ${event.time}
                </div>
            </div>
            <div class="body-text timetable">
                ${event.title}
            </div>
            <div class="description-text timetable">
                ${event.description}
            </div>`;
      if (index !== events.length - 1) {
        eventHTML += `<hr class="hr-gradient">`;
      }
      
      timetable.innerHTML += eventHTML;
    });
  }

  createTimetable(events);

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
  let marker = document.createElement('div');
  marker.id = 'marker';
  /* document is a javascript name (object) for the page which has the method createElement. We assign the id. */

  new mapboxgl.Marker(marker, { anchor: 'bottom' }) /*the marker is anchored at the bottom */
    .setLngLat(loc)
    .addTo(map)
    .setPopup(popup); /* sets the popup to the marker */
  /* creates a new instance of a marker*/
});


