<?php

namespace App\Http\Controllers;

use App\Favourite;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class FavouriteController extends Controller
{
    public static function store()
    {
        $userId = Auth::user()->id;
        $movieId = request("movieId");

        if (Favourite::where('movie_Id', $movieId)->where('user_Id', $userId)->exists()) {
            Session::flash('error_message', "Movie already added to favourite");
        } else {

            $favourite = new Favourite();

            $favourite->movie_id = $movieId;
            $favourite->user_id = $userId;

            $favourite->save();

            Session::flash('flash_message', "Movie added to favourite");
        }

        return redirect()->back();
    }
}
