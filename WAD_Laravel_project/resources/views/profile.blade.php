@extends('layouts.app')

@section('content')
<div id="ContentPage" style="max-width:1564px"></div>
<div id="movieSection">
    <img class="backgroundImg" src="../images/background.jpg">
    <div class="usernameDiv">
        <h1 id="username">{{ $name }}</h1>
    </div>
    <div class="favoritesDiv">
        <h3>Your Favorites</h3>
    </div>

</div>
@foreach($movies as $mv)

<div class="movieCol">
    <div class="movieCard">
        <div class="movieCardBanner">{{ $mv->name }}</div>

        <img src="/images/Logo.png" alt="Movie" class="moviePoster" id="{{ $mv->name }}" style="width:99%">
        <div class="movieRating">{{ round($mv->avg_rating, 1) }}</div>

    </div>
</div>
@endforeach
}

// Close DB connection
$conn = null;

?>

@endsection

<script src="../scripts/profileScripts.js"></script>