<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class MovieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       /* DB::table('movies')->insert([
            'name' => Str::random(10),
            'rating' => Str::random(10).'@gmail.com',
            'password' => Hash::make('password'),
        ]);
       }*/

        factory(App\Movie::class, 20)->create();
    }
}
