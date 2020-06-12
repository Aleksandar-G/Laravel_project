@extends('layouts.app')

@section('content')

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
<div id="ContentPage" style="max-width:1564px">
    <div id="movieSection">
        <h3 id="movieSectionHeader">Movies</h3>
    </div>


    @foreach($movies as $mv)

    <div class="movieCol">
        <div class="movieCard">
            <div class="movieCardBanner">{{ $mv->name }}</div>

            <img src="/images/Logo.png" alt="Movie" class="moviePoster" id="{{ $mv->name }}" style="width:99%">
            <div class="movieRating">{{ round($mv->avg_rating, 2) }}</div>
            <form action="/AddFavorite" method="POST">
                @csrf
                <button class="fa fa-heart fa-fw" id="heart" type="submit"></button>
                <input type="hidden" name="movieId" value="{{ $mv->id }}">
            </form>
            <section class='rating-widget'>
                <!-- Rating Stars Box -->
                <div class='rating-stars text-center'>
                    <ul class='stars' value="{{ $mv->id }}">
                        <li class='star' data-value='1'>
                            <i class='fa fa-star fa-fw'></i>
                        </li>
                        <li class='star' data-value='2'>
                            <i class='fa fa-star fa-fw'></i>
                        </li>
                        <li class='star' data-value='3'>
                            <i class='fa fa-star fa-fw'></i>
                        </li>
                        <li class='star' data-value='4'>
                            <i class='fa fa-star fa-fw'></i>
                        </li>
                        <li class='star' data-value='5'>
                            <i class='fa fa-star fa-fw'></i>
                        </li>
                    </ul>
                </div>

            </section>
            </form>
        </div>
    </div>
    @endforeach



</div>

@endsection

@section('resources')
<script type="text/javascript" src="js/scripts.js"></script>
<script type="text/javascript" src="js/ratingScripts.js"></script>

@endsection