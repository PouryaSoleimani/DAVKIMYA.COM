@extends('layouts.front')
@section('title','Home')
@section('styles')

@endsection

@section('video_modal')
  <!-- play video modal -->
  <div class="modal fade" id="staticBackdrop" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" style="max-width: 70%;">
      <div class="modal-content bg-black">
        <div class="modal-body">
          <video controls class="w-100">
            <source
                    src="{{is_file($about->video)?url($about->video):url('assets/front/img/vecteezy_oil-and-gas-refinery-plant-factory-industry-petroleum-zone-pipe-steel-and-oil-storage-tank_2020788.mp4')}}">
          </video>
        </div>
      </div>
    </div>
  </div>
@endsection

@section('body')

  <!-- main -->

  <main>

    <!-- banner -->
    <section id="banner" class="bottom">
      <div class="swiper banner">
        <div class="swiper-wrapper">
          @foreach ($sliders as $slider)
            @if ($slider->photo)
              <div class="swiper-slide ">
                <img src="{{ url($slider->photo->path) }}" alt="{{$slider->title}}" class="img-fluid w-100">
              </div>
            @endif
          @endforeach
        </div>
        <!--<div class="swiper-button-next">-->
        <!--</div>-->
        <!--<div class="swiper-button-prev">-->
        <!--</div>-->
      </div>
    </section>

    <!-- box -->
    <section class="container-lg overflow-visible right box-kh">
      <div class="row g-4">
        @foreach($categories as $category)
          <div class="col-lg-4 position-relative">
            <img alt="box" src="{{$category->photo && is_file($category->photo->path)?url($category->photo->path):''}}"
                 alt="{{$category->name}}" class="img-fluid h-100 w-100">
            <div class="position-absolute end-0 start-0 bottom-0 mb-5 px-3">
              {{-- <p class="text-white fw-bold text-center">View the catalogue of the products that developed by PURIN.</p> --}}
              <a href="{{route('front.product.list',$category->id)}}"
                 class="btn btn-primary mx-auto d-table">{{$category->name}}</a>
            </div>
          </div>
        @endforeach
      </div>
    </section>


    <!-- about -->

{{--    <section id="about" class="my-5 top">--}}
{{--      <div class="container">--}}
{{--        <div class="row g-4 align-items-center">--}}
{{--          <div class="col-lg-6 position-relative">--}}
{{--            <img alt="about" src="{{is_file($about->pic)?url($about->pic):url('assets/front/img/top-view-of-oil-tank-XK6ZSY71.jpg')}}" class="img-fluid">--}}
{{--          </div>--}}
{{--          <div class="col-lg-6">--}}
{{--            <div class="text-center text-md-start">--}}
{{--                            <span class="h3">--}}
{{--                                {{read_lang($about,'title')}}--}}
{{--                            </span>--}}

{{--              <p class="text-muted">--}}
{{--                {!! read_lang($about,'text') !!}--}}
{{--              </p>--}}
{{--            </div>--}}
{{--          </div>--}}
{{--        </div>--}}
{{--      </div>--}}
{{--    </section>--}}

    <!-- company -->
    @if(count($companies))
      <section id="company" class="my-5 py-5 left">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <div class="d-flex align-items-center gap-4">
                <span class="line"></span>
                <h4> More than {{$count_company}} Companies are read on the BOILE</h4>
              </div>
            </div>
            <div class="col-lg-7">
              <!-- swiper -->
              <div class="swiper company">
                <div class="swiper-wrapper">
                @foreach($companies as $company)
                  <!-- slide -->
                    <div class="swiper-slide">
                      <img src="{{$company->logo && is_file($company->logo->path)?url($company->logo->path):url('assets/front/img/home1/blog-1.jpg')}}"
                           alt="{{$company->title}}" class="img-fluid">
                    </div>
                  @endforeach
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  @endif
  <!-- choose us -->

    <section id="choose-us" class="my-5 top py-5 position-relative">
      <div class="container my-5">
        <div class="row g-4">
          <div class="col-lg-7">
            <div class="row g-4">
              <div class="col-md-6 mt-5 mt-md-0">
                <div class="position-relative box bg-white p-4">
                  <span class="d-flex align-items-center justify-content-center">01</span>
                  <h2 class="mt-4 mb-3"> {{ read_lang($about2,'title1') }}</h2>
                  <p class="text-muted">
                    {!! strip_tags(read_lang($about2,'text2')) !!}
                  </p>
                </div>
              </div>
              <div class="col-md-6 mt-5">
                <div class="position-relative box bg-white p-4">
                  <span class="d-flex align-items-center justify-content-center">02</span>
                  <h2 class="mt-4 mb-3">{{ read_lang($about2,'title2') }} </h2>
                  <p class="text-muted">
                    {!! strip_tags(read_lang($about2,'text2')) !!}
                  </p>
                </div>
              </div>
              <div class="col-md-6 mt-5 mt-md-0">
                <div class="position-relative box bg-white p-4">
                  <span class="d-flex align-items-center justify-content-center">03</span>
                  <h2 class="mt-4 mb-3">{{ read_lang($about2,'title3') }} </h2>
                  <p class="text-muted">
                    {!! strip_tags(read_lang($about2,'text3')) !!}
                  </p>
                </div>
              </div>
              <div class="col-md-6 mt-5">
                <div class="position-relative box bg-white p-4">
                  <span class="d-flex align-items-center justify-content-center">04</span>
                  <h2 class="mt-4 mb-3">{{ read_lang($about2,'title4') }} </h2>
                  <p class="text-muted">
                    {!! strip_tags(read_lang($about2,'text4')) !!}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="text-center text-md-start position-relative">
                            <span class="h3">
                                {!! read_lang($about2,'title') !!}
                            </span>
              <p class="text-muted">

              </p>
                {!! read_lang($about2,'text') !!}
              <img alt="choose-us" src="{{url($about2->pic)}}" class="w-100 img-fluid">

            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->

