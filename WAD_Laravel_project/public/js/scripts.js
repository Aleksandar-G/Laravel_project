let profileBtn = document.getElementById("Profile");
let hamburgerMenu = document.getElementById("hamburgerMenu");
let ratingStars = document.getElementsByClassName("star");
/*let buttons = document.getElementsByTagName("p");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", this.addFavourite)
    console.log(buttons[i]);
}*/
//console.log(profileBtn);
profileBtn.addEventListener("click", this.loginCheck);
hamburgerMenu.addEventListener("click", this.myFunction);
document.getElementById("logOut").addEventListener("click", this.LogOut);


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//document.getElementsByTagName("html")[0].addEventListener("onload", this.loginLoadCheck)
window.onload = this.loginLoadCheck();


function loginCheck() {

    let xhrObject = new XMLHttpRequest();

    xhrObject.onload = function() { //when readystate changes
        if (xhrObject.status == 200) { //if server status was ok
            //console.log(xhrObject.response);
            if (xhrObject.response == 1) {
                location.replace("../forms/LoginForm.php");
            } else {
                let userObjects = JSON.parse(xhrObject.response);

                location.replace("../forms/Profile.php")

            }
        }
    }

    xhrObject.open('POST', "../logic/loginCheck.php", true);
    xhrObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhrObject.send("action=logincheck");

}

function loginLoadCheck() {
    let xhrObject = new XMLHttpRequest();
    console.log("OK")
    xhrObject.onload = function() { //when readystate changes

        if (xhrObject.status == 200) { //if server status was ok
            //console.log(xhrObject.response);
            if (xhrObject.response == 1) {
                document.getElementById("logOut").innerHTML = "LogIn";
                for (let i = 0; i < buttons.length; i++) {
                    buttons[i].style.display = "none";
                }
                for (let x = 0; x < ratingStars.length; x++)
                {
                    ratingStars[x].style.display = "none";
                }

            } else {
                let userObjects = JSON.parse(xhrObject.response);
                //console.log(xhrObject.response);
                document.getElementById("logOut").innerHTML = "Log Out";
                //alert(userObjects.username)
                //document.getElementById("Profile").innerHTML = userObjects.username;
            }
        }
    }

    xhrObject.open('POST', "../logic/loginCheck.php", true);
    xhrObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhrObject.send("action=logincheck");
}

function LogOut() {
    let xhrObject = new XMLHttpRequest();

    xhrObject.onload = function() {
        if (xhrObject.status == 200) { //if server status was ok
            //console.log(xhrObject.response);
            if (xhrObject.response == 0) {
                //console.log(xhrObject.response + "znachi e nula");
                //location.replace("/index.html")
                location.reload();
            } else {
                //console.log("aaa zashto");
                location.replace("../forms/LoginForm.php");
            }
        }
    }
    xhrObject.open('POST', "../logic/loginCheck.php", true)
    xhrObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhrObject.send("action=logOut");
}

function addFavourite(event) {
    event.preventDefault();
    console.log("ok do tuk");
    let xhrObject = new XMLHttpRequest();
    let movieId = event.target.getAttribute('value');
    console.log(event.target.getAttribute('value') + "  eto tuk");
    console.log(event.target);
    xhrObject.onload = function() { //when readystate changes
        if (xhrObject.status == 200) { //if server status was ok
            console.log(xhrObject.response);
            if (xhrObject.response == 1) {
                alert("Movie already added!");
            } else {

                alert("Movie Added!");
            }
        }
    }

    xhrObject.open('POST', "../logic/favouriteLogic.php", true);
    xhrObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhrObject.send("movieId=" + movieId);
}