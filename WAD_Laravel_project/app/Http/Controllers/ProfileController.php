<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Movie;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    public static function index()
    {
        $movies = Movie::all();

            return view('profile',["name" => Auth::user()->name,"movies" => $movies]);
    }

    public static function store()
    {
        error_log("stana");
        var_dump("hello");
    }
}
