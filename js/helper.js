/*jshint esversion: 6 */
var HTMLheaderName = '%data%';
var HTMLheaderRole = '<strong>%data%</strong>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="white-text contact-item">☎ %data%</li>';
var HTMLemail = '<li class="white-text contact-item">✉ %data%</li>';
var HTMLfacebook = '<li class="social_icon"><a class="social_icon fa fa-facebook" href="%data%" target="_blank"></a></li>';
var HTMLlinkedin = '<li class="social_icon"><a class="social_icon fa fa-linkedin" href="%data%" target="_blank"></a></li>';
var HTMLgithub = '<li class="social_icon"><a class="social_icon fa fa-github" href="%data%" target="_blank"></a></li>';
var HTMLlocation = '<span class="bio-location"><span class="fa fa-map-marker"></span> %data%</span>';
var HTMLage = '<span class="bio-age"><span class="fa fa-birthday-cake"></span> %data%</span>';
var HTMLlogo = '<img src="%data%">';

var HTMLbioPic = '<img src="%data%" class="img-responsive bio-img">';
var HTMLwelcomeMsg = '%data%';

var HTMLskillsStart = '<h3 id="skills-h3">I speak web</h3>';
var HTMLskills = '<span class="skill-item">%data%</span>';

var HTMLworkStart = '<div class="work-entry"></div><hr class="work-separator">';
var HTMLworkEmployer = '<div class="company">%data%</div>';
var HTMLworkTitle = '<div class="work-title"><kbd>%data%</kbd></div>';
var HTMLworkLocation = '<span class="work-location"><span class="fa fa-map-marker"></span><em> %data%</em></span>';
var HTMLworkDates = '<div class="work-dates"><em>%data%</em></div>';
var HTMLworkDescription = '<p class="work-description">%data%</p>';

var HTMLprojectStart = '<div class="text-center col-sm-4 col-xs-12"><div class="panel panel-default project-entry"></div></div>';
var HTMLprojectTitle = '<div class="panel-body project-title text-center">%data%</div>';
var HTMLprojectDates = '<ul class="list-group text-center"><li class="list-group-item"><i class="fa fa-calendar-check-o"></i> %data%</li></ul>';
var HTMLprojectDemo = '<div class="panel-footer"><a class="project-demo btn btn-lg btn-block btn-primary" href="http://%data%" target="_blank"<span class="fa fa-globe"></span> %data2%</a></div>';
var HTMLprojectDescription = '<p class="project-description">%data%</p>';
var HTMLprojectImage = '<div class="panel-heading"><img class="proj-img img-responsive"  data-toggle="modal" data-target="#myModal%number%" src="%data%"></div>';
var HTMLprojectImage2 = '<img class="proj-img2 img-responsive" src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div><hr class="edu-separator">';
var HTMLschoolName = '<a href="#" target="_blank" class="school-name">%data%</a>';
var HTMLschoolDegree = '<span class="school-degree"><em>%data%</em></span>';
var HTMLschoolDates = '<span class="school-dates"><em>%data%</em></span>';
var HTMLschoolLocation = '<span class="school-location"><span class="fa fa-map-marker"></span><em> %data%</em></span>';
var HTMLschoolMajor = '<div class="school major"><kbd>%data%</kbd></div>';
var HTMLschoolURL = '<br><a href="#" target="_blank">%data%</a>';

var HTMLonlineClasses = '<div class="online-education-entry"></div><hr class="online-edu-separator">';
var HTMLonlineTitle = '<div class="online-title"><kbd>%data%</kbd></div>';
var HTMLonlineSchool = '<div class="online-name">%data%</div>';
var HTMLonlineDates = '<div class="online-dates"><em>%data%</em></div>';
var HTMLonlineURL = '<a href="#" class="online-profile" target="_blank"><span class="fa fa-user"></span><em> %data%<em></a>';

var googleMap = '<div id="map"></div>';

var HTMLmodal = `<div class="modal fade" id="myModal%number%" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" class="myModalLabel"></h4>
      </div>
      <div class="modal-body">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`;

$(document).ready(function() {
    $('button').click(function() {
        var $name = $('#name');
        var iName = inName($name.text()) || function() {};
        $name.html(iName);
    });
});

var clickLocations = [];

function logClicks(x, y) {
    clickLocations.push({
        x: x,
        y: y
    });
    console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
    // your code goes here!
});




var map;

function initializeMap() {

    var locations;

    var mapOptions = {
        disableDefaultUI: true
    };

    map = new google.maps.Map(document.querySelector('#map'), mapOptions);

    function locationFinder() {
        var locations = [];

        locations.push(bio.contacts.location);

        education.schools.forEach(function(schools) {
            locations.push(schools.location);
        });

        work.jobs.forEach(function(job) {
            locations.push(job.location);
        });

        return locations;
    }


    function createMapMarker(placeData) {

        var lat = placeData.geometry.location.lat(); // latitude from the place service
        var lon = placeData.geometry.location.lng(); // longitude from the place service
        var name = placeData.formatted_address; // name of the place from the place service
        var bounds = window.mapBounds; // current boundaries of the map window

        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
        });

        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.
        var infoWindow = new google.maps.InfoWindow({
            content: name
        });


        google.maps.event.addListener(marker, 'mouseover', function() {
            infoWindow.open(map, marker);
        });

        google.maps.event.addListener(marker, 'mouseout', function() {
            infoWindow.close(map, marker);
        });

        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
    }

    /*
    callback(results, status) makes sure the search returned results for a location.
    If so, it creates a new map marker for that location.
    */
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        }
    }

    /*
    pinPoster(locations) takes in the array of locations created by locationFinder()
    and fires off Google place searches for each location
    */
    function pinPoster(locations) {

        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(map);

        // Iterates through the array of locations, creates a search object for each location
        locations.forEach(function(place) {
            // the search request object
            var request = {
                query: place
            };

            // Actually searches the Google Maps API for location data and runs the callback
            // function with the search results after each search.
            service.textSearch(request, callback);
        });
    }

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();

    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
    //Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
});
