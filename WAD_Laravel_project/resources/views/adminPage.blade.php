@extends('layouts.adminPageLayout')

@section('content')
<ul>
    <li><a id="addPage">Add movie</a></li>
    <li><a id="deletePage">Delete movie</a></li>
    <li><a id="updatePage">Update movie</a></li>
</ul>

@if(Session::has('flash_message'))
<div class="alert alert-success">
    {{ Session::get('flash_message') }}
</div>
@endif
@if(Session::has('error_message'))
<div class="alert alert-danger">
    {{ Session::get('error_message') }}
</div>
@endif

<form id="addMovieForm" action="/adminPage" method="POST">
    @csrf
    <div class="container">
        <h2>Add new movie</h2>
        <div class="container">
            <label for="Name"><b>Name</b></label>
            <input type="text" placeholder="Enter Name of the movie" name="addMovie" id="nameField" required>

        </div>

        <button id="addBtn" type="submit">Add</button>

    </div>
</form>
<form id="updateMovieForm" action="/adminPage/foo" method="POST">
    @csrf
    @method('PUT')
    <div class="container">
        <h2>Update the movie name</h2>
        <div class="container">
            <label for="Name"><b>Name</b></label>
            <select id="moviesSelectUpdate" name="Updatemovie">
                @foreach($movies as $movie)
                <option value="{{ $movie->id }}"> {{ $movie->name }} </option>
                @endforeach
            </select>

            <label for="newName"><b>New name</b></label>
            <input type="text" placeholder="New name" name="NewName" id="newNameField" required>
        </div>

        <button id="updateBtn" type="submit">Update</button>

    </div>
</form>
<form id="deleteMovieForm" action="/adminPage/foo" method="POST">
    @csrf
    @method('DELETE')
    <div class="container">
        <h2>Delete a movie</h2>
        <div class="container">
            <label for="Name"><b>Name</b></label>
            <select id="moviesSelectDelete" name="DeleteMovie">
                @foreach($movies as $movie)
                <option value="{{ $movie->id }}"> {{ $movie->name }} </option>
                @endforeach
            </select>

        </div>

        <button id="deleteBtn" type="submit">Delete</button>

    </div>
</form>

<script>
   $(".alert").fadeTo(3000, 500).slideUp(500, function() {
            $(".alert").slideUp(500);
        }); 
</script>
@endsection



