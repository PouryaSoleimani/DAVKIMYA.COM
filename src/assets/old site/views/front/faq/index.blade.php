@extends('layouts.front')
@section('title','FAQs')
@section('styles')
@endsection

@section('body')

  <!-- main -->

  <main>

    <!-- faqs-title -->

    <section id="faqs-title"
             class="d-flex top align-items-center justify-content-center py-5 px-2 position-relative">
      <div class="container text-white fw-bold text-center my-5 py-5 position-relative">
        <h1 class="display-1">{{read_lang_word('منو','8')}}</h1>
        <div class="d-flex align-items-center justify-content-center gap-1">
          <a href="{{route('front.index')}}"
             class="d-block primary-color fw-bold text-decoration-none">{{read_lang_word('منو','1')}}</a>
          <span>/</span>
          <span class="text-white-50">{{read_lang_word('منو','8')}}</span>
        </div>
      </div>
    </section>

    <!-- faqs -->

    <section id="faqs" class="my-5 py-5 left container">
      <div class="row g-4">
        <div class="col-lg-2">
          <div class="container px-0 position-relative text-center text-lg-start">
            <span class="h3">{{read_lang_word('منو','8')}}</span>
            <h1 class="my-3">  {{read_lang_word('هدر-صفحات-داخلی','faq')}}</h1>
          </div>
        </div>
        <div class="col-lg-10">
          <div class="row">
            @foreach($items as $key=>$item)
              <div class="col-lg-6 position-relative">
                <div class="mb-3">
                  <h5 class="bg-black p-3 fw-bold mb-0 primary-color">{{read_lang($item,'question')}}</h5>
                  @if(!blank(read_lang($item,'short_answer')))
                    <p class="short_answer short_answer_{{$key}} text-muted bg-gray p-3 mb-0">
                      {{read_lang($item,'short_answer')}} ...
                      <a href="javascript:void(0)" class="primary-color" onclick="more_faq({{$key}},'open')"
                         data-id="{{$key}}">{{read_lang_word('لینک','more')}}</a>
                    </p>
                  @endif
                  <div class="answer answer_{{$key}} {{!blank(read_lang($item,'short_answer'))?'d-none':''}} text-muted bg-gray p-3 mb-0">
                    {!! read_lang($item,'answer') !!}

                    <a href="javascript:void(0)" class="primary-color" onclick="more_faq({{$key}},'close')"
                       data-id="{{$key}}">{{read_lang_word('لینک','close')}}</a>
                  </div>
                </div>
              </div>
          @endforeach
          <!--</div>-->
            <!--</div>-->
            <!--</section>-->
          </div>
        </div>
      </div>
    </section>

    <!-- faqs2 -->

    <!--<section id="faqs2" class="position-relative top py-5">-->
    <!--    <div class="container position-relative my-5">-->
    <!--        <div class="row faqs position-relative g-4 mt-5">-->
  <!--             @foreach($items as $item)-->
    <!--            <div class="col-lg-6 position-relative">-->

    <!--                <div class="mb-3">-->
  <!--                    <h5 class="bg-black p-3 fw-bold mb-0 primary-color">{{read_lang($item,'question')}}</h5>-->
    <!--                    <p class="text-muted bg-gray p-3 mb-0">-->
  <!--                        {!! read_lang($item,'answer') !!}-->
    <!--                    </p>-->
    <!--                </div>-->

    <!--            </div>-->
    <!--            @endforeach-->
    <!--        </div>-->
    <!--    </div>-->
    <!--</section>-->

    <!-- articles -->

{{--    <section id="articles" class="mt-5 py-5 left">--}}
{{--      <div class="container">--}}
{{--        <div class="text-center">--}}
{{--                    <span class="h3">--}}
{{--                        {{read_lang_word('هدر-صفحات-داخلی','blog2')}}--}}
{{--                       --}}
{{--                    </span>--}}
{{--          <h1 class="display-6 my-4">--}}
{{--            {{read_lang_word('هدر-صفحات-داخلی','blog3')}}--}}
{{--          </h1>--}}
{{--          <!--<p class="text-muted">-->--}}
{{--          <!--    Fusce tellus leo elementum in tortor id volutpat pellentesque ipsum luctus Curabitur laoree.-->--}}
{{--          <!--</p>-->--}}
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

