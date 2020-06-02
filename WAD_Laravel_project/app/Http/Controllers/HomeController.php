<?php

namespace App\Http\Controllers;

use App\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
       
        //var_dump( Auth::user()->name);
        if(Auth::user()->name == "admin")
        {
           return redirect("/adminPage");
        }
        else
        {
            $movies = Movie::all();

            return view('home',["movies" => $movies]);
        }
    }
}
