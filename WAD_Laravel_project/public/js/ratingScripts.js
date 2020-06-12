//let fiveStarRating = document.getElementById("stars").getElementsByTagName("li");
let fiveStarRating = document.getElementsByClassName("stars");
console.log(fiveStarRating);
for (let i = 0; i < fiveStarRating.length; i++) {
    console.log(fiveStarRating[i]);
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
    $('.stars li').on('click', function(e) {
        var onStar = parseInt($(this).data('value'), 10); // The star currently selected
        var stars = $(this).parent().children('li.star');

        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
        }

        for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('selected');
        }


        e.preventDefault();


        let selectedLiElement = e.target.parentElement;
        let selectedMovieId = selectedLiElement.parentNode.getAttribute('value');
        let ratingValue = e.target.parentElement.getAttribute('data-value');

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        $.ajax({
            type: 'POST',
            url: "/AddRating",
            data: { movie_id:selectedMovieId, rating:ratingValue },
            success: function (data) {
                location.reload();
            }
        });
    });
});