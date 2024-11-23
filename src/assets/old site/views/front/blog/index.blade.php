@extends('layouts.front')
@section('title','Articles')
@section('styles')
@endsection
@section('body')
  <!-- main -->

  <main>

    <!-- article-title -->

    <section id="article-title"
             class="d-flex top align-items-center justify-content-center py-5 px-2 position-relative">
      <div class="container text-white fw-bold text-center my-5 py-5 position-relative">
        <h1 class="display-1">{{read_lang_word('هدر-صفحات-داخلی','blog2')}}</h1>
        <div class="d-flex align-items-center justify-content-center gap-1">
          <a href="{{route('front.index')}}"
             class="d-block primary-color fw-bold text-decoration-none">{{read_lang_word('منو','1')}}</a>
          <span>/</span>
          <span class="text-white-50">{{read_lang_word('منو','2')}}</span>
        </div>
      </div>
    </section>

    <!-- articles -->
    @if(count($items))
      <section id="articles" class="mt-5 py-5 left">
        <div class="container">
          <div class="text-center">
                    <span class="h3">
                        {{read_lang_word('هدر-صفحات-داخلی','blog2')}}
                    </span>
            <h1 class="display-6 my-4">
              {{read_lang_word('هدر-صفحات-داخلی','blog3')}}
            </h1>

          </div>

          <div class="row g-4 mt-5 text-center">
            @foreach($items as $item)
              @include('front.blog.includes.card',['item'=>$item])
            @endforeach
            <div class="col-12 text-center paginate">
              {{$items->appends(Request::except('page'))->links('pagination::bootstrap-4')}}
            </div>
          </div>

        </div>
      </section>
    @endif
  </main>

@endsection

@section('scripts')
@endsection
