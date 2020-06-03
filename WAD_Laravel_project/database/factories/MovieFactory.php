<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use App\Movie;
use Faker\Generator as Faker;

$factory->define(Movie::class, function (Faker $faker) {
    return [
        'name' => $faker->text($maxNbChars = 20),
        'avg_rating' => $faker->numberBetween(1,5),
        'created_at' => now(),
        'updated_at' =>  now()
    ];
});
