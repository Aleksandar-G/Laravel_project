//let fiveStarRating = document.getElementById("stars").getElementsByTagName("li");
let fiveStarRating = document.getElementsByClassName("stars");
console.log(fiveStarRating);
for (let i = 0; i < fiveStarRating.length; i++) {
    //fiveStarRating[i].getElementsByTagName("li").addEventListener('click', this.AddRating);
    //fiveStarRating.getElementsByTagName("li")[i].addEventListener('click', this.AddRating);
    console.log(fiveStarRating[i]);
    //console.log(fiveStarRating[i].getElementsByTagName("li").parentElement.getAttribute('value'));
    for (let x = 0; x < 5; x++) {
        fiveStarRating[i].getElementsByTagName("li")[x].addEventListener('click', this.AddRating);
    }
}

$(document).ready(function() {

    /* 1. Visualizing things on Hover - See next part for action on click */
    $('.stars li').on('mouseover', function() {
        var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

        // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children('li.star').each(function(e) {
            if (e < onStar) {
                $(this).addClass('hover');
            } else {
                $(this).removeClass('hover');
            }
        });

    }).on('mouseout', function() {
        $(this).parent().children('li.star').each(function(e) {
            $(this).removeClass('hover');
        });
    });


    /* 2. Action to perform on click */
    $('.stars li').on('click', function() {
        var onStar = parseInt($(this).data('value'), 10); // The star currently selected
        var stars = $(this).parent().children('li.star');

        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
        }

        for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('selected');
        }
    });
});

function AddRating(event) {
    event.preventDefault();
    let selectedLiElement = event.target.parentElement;
    let selectedMovieId = selectedLiElement.parentNode.getAttribute('value');
    let ratingValue = event.target.parentElement.getAttribute('data-value');

    let xhrObject = new XMLHttpRequest();
    let movieId = event.target.getAttribute('value');
    xhrObject.onload = function() { //when readystate changes
        if (xhrObject.status == 200) { //if server status was ok
            //console.log(xhrObject.response);
            if (xhrObject.response == 1) {
                alert("Something went wrong");
            } else {

                alert("Review added successfully!");
            }
        }
    }

    xhrObject.open('POST', "../logic/movieRatings.php", true);
    xhrObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhrObject.send("movieId=" + selectedMovieId + "&rating=" + ratingValue);
}