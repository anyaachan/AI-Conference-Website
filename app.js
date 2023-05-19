document.addEventListener("DOMContentLoaded", function () {
  let emailForm = document.getElementById("joinfield");

  emailForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let userEmail = document.getElementById("joinemail").value;
    let userEmailReg = document.getElementById("reg-input-field-email");
    
    // console.log(userEmail)
    // console.log(userEmailReg)

    userEmailReg.value = userEmail
    userEmailReg.scrollIntoView({ behavior: "smooth" });
  });

  let regForm = document.getElementById("reg-form");

  regForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let userData = document.getElementsByClassName("reg-input-field")

    userData[0].value = ""
    userData[1].value = ""
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
      time: '12:30 A.M. - 1:30 P.M.',
      title: 'Lunch',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco'
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
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

  let speakers = [
    {
      image: "media/speaker-01.jpg",
      name: "Mark Anderson",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "
    },
    {
      image: "media/speaker-02.jpg",
      name: "Rebecca Jones",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "
    },
    {
      image: "media/speaker-03.jpg",
      name: "Jennifer Williams",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      image: "media/speaker-04.jpg",
      name: "Andrew Smith",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "
    },
    {
      image: "media/speaker-05.jpg",
      name: "Sarah Johnson",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "
    },
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

  function createSpeakers(speakers) {
    let speakersGrid = document.getElementById('speakers-grid');
    speakers.forEach((speaker) => {
      let eventHTML = `
        <div class = "speaker-box-gradient" >
          <div class="speaker-box">
            <img src = "${speaker.image}">
              <p class="body-text speaker">${speaker.name}</p>
              <p class="description-text speaker">${speaker.description}</p>
          </div>
        </div >`;
        speakersGrid.innerHTML += eventHTML;
    });
  }

  createSpeakers(speakers);

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
});


