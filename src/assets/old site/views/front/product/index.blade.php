@extends('layouts.front')
@section('title','Productcategory')
@section('styles')
  <style>
      .list_cat ul {
          list-style: none;
          padding-left: 15px;
      }

      .list_cat ul li.active a {
          color: #C3EB40 !important;
      }
  </style>
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
          <a href="{{route('front.index')}}"
             class="d-block primary-color fw-bold text-decoration-none">{{read_lang_word('منو','1')}}</a>
          <span>/</span>
          <a href="{{route('front.product.list')}}" class="text-white-50">
            {{read_lang_word('منو','9')}}
          </a>
        </div>
      </div>
    </section>

    <!-- articles -->

    <section id="articles" class="mt-5 py-5 left">
      <div class="container">
        <div class="text-center">
                    <span class="h3">
                        @if(!blank($category))
                        {{read_lang($category,'name')}}
                      @else
                        {{read_lang_word('هدر-صفحات-داخلی','product')}}
                      @endif
                    </span>
        </div>
        <div class="row g-4 mt-5">
          @foreach($categories as $key=>$catt)
            <div class="col-xxl-3 col-md-4 col-sm-6">
              <div class="card_category">
                <div class="{{count($catt->child)<2?'pos':''}}">
                  <a href="{{route('front.product.list',$catt->id)}}" class="title_h1">
                    {{read_lang($catt,'name')}}
                  </a>
                  @if(count($catt->child))
                    <hr/>
                    @foreach($catt->child as $catt)
                      <a href="{{route('front.product.list',$catt->id)}}" class="title_h5">
                        {{read_lang($catt,'name')}}
                      </a>
                    @endforeach
                  @endif
                </div>
              </div>
            </div>
          @endforeach
          <div class="col-md-12">
            @if(!blank($category) && !blank(strip_tags(read_lang($category , 'text'))))
              <div>
                {!! read_lang($category , 'text') !!}
              </div>
              @if(count($items))
                <hr/>
                <h5 class="product_name_h5 text-center"><span class="h3 px-3">Products</span> </h5>
                @foreach($items as $item)
                  <h1 class="product_name_h1 text-start mb-0">
                    <a href="{{route('front.product.show',[$item->name,$item->id])}}">
                      {{read_lang($item,'name')}}</a>
                  </h1>
                @endforeach
              @endif
            @endif
          </div>
          {{--          <div class="col-md-4">--}}
          {{--            <div class="box p-3 list_cat text-start">--}}
          {{--              <ul>--}}
          {{--                <li class="{{$cat_id==null?'active':''}}">--}}
          {{--                  <a href="{{route('front.product.list')}}" class="fs-16">All</a>--}}
          {{--                </li>--}}
          {{--                <hr class="hr_cat"/>--}}
          {{--               @if($category)--}}
          {{--                <li class="{{$cat_id==$category->id?'active':''}}">--}}
          {{--                  <a href="{{route('front.product.list',$category->id)}}" class="fs-16">{{read_lang($category,'name')}}</a>--}}
          {{--                </li>--}}
          {{--                  <hr class="hr_cat"/>--}}
          {{--               @endif--}}
          {{--                @foreach($categories as $key=>$cat)--}}
          {{--                  @if($key > 0)--}}
          {{--                  <hr class="hr_cat"/>--}}
          {{--                  @endif--}}
          {{--                  <li class="{{$cat->id==$cat_id?'active':''}}">--}}
          {{--                    <a href="{{route('front.product.list',$cat->id)}}" class="fs-16">{{read_lang($cat,'name')}}</a>--}}
          {{--                    @if(count($cat->child))--}}
          {{--                      <ul>--}}
          {{--                        @foreach($cat->child as $cat)--}}
          {{--                          <li class="{{$cat->id==$cat_id?'active':''}}">--}}
          {{--                            <a href="{{route('front.product.list',$cat->id)}}" class="fs-14">{{read_lang($cat,'name')}}</a>--}}
          {{--                            @if(count($cat->child))--}}
          {{--                              <ul>--}}
          {{--                                @foreach($cat->child as $cat)--}}
          {{--                                  <li class="{{$cat->id==$cat_id?'active':''}}">--}}
          {{--                                    <a href="{{route('front.product.list',$cat->id)}}" class="fs-12 text-dark">{{read_lang($cat,'name')}}</a>--}}
          {{--                                  </li>--}}
          {{--                                @endforeach--}}
          {{--                              </ul>--}}
          {{--                            @endif--}}
          {{--                          </li>--}}
          {{--                        @endforeach--}}
          {{--                      </ul>--}}
          {{--                    @endif--}}
          {{--                  </li>--}}
          {{--                @endforeach--}}
          {{--              </ul>--}}

          {{--            </div>--}}
          {{--          </div>--}}
          {{--          <div class="col-md-8">--}}
          {{--            <div class="container-fluid">--}}
          {{--              <div class="row">--}}
          {{--               @if(count($items))--}}
          {{--                @foreach($items as $item)--}}
          {{--                  <div class="col-lg-6 mb-2">--}}
          {{--                    @include('front.product.includes.card')--}}
          {{--                  </div>--}}
          {{--                @endforeach--}}


          {{--                <div class="col-12 text-center paginate">--}}
          {{--                  {{$items->appends(Request::except('page'))->links('pagination::bootstrap-4')}}--}}
          {{--                </div>--}}
          {{--               @else--}}
          {{--               <div class="col-12 alert alert-danger text-center">--}}
          {{--                Items Not Found--}}
          {{--               </div>--}}
          {{--               @endif--}}

          {{--              </div>--}}
          {{--            </div>--}}
          {{--          </div>--}}
        </div>

      </div>
    </section>

  </main>

@endsection

@section('scripts')
@endsection