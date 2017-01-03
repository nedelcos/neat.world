<<<<<<< HEAD
// MENU STACKING FUNCTION

var firstOffset = $("#first").offset().top;
var first = $("#first");
var secondOffset = $("#second").offset().top;
var second = $("#second");
var thirdOffset = $("#third").offset().top;
var third = $("#third");

    $(window).scroll(function () {
        if ($(this).scrollTop() > firstOffset) {
            first.css({
                "position":"fixed",
                "top": 0,
                //"margin-top": "-52px"
            });
            return false;
        }
        else {
            first.css({
                "position":"static",
                "top": 0,
              });
            return false;
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > secondOffset) {
            second.css({
                "position":"fixed",
                "top": 0,
                //"margin-top": "-52px"
            });
            return false;
        }
        else {
            second.css({
                "position":"static",
                "top": 0,
            });
            return false;
        }
    });

 $(window).scroll(function () {
        if ($(this).scrollTop() > thirdOffset) {
            third.css({
                "position":"fixed",
                "top": 0,
                //"margin-top": "-52px"
            });
            return false;
        }
        else {
            third.css({
                "position":"static",
                "top": 0,
            });
            return false;
        }
    });

//TEAM MEMBERS IMAGE CHANGING function

var HTMLteamPic = '<img id="pic%id%" class="img-responsive p-pic col-lg-8 p-pic col-centered" src="%data%">';
var HTMLnamesList = '<li id="list%id%" class="p-name">%data%</li>';

var formattedPic, formattedNamesList;

var Team = function(firstName, lastName, imgURL, bio) {
  this.firstName = firstName,
  this.lastName = lastName,
=======
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


var Team = function(name, imgURL, bio) {
  this.name = name,
>>>>>>> origin/master
  this.imgURL = imgURL,
  this.bio = bio
};

Team.prototype.render = function() {
  var fullName = this.firstName + this.lastName;
  var imgURL = this.imgURL;

  formattedName = HTMLnamesList.replace("%data%", this.firstName + " " + this.lastName).replace("%id%", fullName);

  $(".p-names-list").append(formattedName);
  $(".people-pics").append(formattedPic);

  $("#pic" + this.firstName).css({
    "display": "none"
  });

  $("#picStefan").show();

  $("#list" + fullName).click(function() {
    formattedPic = HTMLteamPic.replace("%data%", imgURL).replace("%id%", fullName);
    $(".people-pics").empty();
    $(".people-pics").append(formattedPic);
    $("#pic" + fullName).show();
  });
};

var team = [];

team[0] = new Team("Stefan", "Nedelcu", "img/people/stefan_n.jpg");
team[1] = new Team("Matei", "Vlasceanu", "img/people/matei_v.jpg");
team[2] = new Team("Mariana", "Borla", "img/people/nana_b.jpg");
team[3] = new Team("Radu", "Barota", "img/people/radu_b.jpg");
team[4] = new Team("Bogdan", "Mihaila", "img/people/bogdan_m.jpg");
team[5] = new Team("Ciprian", "Rasoiu", "img/people/ciprian_r.jpg");
team[6] = new Team("Bogdan", "Gogoci", "img/people/bogdan_g.jpg");
team[7] = new Team("Daniel", "Nedelcu", "img/people/daniel_n.jpg");





for (var i = 0; i < team.length; i++) {
  team[i].render(i);
}
