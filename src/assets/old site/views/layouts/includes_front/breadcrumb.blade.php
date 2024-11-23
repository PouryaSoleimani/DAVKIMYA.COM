@if(\Request::route()->getName()!='front.index' && $title)
<!--breadcrumb section start-->
<section class="breadcrumb-section position-relative z-2 overflow-hidden mt--75 d-none-print"
         data-background="{{url('assets/front/img/shapes/texture-bg.png')}}">
  <img src="{{url('assets/front/img/shapes/tire-print-left.png')}}" alt="tire print"
       class="position-absolute start-0 z-1 tire-print">
  <img src="{{url('assets/front/img/shapes/tire-print-right.png')}}" alt="tire print"
       class="position-absolute end-0 z-1 tire-print">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="breadcrumb-content-wrapper text-center position-relative z-3">
          <h1 class="text-white">{{$title}}</h1>
          <ol class="breadcrumb justify-content-center">
            <li class="breadcrumb-item text-white fw-500"><a href="{{route('front.index')}}">{{read_lang_word('هدر-صفحات-داخلی','all')}}</a></li>
            <li class="breadcrumb-item text-white fw-500">{{$title}}</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</section>
<!--breadcrumb section end-->
  @endif