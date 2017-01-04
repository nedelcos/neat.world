// MENU STACKING FUNCTION

var firstOffset = $("#first").offset().top;
var first = $("#first");
var secondOffset = $("#second").offset().top;
var second = $("#second");
var thirdOffset = $("#third").offset().top;
var third = $("#third");

    $(window).scroll(function () {
        if ($(this).scrollTop() >

        firstOffset) {
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

    $(".active").hover(function() {
      if ($("#first").offset().top == $("#second").offset().top) {
        first.css({
          "margin-top": 0
        });
        second.css({
          "margin-top": 0,
          '-webkit-transform': 'translate(0, 150px)'
        });
        third.css({
          "margin-top": 0,
          '-webkit-transform': 'translate(0, 300px)'

        });
      }
    });

    $(".sidebar").mouseleave(function() {

      second.css({
        "margin-top": 0,
        '-webkit-transform': 'translate(0, 0)'
      });
      third.css({
        "margin-top": 0,
        '-webkit-transform': 'translate(0, 0)'
      });

    })

//TEAM MEMBERS IMAGE CHANGING function

var HTMLteamPic = '<img id="pic%id%" class="img-responsive p-pic col-lg-8 p-pic col-centered" src="%data%">';
var HTMLnamesList = '<li id="list%id%" class="p-name">%data%</li>';

var formattedPic, formattedNamesList;

var Team = function(firstName, lastName, imgURL, bio) {
  this.firstName = firstName,
  this.lastName = lastName,
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
