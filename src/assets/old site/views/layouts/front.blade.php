<!DOCTYPE html>
<html lang="en">

<head>
  <!--required meta tags-->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!--twitter og-->
  <meta name="twitter:title" @if(trim($__env->yieldContent('title_seo'))) content="@yield('title_seo')"
        @else content="{{$titleSeo}}" @endif/>
  <meta name="twitter:keywords" @if(trim($__env->yieldContent('keyword'))) content="@yield('keyword')"
        @else content="{{$keywordsSeo}}" @endif/>
  <meta name="twitter:description" @if(trim($__env->yieldContent('description'))) content="@yield('description')"
        @else content="{{$descriptionSeo}}" @endif/>
  <meta name="twitter:image" content="{{$fav_icon}}"/>

  <!--facebook og-->
  <meta property="og:url" content="{{$urlPage}}"/>
  <meta name="twitter:title" @if(trim($__env->yieldContent('title_seo'))) content="@yield('title_seo')"
        @else content="{{$titleSeo}}" @endif/>
  <meta property="og:keywords" @if(trim($__env->yieldContent('keyword'))) content="@yield('keyword')"
        @else content="{{$keywordsSeo}}" @endif/>
  <meta property="og:description" @if(trim($__env->yieldContent('description'))) content="@yield('description')"
        @else content="{{$descriptionSeo}}" @endif/>
  <meta property="og:image" content="{{$fav_icon}}"/>

  <!--meta-->
  <meta name="keywords" @if(trim($__env->yieldContent('keyword'))) content="@yield('keyword')"
        @else content="{{$keywordsSeo}}" @endif/>
  <meta name="description" @if(trim($__env->yieldContent('description'))) content="@yield('description')"
        @else content="{{$descriptionSeo}}" @endif/>
  <meta name="author" content="adib-it"/>

  <!--favicon icon-->
  <link rel="icon" href="{{$fav_icon}}" type="image/png" sizes="16x16"/>


  <!-- datetimepicker jQuery CDN -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-datetimepicker/2.5.20/jquery.datetimepicker.full.min.js">
  </script>


  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"/>
  <link href="{{url('assets/front/css/swiper-bundle.min.css')}}">
  <!-- Bootstrap core CSS -->
  <link href="{{url('assets/front/css/bootstrap.min.css')}}" rel="stylesheet">
  <link rel='stylesheet' type='text/css' media='screen' href="{{url('assets/front/css/styles.css')}}">


  <link href="{{url('assets/front/css/swiper.min.css')}}">
  <title>@yield('title','page_title')</title>
  @yield ('styles')
  <style>
      .paginate nav {
          display: inline-block;
      }

      .img_product_standard {
          height: 200px;
          object-fit: cover;
      }
  </style>
</head>


<body>

<!-- search modal -->

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content bg-transparent border-0">
      <div class="modal-header border-0">
        <svg xmlns="http://www.w3.org/2000/svg" data-bs-dismiss="modal" aria-label="Close" width="32"
             height="32" fill="currentColor" class="bi bi-x-lg ms-auto cursor text-white"
             viewBox="0 0 16 16">
          <path
                  d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
      </div>
      <div class="modal-body">
        <form class="d-flex ms-4 cursor rounded-pill search-modal-form position-relative" role="search" action="{{route('front.search')}}">
          <input type="search"
                 class="rounded-pill text-white w-100 fw-bold form-control border-white bg-transparent"
                 placeholder="search"
                 name="q">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"  onclick="document.querySelector('form').submit()"
               class="bi bi-search text-white position-absolute" style="right: 14px;top: 8px;"
               viewBox="0 0 16 16">
            <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </form>
      </div>
    </div>
  </div>
</div>


@yield('video_modal')


@include('layouts.includes_front.header')
@yield ('body')
@include('layouts.includes_front.footer')


<!-- Swiper JS -->
<script src="{{url('assets/front/js/jquery-3.7.1.js')}}"></script>
<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
<script src="{{url('assets/front/js/swiper-bundle.min.js')}}"></script>
<script src="{{url('assets/front/js/scrollreveal.min.js')}}"></script>
<script src="{{url('assets/front/js/scripts.js')}}"></script>
<script src="{{url('assets/front/js/bootstrap.bundle.min.js')}}"></script>
<script src="{{url('assets/front/js/swiper.min.js')}}"></script>

<!-- sweetalert2 js-->
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
<script>
  @if(session()->has('err_message'))
  $(document).ready(function () {
      Swal.fire({
          title: "{{read_lang_word('پیام','danger_msg')}}",
          text: "{{ session('err_message') }}",
          icon: "warning",
          timer: 6000,
          timerProgressBar: true,
      })
  });
  @endif
  @if(session()->has('flash_message'))
  $(document).ready(function () {
      Swal.fire({
          title: "{{read_lang_word('پیام','success_msg')}}",
          text: "{{ session('flash_message') }}",
          icon: "success",
          timer: 6000,
          timerProgressBar: true,
      })
    @if(session()->has('flash_message_url'))
    setTimeout(function () {
        open("{{ session('flash_message_url') }}", '_blank')
    }, 2000);
    @endif
  })
  ;@endif

  @if (count($errors) > 0)
  $(document).ready(function () {
      Swal.fire({
          title: "{{read_lang_word('پیام','danger_msg')}}",
          icon: "warning",
          html:
                  @foreach ($errors->all() as $key => $error)
                      '<p class="text-right mt-2 ml-5" dir="rtl"> {{$key+1}} : ' +
              '{{ $error }}' +
              '</p>' +
                  @endforeach
                      '<p class="text-right mt-2 ml-5" dir="rtl">' +
              '</p>',
          timer: @if(count($errors)>3)parseInt('{{count($errors)}}') * 1500 @else 6000 @endif,
          timerProgressBar: true,
      })
  });
  @endif
  // if ($('#exampleModal')[0]) {
  //     $(document).ready(function () {
  //         $("#exampleModal").modal('show');
  //     });
  // }
  // if ($('#orderdatamodal')[0]) {
  //     document.getElementById("orderdatabtn").addEventListener("click", function () {
  //         $("#orderdatamodal").modal('show');
  //     });
  // }

</script>

@yield ('scripts')

{{-- @if($contact_info->whatsapp_car) --}}
<!--<div class="wat_sapp wat_sapp1 d-none-print">-->
<!--  <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone={{$contact_info->whatsapp_car}}">-->
<!--    <img class="social_img" src="{{url('assets/front/img/whatss.png')}}" alt="...">-->
<!--  </a>-->
<!--</div>-->
{{-- @endif --}}

</body>


</html>