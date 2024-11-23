@extends('layouts.front')
@section('title','Productcategory')
@section('styles')
@endsection
@section('body')
 <!-- main -->

 <main>

  <!-- article-title -->

  <section id="article-title"
           class="d-flex top align-items-center justify-content-center py-5 px-2 position-relative">
   <div class="container text-white fw-bold text-center my-5 py-5 position-relative">
    <h1 class="display-1">{{read_lang_word('هدر-صفحات-داخلی','product')}}</h1>
    <div class="d-flex align-items-center justify-content-center gap-1">
     <a href="{{route('front.index')}}"  class="d-block primary-color fw-bold text-decoration-none">{{read_lang_word('منو','1')}}</a>
     <span>/</span>
     <a href="{{route('front.product.list')}}"  class="d-block primary-color fw-bold text-decoration-none">{{read_lang_word('منو','9')}}</a>
     <span>/</span>
     <span class="text-white-50">{{$items[0]?$items[0]->category->name:''}}</span>
    </div>
   </div>
  </section>
  <section id="articles" class=" py-5 top">
    <div class="container">
        <div class="row g-4 mt-5">
            @foreach($items as $item)
            @include('front.product.category.includes.card')
            @endforeach

         <div class="col-12 text-center paginate">
          {{$items->appends(Request::except('page'))->links('pagination::bootstrap-4')}}
         </div>
        </div>
    </div>
</section>

 </main>

@endsection

@section('scripts')
@endsection