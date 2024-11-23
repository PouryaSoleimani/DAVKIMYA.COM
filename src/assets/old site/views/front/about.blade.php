@extends('layouts.front')
@section('title','About')
@section('styles')
    <style>
        .text-justify
        {
            text-align: justify!important;
        }
    </style>
@endsection

@section('video_modal')
    <!-- play video modal -->
    <div class="modal fade" id="staticBackdrop" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" style="max-width: 70%;">
            <div class="modal-content bg-black">
                <div class="modal-body">
                    <video controls class="w-100">
                        <source
                         src="{{is_file($item->video)?url($item->video):url('assets/front/img/vecteezy_oil-and-gas-refinery-plant-factory-industry-petroleum-zone-pipe-steel-and-oil-storage-tank_2020788.mp4')}}">

                    </video>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('body')

    <!-- main -->

    <main>

        <!-- about-title -->

        <section id="about-title"
            class="d-flex top align-items-center justify-content-center py-5 px-2 position-relative">
            <div class="container text-white fw-bold text-center my-5 py-5 position-relative">
                <h1 class="display-1"> {{read_lang_word('منو','4')}}</h1>
                <div class="d-flex align-items-center justify-content-center gap-1">
                    <a href="{{url('/')}}" class="d-block primary-color fw-bold text-decoration-none">{{read_lang_word('منو','1')}}</a>
                    <span>/</span>
                    <span class="text-white-50"> {{read_lang_word('منو','4')}}</span>
                </div>
            </div>
        </section>

        <!-- about -->

        <section id="about" class="my-5 top">
            <div class="container">
                <div class="row g-4 align-items-center">
                    <div class="col-lg-5 position-relative">
                        <img src="{{is_file($item->pic)?url($item->pic):url('assets/front/img/home1/blog-1.jpg')}}" alt="{{$item->title}}" class="img-fluid">
                    </div>
                    <div class="col-1"></div>
                    <div class="col-lg-6">
                        <div class="text-justify">
                            <span class="h3">
                                 {{read_lang_word('منو','4')}}
                            </span>
                            <p class="text-muted">
                                {!! read_lang($item,'text') !!}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="description" class="my-5 py-5 top ">
            <div class="row mt-5 mx-0">
                <div class="col-lg-6 px-0">
                    <!-- swiper -->
                    <div class="swiper description h-100">
                        <div class="swiper-wrapper">
                            <!-- slide -->
                            <div class="swiper-slide">

                            </div>
                            <!-- slide -->
                            <div class="swiper-slide">

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 px-0">
                    <div class="bg-black2 p-5 text-white">
                        <img alt="desc" src="{{url('assets/front/img/desc1.PNG')}}">
                        <p class="text-justify">
                            {!! read_lang($item,'text1') !!}
                        </p>
                    </div>
                    <div class="primary-bg p-5 text-dark">
                        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" fill="currentColor"
                             class="bi bi-globe-americas" viewBox="0 0 16 16">
                            <path
                                    d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
                        </svg>
                        <p>
                            {!! read_lang($item,'text2') !!}
                        </p>
                    </div>
                </div>
            </div>
        </section>


         

    </main>

@endsection

@section('scripts')
@endsection
