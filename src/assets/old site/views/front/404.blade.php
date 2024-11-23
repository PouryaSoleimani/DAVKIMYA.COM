@extends('layouts.front')
@section('title','404')
@section('styles')
@endsection

@section('body')

    <!-- main -->

    <main>

        <!-- 404-title -->

        <section id="error404-title" class="d-flex px-2 position-relative left">
            <div class="container text-white text-center text-md-start fw-bold my-5 py-5 position-relative">
                <span class="display-1 p-2 shadow-none">404</span>
                <h1 class="mt-5 pt-5">
                    Page Not Found
                </h1>
                <p class="h5 mt-4 mb-5 pb-5">The Page You Requested Could Not Be Found. Were Working On It.</p>
                <div class="d-flex flex-column flex-md-row align-items-center gap-5">
                    <a href="index.html"
                        class="d-flex align-items-center justify-content-center gap-2 primary-color text-decoration-none">
                        BACK TO HOMEPAGE
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="currentColor"
                            class="flex-shrink-0 bi bi-arrow-right-short mt-1" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                        </svg>
                    </a>
                    <a
                        class="primary-bg text-white d-flex align-items-center justify-content-center py-2 transition shadow-lg fw-bold text-decoration-none previous">
                        PREVIOUS PAGE
                    </a>
                </div>
            </div>
        </section>

    </main>

@endsection

@section('scripts')
@endsection
