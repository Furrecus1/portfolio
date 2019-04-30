document.getElementById("hamburger-icon").addEventListener("click", hamburger);

function hamburger() {
	var x = document.getElementById("hamburger-menu");
    var y = document.getElementById("hamburger-icon")
	if (x.style.display === "block") {
		x.style.display = "none";
        y.innerHTML = "&#9776;";
	} else {
		x.style.display = "block";
          y.innerHTML = "&#10006;";
	}
};

var websiteIndex = 0;
showWebsites();

function showWebsites() {
    var i;
    var websites = document.getElementsByClassName("website-slide");
    for (i = 0; i < websites.length; i++) {
       websites[i].style.display = "none";  
    }
    websiteIndex++;
    if (websiteIndex > websites.length) {websiteIndex = 1}    
    websites[websiteIndex-1].style.display = "block";  
    setTimeout(showWebsites, 3500); 
}

