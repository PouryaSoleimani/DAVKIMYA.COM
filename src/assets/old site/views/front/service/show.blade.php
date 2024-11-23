@extends('layouts.front')
@section('title','Single Service')
@section('styles')
@endsection

@section('body')

    <!-- main -->

    <main>

        <!-- project-title -->

        <section id="project-title"
            class="d-flex align-items-center top justify-content-center py-5 px-2 position-relative">
            <div class="container text-white fw-bold text-center my-5 py-5 position-relative">
                <h1 class="display-1">{{read_lang($item,'title')}}</h1>
                <div class="d-flex align-items-center justify-content-center gap-1">
                    <a href="{{route('front.index')}}" class="d-block primary-color fw-bold text-decoration-none">{{read_lang_word('منو','1')}}</a>
                    <span>/</span>
                    <span class="text-white-50">{{read_lang_word('زیر-منو','3')}}</span>
                </div>
            </div>
        </section>

        <!-- single service -->

        <section id="single-service" class="container my-5 left">
            <div class="row g-4">
                <div class="col-lg-8">
                    <div>
                        <img src="{{$item->photo && is_file($item->photo->path)?url($item->photo->path):url('assets/front/img/home1/blog-1.jpg')}}" alt="{{$item->title}}"
                            class="img-fluid">
                    </div>
                    <h1 class="fw-bold my-3">
                        {{read_lang($item,'title')}}
                    </h1>
                    <!--<p class="primary-color fw-bold h5 mb-5">-->
                    <!--    ” Lorem ipsum dolor sit amet consectetur adipiscing elit sed imperdiet arcu semper imperdiet-->
                    <!--    dictum donec sagittis ut ligula a placerat sed vitae blandit metus. “-->
                    <!--</p>-->
                    <p class="text-secondary">{!! strip_tags(read_lang($item , 'text')) !!}</p>
                </div>
                <div class="col-lg-4">
                    <form class="position-relative">
                        <input type="search" class="form-control w-100">
                        <div class="position-absolute text-white primary-bg p-2 end-0 top-0 bottom-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor"
                                class="bi bi-search cursor" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </div>
                    </form>
                    <div class="mt-5">
                        <h2 class="fw-bold">{{read_lang_word('هدر-صفحات-داخلی','service2')}}</h2>
                        @foreach($items_last as $item)
                        <div>
                            <a href="{{route('front.service.show',[$item->id])}}"
                                class="d-flex align-items-center gap-1 cursor primary-color text-decoration-none fw-bold h5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                    class="flex-shrink-0 bi bi-arrow-right-short text-dark mt-1" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                                {{read_lang($item , 'title')}}
                            </a>
                        </div>
                        @endforeach
                    </div>
                    <div class="mt-5">
                        <h2 class="fw-bold"> {{read_lang_word('صفحه-داخلی-بلاگ','article')}}</h2>
                        <div class="mt-4">
                            @foreach($articles_last as $article)
                            <div class="mb-4">
                                <a  href="{{route('front.blog.show',[$article->type,$article->id])}}" class="d-block h4 cursor text-decoration-none transition fw-bold">{{read_lang($article,'title')}}</a>
                                <span class="primary-color fw-bold h5">{{Carbon\Carbon::parse($article->created_at)->toFormattedDateString()}}</span>
                            </div>
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>

  
@endsection

@section('scripts')
@endsection