/*Gets height of navbar and adds empty div
  with same height to the top so that navbar
  and content don't overlap at top*/
var navbarHeight = document.getElementById("navbarContain").clientHeight;
var navbaremptySpaceVar = document.getElementById("navbaremptySpace");
navbaremptySpaceVar.style.height = navbarHeight + 'px';

var anchorNavbarSpace = document.getElementsByClassName("emptySpaceforMenuonAnchors")
function automatedSpacing() {
    for (i = 0; i < anchorNavbarSpace.length; i++) {
        anchorNavbarSpace[i].style.height = navbarHeight + 'px';
        //anchorNavbarSpace[i].style.background = "blue";
    }
}

/*Burger menu icon height same as navbar height and positioned within it*/
var burgMenuIcon = document.getElementById("burger");
burgMenuIcon.style.height = navbarHeight + 'px';
burgMenuIcon.style.width = navbarHeight + 'px';

var exitMenuIcon = document.getElementById("exitButton");
exitMenuIcon.style.height = navbarHeight + 'px';
exitMenuIcon.style.width = navbarHeight + 'px';

/*Burger Menu expands hidden menu options elements*/
var dropDown = document.getElementsByClassName("dropdown");
function dropdownEffect() {
    for (i = 0; i < dropDown.length; i++) {
        dropDown[i].style.display = "block";
    }
    burgMenuIcon.style.display = "none";
    exitMenuIcon.style.display = "block";
}

function bringupeffect() {
    for (i = 0; i < dropDown.length; i++) {
        dropDown[i].style.display = "none";
    }
    burgMenuIcon.style.display = "block";
    exitMenuIcon.style.display = "none";
}
