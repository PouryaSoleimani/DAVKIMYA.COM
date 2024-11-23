@extends('layouts.front')
@section('title','Project')
@section('styles')
@endsection
@section('body')
    <!-- main -->

    <main>

        <!-- project-title -->

        <section id="project-title"
            class="d-flex align-items-center top justify-content-center py-5 px-2 position-relative">
            <div class="container text-white fw-bold text-center my-5 py-5 position-relative">
                <h1 class="display-1">{{read_lang_word('هدر-صفحات-داخلی','project')}}</h1>
                <div class="d-flex align-items-center justify-content-center gap-1">
                    <a href="{{route('front.index')}}" class="d-block primary-color fw-bold text-decoration-none">{{read_lang_word('منو','1')}}</a>
                    <span>/</span>
                    <span class="text-white-50">{{read_lang_word('منو','7')}}</span>
                </div>
            </div>
        </section>

        <!-- project -->

        <section id="articles" class="mt-5 py-5 top">
            <div class="container">
                <div class="text-center">
                    <span class="h3">
                        {{read_lang_word('هدر-صفحات-داخلی','project')}} 
                    </span>
                    <h1 class="display-6 my-4">
                        BOILE has done many projects<br> around the world
                    </h1>
                    
                </div>
                <div class="row g-4 mt-5">
                    @foreach($items as $item)
                    @include('front.project.includes.card')
                    @endforeach
                </div>
            </div>
        </section>

          <!-- faqs -->

        <section id="faqs" class="my-5 py-5 top container">
            <div class="row g-4">
                <div class="col-lg-4">
                    <div class="container px-0 position-relative text-center text-lg-start">
                        <span class="h3">{{read_lang_word('منو','8')}}</span>
                        <h1 class="my-3">{{read_lang_word('هدر-صفحات-داخلی','faq')}}</h1>
                        
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="row">
                        @include('front.faq.includes.card',['items'=>$faqs])
                    </div>
                </div>
            </div>
        </section>

    </main>

   
@endsection
@section('scripts')
@endsection