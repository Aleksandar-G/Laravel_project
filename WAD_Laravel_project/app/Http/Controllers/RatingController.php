<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Rating;
use App\Movie;
use Illuminate\Support\Facades\DB;

class RatingController extends Controller
{
    public static function store()
    {
        $movieId = request("movie_id");
        $rat = request("rating");
        $newRating = new Rating();

        $newRating->movie_id = $movieId;
        $newRating->rating = $rat;
        $newRating->save();

        $avg = DB::table('ratings')
                        ->where('movie_id', $movieId)
                        ->groupBy('movie_id')
                        ->avg('rating');

        $movie = Movie::find($movieId); 

        $movie->avg_rating = $avg;

        $movie->update();
        

    }
}
