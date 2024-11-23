@extends('layouts.admin')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{Auth::user()->username}}</div>

{{dd(4444)}}
            </div>
        </div>
    </div>
</div>
@endsection
