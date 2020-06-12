@extends('layouts.app')
@section('styles')
<link rel="stylesheet" href="/css/editInfo.css">
@endsection

@section('content')
<form action="/editInfo/update" method="POST">
    @csrf
    @method('PUT')
    <div class="container">
        <h2>Add new movie</h2>
        <div class="container">
            <label for="Name"><b>Name</b></label>
            <input type="text" name="name" id="name" required>
            <label for="Name"><b>Email</b></label>
            <input type="text" name="email" id="email" required>
            <label for="Name"><b>password</b></label>
            <input type="password" name="password" id="password">

        </div>

        <button id="btnUpdate" type="submit">Update information</button>

    </div>
</form>

<form action="/editInfo/delete" method="POST">
@csrf
@method('DELETE')
<button id="btnDelete" type="submit">Delete Profile</button>
</form>
@endSection

@section('resources')

<script>
    window.onload = function(e) {

        document.getElementById("name").value = "{{ $user->name }}";
        document.getElementById("email").value = "{{ $user->email }}";
    }
</script>
@endsection