function websiteSearch() {
	var input, filter, x, y, i;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	x = document.getElementsByClassName("portfolio-card");
	for (i in x) {
		y = x[i].getElementsByTagName("h3")[0];
		if (y.innerHTML.toUpperCase().indexOf(filter) > -1) {
			x[i].style.display = "";
		} else {
			x[i].style.display = "none";

		}
	}

}
function linkSpaceLaunch() {
    window.open("http://www.furresite.com/new/space-launch/index.html");
}
function linkIsland() {
    window.open("http://www.furresite.com/new/island-escapes");
}
function linkPortfolio() {
    window.open("http://www.furresite.com/portfolio-2/index.html");
}
function linkLetha() {
    window.open("http://www.furresite.com/portfolio/updated-websites/letha/index.html");
}
function linkScience() {
    window.open("http://www.furresite.com/portfolio/updated-websites/community-science-museum/home.html");
}
function linkRecycle() {
    window.open("http://www.furresite.com/portfolio/updated-websites/re-cycle/index.html");
}
function linkWooden() {
    window.open("http://www.furresite.com/wooden-toys/index.html");
}
function linkDecor() {
    window.open("http://furresite.com/home-decor/index.html");
}
function linkBoardGame() {
    window.open("http://furresite.com/board-game-of-thrones/index.html");
}