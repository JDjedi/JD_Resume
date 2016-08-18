var welcomeMsg = "Hello my name is Jonathan Diaz and I am a UT grad and am currently learning how to program."

var bio = {
	"name" : "Jonathan Diaz",
	"role" : "Software Engineer",
	"contact" : "Email: JDjedi1201@gmail.com",
	"biopic" : "images/JD.jpg",
	"welcomeMsg" : welcomeMsg,
	"skills" : ["Political Science", " Philosophy", " HTML", " CSS", " Javascript", " Python", " SQL"]
};

var work = {
	"jobs" : [
		{
			"employer" : "Costco",
			"title" : "Major Sales / Merchandising",
			"location" : "Austin, Tx",
			"dates" : "09/2013 - Present",
			"description" : "Worked in major appliances and assisted memebers with their electronic needs. Additionally, worked closely with management to merchandise the department."
		},
		{
			"employer" : "St David's Hospital",
			"title" : "Valet",
			"location" : "Austin, Tx",
			"dates" : "05/2013 - 09/2013",
			"description" : "Valet cars for patients and their visitors."
		},
		{
			"employer" : "D&B Industries",
			"title" : "Customer Service Rep",
			"location" : "Austin, Tx",
			"dates" : "Late 2012- 04/2013",
			"description" : "Resort representaitive for The Summit and tThe Falls. Interaction with potential clients through direct outreach. Rejection handled on a daily basis."
		}
	]
}

var project = {
	"projects" : [
		{
			"title" : "HTML & CSS",
			"dates" : "March-April(2015)",
			"description" : "Learned HTML and CSS. Taught design patterns and industry standards including. Taught web frameworks such as bootstrap. My personal project The New Natonalism available as well combining HTML, CSS and Javascript(jQuery)",
			"url" : "N/A"
		},
		{
			"title" : "Python",
			"dates" : "August(2014)-March(2015)",
			"description" : "Self taught with python. Minor projects completed with much difficulty. Self taught matieriels include code academy, Learn Python the Hard Way, and Udacity. Personal movie project utilizing python available as well.",
			"url" : "N/A"
		},

		{
			"title" : "Web Application Development",
			"dates" : "May(2015)-August(2015)",
			"description" : "Made my very own web application from the ground up with the help of Udacity.",
			"url" : "N/A"

		},

		{
			"title" : "Full-Stack(Back-end) Developer.",
			"dates" : "August-December(2015)",
			"description" : "Where I'm heading.",
			"url" : "N/A"
		}
	]
}

var education = {
	"locations" : [
		{
			"name" : "University of Texas at Austin",
			"degree": "Bachelor of Arts",
			"dates" : "Aug 2010 - May 2014",	
			"location" : "Austin, Tx",
			"major" : "Government & Philosophy"			
		},
		{
			"name" : "Northwest Vista Community College",
			"degree": "Associates of Arts",
			"dates" : "Jan 2008 - May 2010",
			"location" : "San Antonio, Tx",
			"major" : "Government"
		}
	]
}

bio.display = function() {
		if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill); 
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill); 
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill); 
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill); 
		formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
		$("#skills").append(formattedSkill); 
		formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
		$("#skills").append(formattedSkill); 
		formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
		$("#skills").append(formattedSkill)
	}
}

function displayWork(){
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;

		$(".work-entry:last").append(formattedEmployerTitle);
	}
}

projects.display = function() {
	for (argProj in project.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedProjTitle = HTMLprojectTitle.replace("%data%", project.projects[argProj].title);
		var formattedProjDates = HTMLprojectDates.replace("%data%", project.projects[argProj].dates);
		var formattedProjDescription = HTMLprojectDescription.replace("%data%", project.projects[argProj].description);
		var formattedProjEntry = formattedProjTitle + formattedProjDates + formattedProjDescription;

		$(".project-entry:last").append(formattedProjEntry);
	}
}

education.display = function() {
	for (argEdu in education.locations){
		$("#education").append(HTMLschoolStart);

		var formattedEduName = HTMLschoolName.replace("%data%", education.locations[argEdu].name);
		var formattedEduDeg = HTMLschoolDegree.replace("%data%", education.locations[argEdu].degree);
		var formattedEduDates = HTMLschoolDates.replace("%data%", education.locations[argEdu].dates);
		var formattedEduLocal = HTMLschoolLocation.replace("%data%", education.locations[argEdu].location);
		var formattedEduMaj = HTMLschoolMajor.replace("%data%", education.locations[argEdu].major);

		var formattedEdu = formattedEduName + formattedEduDeg + formattedEduDates + formattedEduLocal + formattedEduMaj; 

		$(".education-entry:last").append(formattedEdu);
	} 
}

function inName(nameArg){
    var names = nameArg.trim().split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}

nameArg = bio.name;
$("#main").append(internationalizeButton);

var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").prepend(formattedBiopic);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);
$("#header").prepend(formattedName);

bio.display();
displayWork();
projects.display();
education.display();

$(document).ready(function(){

	$("#workExperience").hide();
	$("#projects").hide();
	$("#education").hide();

	$("#workExperience").slideDown(800);
	$("#projects").slideDown(950);
	$("#education").slideDown(100);

});







