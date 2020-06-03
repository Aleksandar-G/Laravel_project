<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Movie;
use Illuminate\Support\Facades\Session;

class AdminPageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $movies = Movie::all();

        return view("adminPage", ["movies" => $movies]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $movieName = request("addMovie");

        $movie = new Movie();

        $movie->name = $movieName;
        $movie->avg_rating = 0;
        try {

            $movie->save();
            Session::flash('flash_message', "Movie added");

        } catch (\Exception $e) {

            Session::flash('error_message', "Movie already added");
        }


        return redirect()->back();

        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $movieId = request("Updatemovie");
        $newName = request("NewName");

        $movie = Movie::findOrFail($movieId);

        $movie->name = $newName;

        $movie->update();

        Session::flash('flash_message', "Movie updated");


        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $movieId = request("DeleteMovie");

        $movie = Movie::findOrFail($movieId);

        $movie->delete();

        Session::flash('flash_message', "movie deleted");

        return redirect()->back();

       
    }
}
