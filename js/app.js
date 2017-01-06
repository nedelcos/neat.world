// MENU STACKING FUNCTION
var firstOffset, first, secondOffset, second, thirdOffset, third;
$(document).ready(function() {
  function setOffsets() {
    firstOffset = $("#first").offset().top;
    first = $("#first");
    secondOffset = $("#second").offset().top;
    second = $("#second");
    thirdOffset = $("#third").offset().top;
    third = $("#third");
  }

  setOffsets();

  $(window).resize(setOffsets);

});



function divFaker() {
    $(".fakeDiv").css({
        "display": "block",
        "height": "120px",
        "position": "absolute",
        "width": "100%",
        "z-index": "5030",
        "opacity": 0
    })
}

function divUnfaker() {
    $(".fakeDiv").css({
        "display": "none"
    })
}

function unStack() {
    first.css({
        '-webkit-transform': 'translate(0, 5vh)'
    });
    second.css({
        '-webkit-transform': 'translate(0, 44vh)'
    });
    third.css({
        '-webkit-transform': 'translate(0, 82vh)'
    });
    $("#activeIcon").css({
        "fill": "#000"
    });
}

function reStack() {
    first.css({
        '-webkit-transform': 'translate(0, 0)'
    })
    second.css({
        '-webkit-transform': 'translate(0, 0)'
    });
    third.css({
        '-webkit-transform': 'translate(0, 0)'
    });
    $("#activeIcon").css({
        "fill": "#fff"
    });
}

var onScroll = function() {
    $(window).scroll(function() {
        divFaker();

        $("#activeIcon").css({
            "fill": "#fff"
        });
        if ($(this).scrollTop() > firstOffset) {
            first.css({
                "position": "fixed",
                "top": 0,
                '-webkit-transform': 'translate(0, 0)'
            });
            return false;
        } else {
            first.css({
                "position": "static",
                "top": 0,
            });
            return false;
        }
    });

    $(window).scroll(function() {
      divFaker();
        if ($(this).scrollTop() > secondOffset) {
            second.css({
                "position": "fixed",
                "top": 0,
                '-webkit-transform': 'translate(0, 0)'
            });
            return false;
        } else {
            second.css({
                "position": "static",
                "top": 0,
            });
            return false;
        }
    });

    $(window).scroll(function() {
        divFaker();
        if ($(this).scrollTop() > thirdOffset) {
            third.css({
                "position": "fixed",
                "top": 0,
                '-webkit-transform': 'translate(0, 0)'
            });
            return false;
        } else {
            third.css({
                "position": "static",
                "top": 0,
            });
            return false;
        }
    });
}

onScroll();


$(".menu-item-in").hover(function() {
    if ($("#first").offset().top == $("#third").offset().top) {
        unStack();
        setTimeout(function() {
          divUnfaker();
        }, 500)
    }
});

$(".menu-item-in").click(function() {
    if ($("#first").offset().top == $("#third").offset().top) {
        unStack();
        setTimeout(function() {
          divUnfaker();
        }, 001)
    }

});

$(".sidebar").mouseleave(function() {

});

$("body").click(function() {
    divFaker();
    if ($("#first").offset().top !== $("#third").offset().top) {
        reStack();
    }
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

    $("#list" + fullName).hover(function() {
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
