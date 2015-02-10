var bio = {
	"name":"Dan O'Dea",
	"role":"Traveler Through the Desert of Despair",
	"contacts": {
		"mobile": "555-555-5555",
		"email": "spam@danodea.net",
		"github": "danodea",
		"twitter": "@dan_odea",
		"location": "Indianapolis, IN"
	},
	"welcomeMessage":"Please hire me!!!",
	"skills": [
		"Faking a smile", "Putting up with bullshit", "Fart jokes", "Extremely basic HTML, CSS, and JavaScript"
	],
	"biopic": "images/dan.jpg",
	"display": function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedTwitter);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedLocation);
		var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(formattedPic);
		var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcome);
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
};

var education = {
	"schools": [
	{
		"name": "Indiana University",
		"location": "Bloomington, IN",
		"degree": "BS",
		"majors": ["Management"],
		"dates": "August 2008 - May 2012",
		"url": "http://www.indiana.edu"
	}
	],
	"onlineCourses": [
	{
		"school": "Udacity",
		"title": "Front-End Web Developer Nanodegree",
		"dates": "December 2014 - Present",
		"url": "http://www.udacity.com"
	},
	{
		"school": "Coursera",
		"title": "Learn to Program: The Fundamentals",
		"dates": "October 2013 - January 2014",
		"url": "http://www.coursera.org"
	}
	],
	"display": function() {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			var formattedSchool = formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor;
			$(".education-entry:last").append(formattedSchool)
		};

		$("#education").append(HTMLonlineClasses);

		for (course in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			var formattedCourse = formattedTitle + formattedSchool + formattedDates + formattedURL;
			$(".education-entry:last").append(formattedCourse)	
		}
	}
};

var work = {
	"jobs": [
		{
			"employer": "Salesforce",
			"title": "Workplace Services Ambassador",
			"location": "Indianapolis, IN",
			"dates": "March 2014 - Present",
			"description": "I make sure the people who do the real work are comfortable and happy.",
		},
		{
			"employer": "Near East Area Renewal",
			"title": "Energy Advocate",
			"location": "Indianapolis, IN",
			"dates": "June 2013 - March 2014",
			"description": "My first foray into the world of non-profit management.  I learned a lot, but I had to leave to chase a fat paycheck.",
		},
		{
			"employer": "AvalonBay Communities, Inc",
			"title": "Facilities Management Assistant",
			"location": "Arlington, VA",
			"dates": "October 2012 - March 2013",
			"description": "I helped plan the buildout of a several floors, and got to do other sweet projects all the time.  It was great.",
		}
	],
	"display": function() {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			var formattedJob = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;
			$(".work-entry:last").append(formattedJob)
		}
	}
};

var projects = {
	"projects": [
		{
			"title": "This Resume",
			"dates": "January 2015 - Present",
			"description": "You're looking at it!  I plan to keep this as a work-in-progress until I land a real devloper job.",
			"images": ["images/resume.png"]
		},
		{
			"title": "Mockup to Website",
			"dates": "December 2014 - January 2015",
			"description": "I took a PDF mockup and turned it into a reasonably convincing website.",
			"images": ["images/mockup.png"]
		},
		{
			"title": "First Personal Webpage",
			"dates": "1998 - ???",
			"description": "I made a webpage on Angelfire when I was a kid and maintained it for years.  Nothin' but HTML!  I'm pretty sure it doesn't exist anymore (RIP).",
			"images": ["images/spinning_flaming_skull.gif"]
		}
	],
	"display": function() {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			var formattedProject = formattedTitle + formattedDates + formattedDescription;
			$(".project-entry:last").append(formattedProject);
			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
	}
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);