var DATA = "%data%";
var i;
var p;

var bio = {
    "name": "Daniel Nedelcu",
    "role": "Front End Developer",
    "contacts": {
        "mobile": "(0040) 749 540 502",
        "email": "nede.dan@gmail.com",
        "facebook": "https://www.facebook.com/dan.nede",
        "linkedin": "https://www.linkedin.com/in/danielgnedelcu",
        "github": "https://github.com/nedelcos",
        "location": "Berlin"
    },
    "welcomeMessage": "I am Daniel & I love to build neat, responsive websites. If you are a company looking for a new Front End Developer and your HQ is in Berlin, then I might just be the man for the job.",
    "skills": ["HTML5", "CSS3", "Bootstrap", "Javascript", "jQuery", "Git", "CMS", "Photoshop", "inDesign", "SEO & SEM"],
    "biopic": "images/me_cut.png",
    "logo": "images/logo.png",
    "age": "26",
    "display": function() {
        var formattedName = HTMLheaderName.replace(DATA, bio.name);
        var formattedRole = HTMLheaderRole.replace(DATA, bio.role);
        $(".my-role").prepend(formattedRole);
        $(".my-name").prepend(formattedName);

        var formattedPic = HTMLbioPic.replace(DATA, bio.biopic);
        var formattedMessage = HTMLwelcomeMsg.replace(DATA, bio.welcomeMessage);
        var formattedLocation = HTMLlocation.replace(DATA, bio.contacts.location);
        var formattedLogo = HTMLlogo.replace(DATA, bio.logo);
        var formattedAge = HTMLage.replace(DATA, bio.age);

        $(".biopic").prepend(formattedPic);
        $(".title-cont, .footer-loc").append(formattedLocation);
        $(".title-cont").append(formattedAge);
        $(".intro-message").append(formattedMessage);
        $(".navbar-brand").prepend(formattedLogo);

        if (bio.skills.length > 0) {
            $(".my-skills").prepend(HTMLskillsStart);

            var formattedSkills;
            for (i = 0; i < bio.skills.length; i += 1) {
                formattedSkills = HTMLskills.replace(DATA, bio.skills[i]);
                $(".my-skills").append(formattedSkills);
            }
        }

        var formattedMobile = HTMLmobile.replace(DATA, bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace(DATA, bio.contacts.email);
        var formattedFacebook = HTMLfacebook.replace(DATA, bio.contacts.facebook);
        var formattedLinkedIn = HTMLlinkedin.replace(DATA, bio.contacts.linkedin);
        var formattedGitHub = HTMLgithub.replace(DATA, bio.contacts.github);
        $(".topContacts, #footerContacts").append(formattedEmail + formattedMobile);
        $(".navbar-right, #footerSocial").append(formattedFacebook + formattedLinkedIn + formattedGitHub);
    }
};

var work = {
    "jobs": [{
        "employer": "Virtual X",
        "title": "Web Developer Intern",
        "location": "Bucharest",
        "dates": "June 2016 - Present",
        "description": "I was assigned the task of building a responsive website for a new department, dedicated for VR productions. I also did research & documentation on how the business works and created the content (copywriting) for the website."
    }, {
        "employer": "Tegmark",
        "title": "System Administrator",
        "location": "Bucharest",
        "dates": "November 2015 - Present",
        "description": "I was in charge of administering the company's websites, web applications and the VPS hosting."
    }, {
        "employer": "nEAT Office",
        "title": "Web & Graphic designer",
        "location": "Bucharest",
        "dates": "May 2015 - November 2015",
        "description": "I created 2 websites for the company & also created the layouts for the printed newspapers (in Adobe InDesign)."
    }],
    "display": function() {
        if (work.jobs.length > 0) {
            var formattedEmployer;
            var formattedTitle;
            var formattedDates;
            var formattedLocation;
            var formattedDescription;

            for (i = 0; i < work.jobs.length; i += 1) {
                $("#workExperience").append(HTMLworkStart);

                formattedEmployer = HTMLworkEmployer.replace(DATA, work.jobs[i].employer);
                formattedTitle = HTMLworkTitle.replace(DATA, work.jobs[i].title);
                formattedDates = HTMLworkDates.replace(DATA, work.jobs[i].dates);
                formattedLocation = HTMLworkLocation.replace(DATA, work.jobs[i].location);
                formattedDescription = HTMLworkDescription.replace(DATA, work.jobs[i].description);
                $(".work-entry:last").append(formattedEmployer);
                $(".work-entry:last").append(formattedLocation);
                $(".work-entry:last").append(formattedTitle);
                $(".work-entry:last").append(formattedDates);
                $(".work-entry:last").append(formattedDescription);
            }
        }
    }
};

var projects = {
    "projects": [{
        "title": "Virtual eXperience",
        "dates": "2016",
        "demo": "virtualx.space", //type just the domain ( example.com )
        "description": "One-man-job project. For easy content management purposes, the website is built in WordPress, using custom page templates.",
        "images": [
            "images/thumb_virtualx.jpg",
            "images/screen_virtualx.jpg"
        ]
    }, {
        "title": "Rentador Auto",
        "dates": "2015",
        "demo": "rentador.ro",
        "description": "Built in WordPress,, using a customized theme. The site uses custom page templates. Purpose: Rent a Car website",
        "images": [
            "images/thumb_rentador.jpg",
            "images/screen_rentador.jpg"
        ]
    }, {
        "title": "Panda Project",
        "dates": "2014",
        "demo": "pandaproject.ro",
        "description": "Built in Joomla, the website is based on a template which I customized as requested.Purpose: Direct Marketing agency.",
        "images": [
            "images/thumb_panda.jpg",
            "images/screen_panda.jpg"
        ]
    }],
    "display": function() {
        if (projects.projects.length > 0) {

            var formattedTitle;
            var formattedDates;
            var formattedDemo;
            var formattedDescription;
            var formattedImageThumb;
            var formattedImageScreen;
            var formattedModal;

            for (p = 0; p < projects.projects.length; p += 1) {
                $("#projects").append(HTMLprojectStart);

                formattedTitle = HTMLprojectTitle.replace(DATA, projects.projects[p].title);
                formattedDates = HTMLprojectDates.replace(DATA, projects.projects[p].dates);
                formattedDemo = HTMLprojectDemo.replace(DATA, projects.projects[p].demo).replace("%data2%", projects.projects[p].demo);
                formattedDescription = HTMLprojectDescription.replace(DATA, projects.projects[p].description);

                for (i = 0; i < projects.projects[p].images.length; i += 1) {
                    formattedImageThumb = HTMLprojectImage.replace(DATA, projects.projects[p].images[0]).replace("%number%", p);
                    formattedImageScreen = HTMLprojectImage2.replace(DATA, projects.projects[p].images[1]);
                    $(".project-entry:last").append(formattedImageThumb);
                }
                formattedModal = HTMLmodal.replace("%number%", p);

                $("body:last").append(formattedModal);
                $(".modal-title:last").append(formattedTitle);
                $(".modal-body:last").append(formattedImageScreen);
                $(".modal-body:last").append(formattedDescription);

                $(".project-entry:last").append(formattedDates);
                $(".project-entry:last").append(formattedTitle);
                $(".project-entry:last").append(formattedDemo);
            }
        }
    }
};

var education = {
    "schools": [{
        "name": "Hyperion University",
        "location": "Bucharest",
        "degree": "Bachelor Degree",
        "majors": ["Journalism & Communication"],
        "dates": "2012",
        "url": "http://www.jurnalism.hyperion.ro"
    }, {
        "name": "Technical College",
        "location": "Campulung",
        "degree": "College diploma",
        "majors": ["Automatization systems"],
        "dates": "2009",
        "url": "http://gstaro.muscel.ro"
    }, {
        "name": "VEHMED MEDIA",
        "location": "Bucharest",
        "degree": "EU Certification",
        "majors": ["Journalism"],
        "dates": "2010",
        "url": "http://vehmed.ro"
    }, {
        "name": "Google DIGITAL WORKSHOP",
        "location": "Bucharest",
        "degree": "Certificate of Participation",
        "majors": ["Digital Marketing"],
        "dates": "2016",
        "url": "http://leaders.ro/atelieruldigital"
    }],
    "onlineCourses": [{
        "title": "Front End Developer",
        "school": "Udacity Nanodegree",
        "dates": "2016",
        "url": "https://profiles.udacity.com/u/danielnedelcu"
    }, {
        "title": "Front End tehniques",
        "school": "CodeAcademy",
        "dates": "2016",
        "url": "https://www.codecademy.com/users/netWhiz20456/achievements"
    }, {
        "title": "Digital Marketing",
        "school": "Google DIGITAL WORKSHOP",
        "dates": "2016",
        "url": "http://leaders.ro/atelieruldigital"
    }, {
        "title": "Javascript",
        "school": "SoloLearn",
        "dates": "2016",
        "url": "https://www.sololearn.com/Profile/1763887#"
    }],
    "display": function() {
        if (education.schools.length > 0) {
            var formattedName;
            var formattedDegree;
            var formattedEDates;
            var formattedCity;
            var formattedMajors;

            for (i = 0; i < education.schools.length; i += 1) {
                $("#education").append(HTMLschoolStart);
                formattedName = HTMLschoolName.replace(DATA, education.schools[i].name).replace("#", education.schools[i].url).replace(DATA, "website");
                formattedDegree = HTMLschoolDegree.replace(DATA, education.schools[i].degree);
                formattedEDates = HTMLschoolDates.replace(DATA, education.schools[i].dates);
                formattedCity = HTMLschoolLocation.replace(DATA, education.schools[i].location);
                formattedMajors = HTMLschoolMajor.replace(DATA, education.schools[i].majors);

                $(".education-entry:last").append(formattedName);
                $(".education-entry:last").append(formattedCity);
                $(".education-entry:last").append(formattedMajors);
                $(".education-entry:last").append(formattedDegree);
                $(".education-entry:last").append(formattedEDates);
            }
        }
        if (education.onlineCourses.length > 0) {
            var formattedSchool;
            var formattedURL;
            var formattedTitle;
            var formattedODates;

            for (i = 0; i < education.onlineCourses.length; i += 1) {
                $("#online-education").append(HTMLonlineClasses);

                formattedSchool = HTMLonlineSchool.replace(DATA, education.onlineCourses[i].school);
                formattedURL = HTMLonlineURL.replace("#", education.onlineCourses[i].url).replace(DATA, "see profile");
                formattedTitle = HTMLonlineTitle.replace(DATA, education.onlineCourses[i].title);
                formattedODates = HTMLonlineDates.replace(DATA, education.onlineCourses[i].dates);

                $(".online-education-entry:last").append(formattedSchool);
                $(".online-education-entry:last").append(formattedURL);
                $(".online-education-entry:last").append(formattedTitle);
                $(".online-education-entry:last").append(formattedODates);
            }
        }
    }
};

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

function map() {
    $("#mapDiv").append(googleMap);
}

$(document).on("click", ".navbar-collapse.in", function(e) {
    if ($(e.target).is("a")) {
        $(this).collapse("hide");
    }
});

bio.display();
work.display();
projects.display();
education.display();
map();
