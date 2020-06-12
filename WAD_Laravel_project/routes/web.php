<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/profile', 'ProfileController@index')->middleware('auth');

//Route::get('/adminPage', 'AdminPageController@index')->middleware('auth');

Route::resource('/adminPage', 'AdminPageController')->middleware('auth');

Route::resource('/editInfo', 'EditInfoController')->middleware('auth');

Route::get('/Profile', 'ProfileController@index')->middleware('auth');

Route::post('/AddFavorite', 'FavouriteController@store')->middleware('auth');
