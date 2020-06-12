<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class EditInformationController extends Controller
{
    public static function index()
    {
        return view("editInfo",["user" => Auth::user()]);
    }

    public static function update()
    {

        $name = request("name");
        $email = request("email");
        $password = request("password");

        $user = User::findOrfail(Auth::user()->id);

        $user->name = $name;
        $user->email = $email;

        if($password != null || $password != "")
        {
            $user->password = Hash::make($password);
        }

        $user->update();

        Session::flash('flash_message', "Information updated");

        return redirect('/home');
    }
}