{{--    <section id="Services" class="my-5 top py-5 container">--}}
{{--      <div class="text-center">--}}
{{--                <span class="h3">--}}
{{--                    {{read_lang_word('هدر-صفحات-داخلی','service')}}--}}
{{--                </span>--}}
{{--        <h1 class="display-6 my-3">--}}
{{--          Exploration & Production Service for<br> Oil & Gas Operations.--}}
{{--        </h1>--}}

{{--      </div>--}}
{{--      <div class="row mx-0 g-5 mt-5">--}}

{{--        <div class="col-md-6">--}}
{{--          <div class="container-fluid">--}}
{{--            <div class="row">--}}
{{--              @foreach($services as $key=>$service)--}}
{{--                <div class="col-lg-12 {{$key > 0?'mt-4':''}}">--}}
{{--                  <div class="position-relative box bg-white p-4">--}}
{{--                    <span class="d-flex align-items-center justify-content-center">{{$key+1}}</span>--}}
{{--                    <h3 class="mt-4 mb-3">  {{read_lang($service,'title')}}</h3>--}}
{{--                    <p class="text-muted">--}}
{{--                      {!! substr(read_lang($service,'text'),0,100) !!}...--}}
{{--                    </p>--}}
{{--                    <div>--}}
{{--                      <a href="{{route('front.service.show',[$service->id])}}"--}}
{{--                         class="d-flex align-items-center justify-content-start fw-bold gap-2 primary-color transition text-decoration-none">--}}
{{--                        {{read_lang_word('لینک','detail')}}--}}
{{--                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"--}}
{{--                             class="bi bi-arrow-right-short" viewBox="0 0 16 16">--}}
{{--                          <path fill-rule="evenodd"--}}
{{--                                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>--}}
{{--                        </svg>--}}
{{--                      </a>--}}
{{--                    </div>--}}
{{--                    <img alt="box-service" src="{{url('assets/front/img/logo.jpg')}}" class="position-absolute transition">--}}
{{--                  </div>--}}
{{--                </div>--}}
{{--              @endforeach--}}
{{--            </div>--}}
{{--          </div>--}}
{{--        </div>--}}
{{--        <div class="col-md-6 index_form">--}}
{{--          <form class="p-4 position-relative" action="{{route('front.contact.us.post')}}" method="post">--}}
{{--            @csrf--}}
{{--            <div class="position-relative">--}}
{{--              <h4 class="fw-bold">--}}
{{--                Call us for all your questions today.--}}
{{--              </h4>--}}
{{--              <div class="row">--}}
{{--                <div class="col-md-6">--}}
{{--                  <input class="form-control my-3" name="name" placeholder="{{read_lang_word('صفحه-تماس','name')}}" >--}}
{{--                </div>--}}
{{--                <div class="col-md-6">--}}
{{--                  <input type="email" name="email" class="form-control my-3" placeholder="{{read_lang_word('صفحه-تماس','email')}}" >--}}
{{--                </div>--}}
{{--              </div>--}}
{{--              <div class="row">--}}
{{--                <div class="col-12">--}}
{{--                  <input type="tel" name="phone" class="form-control my-3" placeholder="{{read_lang_word('صفحه-تماس','phone')}}">--}}
{{--                </div>--}}
{{--              </div>--}}
{{--              <div class="row">--}}
{{--                <div class="col-12">--}}
{{--                  <input  class="form-control my-3" name="subject" placeholder="{{read_lang_word('صفحه-تماس','subject')}}">--}}
{{--                </div>--}}
{{--              </div>--}}
{{--              <div class="row mt-3">--}}
{{--                <div class="col-12">--}}
{{--                  <textarea rows="7" name="message" class="form-control" placeholder="{{read_lang_word('صفحه-تماس','message')}}"></textarea>--}}
{{--                </div>--}}
{{--              </div>--}}
{{--              <button type="submit"--}}
{{--                      class="d-flex bg-black align-items-center mt-3 justify-content-center w-100 fw-bold gap-1 border-0 py-2 text-white transition text-decoration-none">--}}
{{--                <span class="h6 mb-0">{{read_lang_word('صفحه-تماس','btn')}}</span>--}}
{{--                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"--}}
{{--                     class="bi bi-arrow-right-short" viewBox="0 0 16 16">--}}
{{--                  <path fill-rule="evenodd"--}}
{{--                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />--}}
{{--                </svg>--}}
{{--              </button>--}}
{{--            </div>--}}
{{--          </form>--}}

{{--        </div>--}}
{{--      </div>--}}
{{--    </section>--}}

    <!-- projects -->

  {{-- <section id="projects" class="my-5 left pt-5">
      <div class="container position-relative">
          <div class="row g-4">
              <div class="col-lg-4 text-white">
                  <div class="text-center text-md-start position-relative">
                      <span class="h4">
                         {{read_lang_word('هدر-صفحات-داخلی','header')}}
                      </span>
                      <h1 class="display-6 my-3">
                         {{read_lang_word('هدر-صفحات-داخلی','project')}}
                      </h1>
                      <a href="{{route('front.project.list')}}"
                          class="d-flex align-items-center justify-content-center justify-content-md-start fw-bold gap-2 primary-color transition text-decoration-none">
                          {{read_lang_word('لینک','project')}}
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                              class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                              <path fill-rule="evenodd"
                                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                          </svg>
                      </a>
                  </div>
              </div>
              <div class="col-lg-8">
                  <div class="row g-4">
                      @foreach($projects_last as $project)
                      <div class="col-md-4">
                          <div class="box bg-white p-3">
                              <img
                                  src="{{$project->photo && is_file($project->photo->path)?url($project->photo->path):url('assets/front/img/home1/blog-1.jpg')}}" alt="{{$project->title}}"
                                  class="img-fluid">
                              <h6 class="primary-color fw-bold my-3">
                                  {{Carbon\Carbon::parse($project->created_at)->toFormattedDateString()}}
                              </h6>
                              <a href="{{route('front.project.show',[$project->id])}}" class="h3 text-decoration-none transition">
                                  {{read_lang($project,'title')}}
                              </a>
                          </div>
                      </div>
                     @endforeach
                  </div>
              </div>
          </div>

      </div>
  </section> --}}

  <!-- description -->

{{--    <section id="description" class="my-5 py-5 top ">--}}
{{--      <div class="row mt-5 mx-0">--}}
{{--        <div class="col-lg-6 px-0">--}}
{{--          <!-- swiper -->--}}
{{--          <div class="swiper description h-100">--}}
{{--            <div class="swiper-wrapper">--}}
{{--              <!-- slide -->--}}
{{--              <div class="swiper-slide">--}}

{{--              </div>--}}
{{--              <!-- slide -->--}}
{{--              <div class="swiper-slide">--}}

{{--              </div>--}}
{{--            </div>--}}
{{--          </div>--}}
{{--        </div>--}}
{{--        <div class="col-lg-6 px-0">--}}
{{--          <div class="bg-black2 p-5 text-white">--}}
{{--            <img alt="desc" src="{{url('assets/front/img/desc1.PNG')}}">--}}
{{--            <p>--}}
{{--              {!! read_lang($about,'text1') !!}--}}
{{--            </p>--}}
{{--          </div>--}}
{{--          <div class="primary-bg p-5 text-dark">--}}
{{--            <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" fill="currentColor"--}}
{{--                 class="bi bi-globe-americas" viewBox="0 0 16 16">--}}
{{--              <path--}}
{{--                      d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>--}}
{{--            </svg>--}}
{{--            <p>--}}
{{--              {!! read_lang($about,'text2') !!}--}}
{{--            </p>--}}
{{--          </div>--}}
{{--        </div>--}}
{{--      </div>--}}
{{--    </section>--}}

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

    <!-- articles -->

{{--    <section id="articles" class="mt-5 py-5 left bg-gray">--}}
{{--      <div class="container">--}}
{{--        <div class="text-center">--}}
{{--                    <span class="h3">--}}
{{--                        {{read_lang_word('هدر-صفحات-داخلی','blog2')}}--}}
{{--                    </span>--}}
{{--          <h1 class="display-6 my-4">--}}
{{--            {{read_lang_word('هدر-صفحات-داخلی','blog3')}}--}}
{{--          </h1>--}}

{{--        </div>--}}
{{--        <div class="row g-4 mt-5 text-center">--}}
{{--          @foreach($blogs as $blog)--}}

{{--            @include('front.blog.includes.card',['item'=>$blog])--}}

{{--          @endforeach--}}
{{--        </div>--}}
{{--      </div>--}}
{{--    </section>--}}

  </main>

@endsection

@section('scripts')
@endsection


