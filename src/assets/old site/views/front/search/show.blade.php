@extends('layouts.front')
@section('title','Search')
@section('css') @endsection
@section('body')
    <!-- main -->

    <main>

        <!-- article-title -->

        <section id="article-title"
                 class="d-flex top align-items-center justify-content-center py-5 px-2 position-relative">
            <div class="container text-white fw-bold text-center my-5 py-5 position-relative">
                <h1 class="display-1">Search</h1>
                <div class="d-flex align-items-center justify-content-center gap-1">
                    <a href="{{route('front.index')}}"
                       class="d-block primary-color fw-bold text-decoration-none">{{read_lang_word('منو','1')}}</a>
                    <span>/</span>
                    <span class="text-white-50">Search</span>
                </div>
            </div>
        </section>

        <!-- articles -->
        @if(count($blogs) || count($products))
            @if(count($blogs))
                <section id="articles" class="mt-5 py-5 left">
                    <div class="container">
                        <div class="text-center">
                    <span class="h3">
                        {{read_lang_word('هدر-صفحات-داخلی','blog2')}}
                    </span>

                        </div>

                        <div class="row g-4 mt-5 text-center">
                            @foreach($blogs as $item)
                                @include('front.blog.includes.card',['item'=>$item])
                            @endforeach

                        </div>

                    </div>
                </section>
            @endif
            @if(count($products))
                    <section id="articles" class="mt-5 py-5 left">
                        <div class="container">
                            <div class="text-center">
                    <span class="h3">
                        {{read_lang_word('هدر-صفحات-داخلی','product')}}
                    </span>
                            </div>
                            <div class="row g-4 mt-5">
                                @foreach($products as $key=>$item)
                                    <div class="col-xxl-3 col-md-4 col-sm-6">
                                        <div class="card_category">
                                            <div class="">
                                                <a href="{{route('front.product.show',[$item->name,$item->id])}}" class="title_h1">
                                                    {{read_lang($item,'name')}}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                @endforeach

                            </div>
                        </div>
                    </section>
            @endif
        @else
            <section id="articles" class="mt-5 py-5 left">
                <div class="container">
                    <div class="text-center">
                    <span class="h3">
                      Not found
                    </span>
                    </div>
                </div>
            </section>

        @endif
    </main>


{{--    @if(count($products) || count($blogs))
        @if(count($products))
            <section class="section_product_page">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 {{app()->getLocale()=='fa'?'text-right':'text-left'}}" >
                            <h3>{{__('text.page_name.product')}} ({{count($products)}})</h3>
                        </div>
                        @foreach($products as $key=>$item)
                            <div class="col-xl-6">
                                <div class="blog-card"
                                     onclick="return window.location.href='{{route('user.product.show',app()->getLocale()=='fa'?$item->slug:$item->slug_en)}}'">
                                    <div class="meta">
                                        <div class="photo"
                                             style="background-image: url(({{$item->photo?url($item->photo->path):url('includes/asset/user/pic/nopic.jpg')}}))"></div>
                                        <ul class="details d-ltr">
                                            @if($item->category)
                                                <li class="category"><a
                                                            href="{{route('user.product.index',$item->category_id)}}">{{set_lang($item->category,'name',app()->getLocale())}}</a>
                                                </li>
                                            @endif
                                            <li class="view">{{$item->seen}}</li>
                                        </ul>
                                    </div>
                                    <div class="description">
                                        <h1>{{set_lang($item,'name',app()->getLocale())}}</h1>
                                        <p> {{str_limit(set_lang($item,'short_text',app()->getLocale()),120,'...')}}</p>
                                        <p class="read-more">
                                            <a href="{{route('user.product.show',app()->getLocale()=='fa'?$item->slug:$item->slug_en)}}">{{__('text.read_more')}}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        @endforeach

                    </div>
                </div>
            </section>
        @endif

        @if(count($blogs))
            <section class="main_blog_area">
                <div class="container-fluid">
                    <div class="row main_blog_inner">
                        <div class="col-12 {{app()->getLocale()=='fa'?'text-right':'text-left'}}">
                            <h3>{{__('text.page_name.blog')}} ({{count($blogs)}})</h3>
                        </div>
                        @foreach($blogs as $item)
                            @include('front.blog.includes.card',['item'=>$item])
                        @endforeach
                    </div>
                </div>
            </section>
        @endif
    @else
        <div class="col-12 alert alert-danger text-center">
            {{__('text.not_found_msg')}}
        </div>
    @endif
    --}}

@endsection
@section('js')
@endsection