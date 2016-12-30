//$(".menu-item").pin({padding: {top: 10, bottom: 10}});

$(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
        console.log('Scroll up');
        $("#neat").css('-webkit-transform', 'translate(0, 0)');
        $("#office").css('-webkit-transform', 'translate(0, 0)');
        $("#work").css('-webkit-transform', 'translate(0, 0)');
//        $(".menu-item").addClass('menu-item');

    }
    else {
        console.log('Scroll down');
        $("#neat").css('-webkit-transform', 'translate(0, calc(-50% + 12px))');
        $("#office").css('-webkit-transform', 'translate(0, calc(-150% + 12px))');
        $("#work").css('-webkit-transform', 'translate(0, calc(-250% + 12px))');
//        $(".menu-item").removeClass('menu-item');

    }
});


var Team = function(name, imgURL) {
  this.name = name,
  this.imgURL = imgURL,
  this.bio = bio
};

var stefan = new Team("Stefan Nedelcu", "img/people/stefan_n.jpg");
var matei = new Team("Matei Vlasceanu", "img/people/matei_v.jpg");
var nana = new Team("Mariana Borla", "img/people/nana_b.jpg");
var radu = new Team("Radu Barota", "img/people/radu_b.jpg");
var bogdanM = new Team("Bogdan Mihaila", "img/people/bogdan_m.jpg");
var ciprian = new Team("Ciprian Rasoiu", "img/people/ciprian_r.jpg");
var bogdanG = new Team("Bogdan Gogoci", "img/people/bogdan_g.jpg");
var daniel = new Team("Daniel Nedelcu", "img/people/daniel_n.jpg");

var team = [stefan, matei, nana, radu, bogdanM, ciprian, bogdanG, daniel];

var HTMLteamPic = '<img class="img responsive col-lg-8 p-pic col-centered" src="%data%">';
var HTMLnamesList = '<li class="p-name">%data%</li>';

var formattedPic, formattedNamesList;
for (var i = 0; i < team.length; i++) {
  formattedPic = HTMLteamPic.replace("%data%", team[i].imgURL);
  formattedNamesList = HTMLnamesList.replace("%data%", team[i].name);

  $(".p-names-list").append(formattedNamesList);

}
