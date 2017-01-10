// MENU STACKING FUNCTION
var firstOffset, first, secondOffset, second, thirdOffset, third;

firstOffset = $("#first").offset().top;
secondOffset = $("#second").offset().top;
thirdOffset = $("#third").offset().top;

function setOffsets() {
    firstOffset = $("#first").offset().top;
    secondOffset = $("#second").offset().top;
    thirdOffset = $("#third").offset().top;
}

//$(document).ready(setOffsets);

//window.onresize = setOffsets;

//when called it adds a empty div on top of the stacked menu, preventing user to click on link
function divFaker() {
    $(".fakeDiv").css({
        "display": "block",
        "height": "120px",
        "position": "absolute",
        "width": "100%",
        "z-index": "5030",
        "opacity": 0
    });
}

//when called it removes the empty div
function divUnfaker() {
    $(".fakeDiv").css({
        "display": "none"
    });
}

//when called - it expandes the stacked menu
function unStack() {
    $("#first").css({
        '-webkit-transform': 'translate(0, 5vh)'
    });
    $("#second").css({
        '-webkit-transform': 'translate(0, 44vh)'
    });
    $("#third").css({
        '-webkit-transform': 'translate(0, 82vh)'
    });
    $("#activeIcon").css({
        "fill": "#000"
    });
}

//when called - it restacks the expanded menu
function reStack() {
    $("#first").css({
        '-webkit-transform': 'translate(0, 0)'
    })
    $("#second").css({
        '-webkit-transform': 'translate(0, 0)'
    });
    $("#third").css({
        '-webkit-transform': 'translate(0, 0)'
    });
    $("#activeIcon").css({
        "fill": "#fff"
    });
}

$(window).scroll(function() {
    $("#activeIcon").css({
        "fill": "#fff"
    });
    if ($(this).scrollTop() > firstOffset) {
        $("#first").css({
            "position": "fixed",
            "top": 0,
        });
        return false;
    } else {
      $("#first").css({
            "position": "static",
            "top": 0,
        });
        return false;
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() > secondOffset) {
        $("#second").css({
            "position": "fixed",
            "top": 0,
        });
        return false;
    } else {
      $("#second").css({
            "position": "static",
            "top": 0,
        });
        return false;
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() > thirdOffset) {
        divFaker();
        $("#third").css({
            "position": "fixed",
            "top": 0,
        });
        return false;
    } else {
        divUnfaker();
        $("#third").css({
            "position": "static",
            "top": 0,
        });
        return false;
    }
});


//$(".menu-item-in").hover(function() {
//    if ($("#first").offset().top == $("#third").offset().top) {
//        unStack();
//        setTimeout(function() {
//            divUnfaker();
//        }, 500)
//    }
//});

var fired = true;
window.addEventListener("scroll", function(){
  if (fired === false) {
    setOffsets();
    console.log('This will happen only once')
    fired = true;
  }
}, true)

$(".menu-item-in").click(function() {
    if ($("#first").offset().top == $("#third").offset().top) {
        unStack();
        setTimeout(function() {
            divUnfaker();
        }, 001);
    }
});


$(".menu-item-in").mouseout(function() {

});


$("body").click(function() {
    divFaker();
    if ($("#first").offset().top !== $("#third").offset().top) {
        reStack();
    }
})

$(window).scroll(function() {
    if ($("#first").offset().top !== $("#third").offset().top) {
        reStack();
        divUnfaker();
    } else {
      divFaker();
    }
});


//TEAM MEMBERS IMAGE CHANGING function

var HTMLteamPic = '<img id="pic%id%" class="img-responsive p-pic p-pic col-centered" src="%data%">';
var HTMLbio = '<div id="bio%id%" class="bio p-pic col-centered">%data%</div>';
var HTMLnamesList = '<li id="list%id%" class="p-name">%data%</li>';

var formattedPic, formattedBio, formattedNamesList;

var Team = function(firstName, lastName, imgURL, bio) {
    this.firstName = firstName,
        this.lastName = lastName,
        this.imgURL = imgURL,
        this.bio = bio
};

Team.prototype.render = function() {
    var fullName = this.firstName + this.lastName;
    var imgURL = this.imgURL;
    var bio = this.bio;

    formattedName = HTMLnamesList.replace("%data%", this.firstName + " " + this.lastName).replace("%id%", fullName);

    $(".p-names-list").append(formattedName);
    $(".people-pics").append(formattedPic);

    $("#pic" + this.firstName).css({
        "display": "none"
    });

    $("#picStefan").show();

    $("#list" + fullName).click(function() {
        formattedPic = HTMLteamPic.replace("%data%", imgURL).replace("%id%", fullName);
        formattedBio = HTMLbio.replace("%data%", bio).replace("%id%", fullName);
        $(".people-pics").empty();
        $(".people-pics").append(formattedPic);
        $(".people-pics").append(formattedBio);
        $("#pic" + fullName).show();
        $("#bio" + fullName).show();
    });
};

var team = [];

