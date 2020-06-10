<?php

namespace App\Http\Controllers;

use App\Favourite;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FavouriteController extends Controller
{
    public static function store()
    {
        $userId = Auth::user()->id;
        $movieId = request("movieId");

        $favourite = new Favourite();

        $favourite->movie_id = $movieId;
        $favourite->user_id = $userId;

        $favourite->save();

        return redirect()->back();
    }
}
