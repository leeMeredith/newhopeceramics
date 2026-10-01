//date
//var date_Time new Object();

var myVar;
var myDateTime;

var myId;
var setMil = 500;

var idMinWidth = 0;
var idMinWidthTest = 0;

var idMatchMedia = 0;

//alertMatchMedia---------------------------------------_
function alertMatchMedia() {
	if (window.matchMedia("(min-width: 320px)").matches) {
		idMinWidth = 0;
	}
	if (window.matchMedia("(min-width: 375px)").matches) {
		idMinWidth = 1;
	}
	if (window.matchMedia("(min-width: 425px)").matches) {
		idMinWidth = 2;
	}
	if (window.matchMedia("(min-width: 768px)").matches) {
		idMinWidth = 3;	
	}
	if (window.matchMedia("(min-width: 1024px)").matches) {
		idMinWidth = 4;	
	}
	if (window.matchMedia("(min-width: 1440px)").matches) {
		idMinWidth = 5;	
	}
	if (window.matchMedia("(min-width: 2560px)").matches) {
		idMinWidth = 6;	
	}
	if(idMinWidth != idMinWidthTest){
		//console.log(idMinWidth);
		idMinWidthTest = idMinWidth;
		//return idMinWidth;
	}
	
}

//setInterval---------------------------------------_
myVar = setInterval(myMMIn, setMil);


//myTimer-------------------------------------------_
function myMMIn() {
    alertMatchMedia();
    idMatchMedia = idMinWidth;
    //console.log(idMinWidth);
}