team[0] = new Team("Stefan", "Nedelcu", "img/people/stefan_n.jpg", "<p>STEFAN NEDELCU was born in 1986 Brasov, Romania. He studied architecture at the University of Architecture and Urbanism “Ion Mincu” in Bucharest and at KU Leuven, graduating in 2012. He gained experience through collaborations with various studios in Bucharest, by working at OMA/Rem Koolhas – Hong Kong and Rotterdam. In 2010 UNULAUNU was founded, Matei being one of the founding partners. He currently lives and works in Bucharest, Romania and since 2014 he is also a teaching assistant at the University of Architecture and Urbanism “Ion Mincu”.</p>");

team[1] = new Team("Matei", "Vlasceanu", "img/people/matei_v.jpg", "<p>MATEI VLASCEANU was born in 1986 Brasov, Romania. He studied architecture at the University of Architecture and Urbanism “Ion Mincu” in Bucharest and at KU Leuven, graduating in 2012. He gained experience through collaborations with various studios in Bucharest, by working at OMA/Rem Koolhas – Hong Kong and Rotterdam. In 2010 UNULAUNU was founded, Matei being one of the founding partners. He currently lives and works in Bucharest, Romania and since 2014 he is also a teaching assistant at the University of Architecture and Urbanism “Ion Mincu”.</p>");

team[2] = new Team("Mariana", "Borla", "img/people/nana_b.jpg", "<p>MARIANA BORLA was born in 1986 Brasov, Romania. He studied architecture at the University of Architecture and Urbanism “Ion Mincu” in Bucharest and at KU Leuven, graduating in 2012. He gained experience through collaborations with various studios in Bucharest, by working at OMA/Rem Koolhas – Hong Kong and Rotterdam. In 2010 UNULAUNU was founded, Matei being one of the founding partners. He currently lives and works in Bucharest, Romania and since 2014 he is also a teaching assistant at the University of Architecture and Urbanism “Ion Mincu”.</p>");

team[3] = new Team("Radu", "Barota", "img/people/radu_b.jpg", "<p>RADU BAROTA was born in 1986 Brasov, Romania. He studied architecture at the University of Architecture and Urbanism “Ion Mincu” in Bucharest and at KU Leuven, graduating in 2012. He gained experience through collaborations with various studios in Bucharest, by working at OMA/Rem Koolhas – Hong Kong and Rotterdam. In 2010 UNULAUNU was founded, Matei being one of the founding partners. He currently lives and works in Bucharest, Romania and since 2014 he is also a teaching assistant at the University of Architecture and Urbanism “Ion Mincu”.</p>");

team[4] = new Team("Bogdan", "Mihaila", "img/people/bogdan_m.jpg", "<p>BOGDAN MIHAILA was born in 1986 Brasov, Romania. He studied architecture at the University of Architecture and Urbanism “Ion Mincu” in Bucharest and at KU Leuven, graduating in 2012. He gained experience through collaborations with various studios in Bucharest, by working at OMA/Rem Koolhas – Hong Kong and Rotterdam. In 2010 UNULAUNU was founded, Matei being one of the founding partners. He currently lives and works in Bucharest, Romania and since 2014 he is also a teaching assistant at the University of Architecture and Urbanism “Ion Mincu”.</p>");

team[5] = new Team("Ciprian", "Rasoiu", "img/people/ciprian_r.jpg", "<p>CIPRIAN RASOIU was born in 1986 Brasov, Romania. He studied architecture at the University of Architecture and Urbanism “Ion Mincu” in Bucharest and at KU Leuven, graduating in 2012. He gained experience through collaborations with various studios in Bucharest, by working at OMA/Rem Koolhas – Hong Kong and Rotterdam. In 2010 UNULAUNU was founded, Matei being one of the founding partners. He currently lives and works in Bucharest, Romania and since 2014 he is also a teaching assistant at the University of Architecture and Urbanism “Ion Mincu”.</p>");

team[6] = new Team("Bogdan", "Gogoci", "img/people/bogdan_g.jpg", "<p>BOGDAN GOGOCI was born in 1986 Brasov, Romania. He studied architecture at the University of Architecture and Urbanism “Ion Mincu” in Bucharest and at KU Leuven, graduating in 2012. He gained experience through collaborations with various studios in Bucharest, by working at OMA/Rem Koolhas – Hong Kong and Rotterdam. In 2010 UNULAUNU was founded, Matei being one of the founding partners. He currently lives and works in Bucharest, Romania and since 2014 he is also a teaching assistant at the University of Architecture and Urbanism “Ion Mincu”.</p>");

team[7] = new Team("Daniel", "Nedelcu", "img/people/daniel_n.jpg", "<p>DANIEL NEDELCU was born in 1986 Brasov, Romania. He studied architecture at the University of Architecture and Urbanism “Ion Mincu” in Bucharest and at KU Leuven, graduating in 2012. He gained experience through collaborations with various studios in Bucharest, by working at OMA/Rem Koolhas – Hong Kong and Rotterdam. In 2010 UNULAUNU was founded, Matei being one of the founding partners. He currently lives and works in Bucharest, Romania and since 2014 he is also a teaching assistant at the University of Architecture and Urbanism “Ion Mincu”.</p>");


for (var i = 0; i < team.length; i++) {
    team[i].render(i);
}
