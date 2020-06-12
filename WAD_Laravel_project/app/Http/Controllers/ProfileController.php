<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Movie;
use App\Favourite;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ProfileController extends Controller
{
    public static function index()
    {
        $userId = Auth::user()->id;

        $favouriteIDs = Favourite::where('user_id', $userId)->get('movie_id');

        $favouriteMovies = DB::table('movies')->whereIn('id', $favouriteIDs)->get();

        return view('profile',["name" => Auth::user()->name,"movies" => $favouriteMovies]);
    }
}
