let buttons = document.getElementsByTagName("p");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", this.addFavourite)
    console.log(buttons[i].value);
}

function addFavourite(event) {
    event.preventDefault();
    console.log("ee dobre");
    let xhrObject = new XMLHttpRequest();
    let movieId = event.target.getAttribute('value');
    xhrObject.onload = function() {
        //when readystate changes
        if (xhrObject.status == 200) { //if server status was ok
            console.log(xhrObject.response);
            if (xhrObject.response == 1) {
                alert("Movie already added!");
            } else {

                alert("Movie Added!");
            }
        }
    }

    xhrObject.open('POST', "/AddFavorite", true);
    //xhrObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhrObject.send();
}