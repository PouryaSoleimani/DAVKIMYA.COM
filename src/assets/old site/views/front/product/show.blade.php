@extends('layouts.front')
@section('title','products')
@section('styles')
  <style>
      a.download_btn {
          background: #ffffff;
          border: solid 1px #e6e6e6;
          border-radius: 2px;
          display: inline-block;
          height: 100px;
          line-height: 100px;
          margin: 5px;
          position: relative;
          text-align: center;
          vertical-align: middle;
          width: 100px;
      }

      a.download_btn span {
          background: #f2594b;
          border-radius: 4px;
          color: #ffffff;
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          line-height: normal;
          padding: 5px 10px;
          position: relative;
          text-transform: uppercase;
          z-index: 1;
      }

      a.download_btn span:last-child {
          margin-left: -20px;
      }

      a.download_btn:before,
      a.download_btn:after {
          background: #ffffff;
          border: solid 3px #9fb4cc;
          border-radius: 4px;
          content: '';
          display: block;
          height: 35px;
          left: 50%;
          margin: -17px 0 0 -12px;
          position: absolute;
          top: 50%;
          /*transform:translate(-50%,-50%);*/

          width: 25px;
      }

      a.download_btn:hover:before,
      a.download_btn:hover:after {
          background: #e2e8f0;
      }

      /*a:before{transform:translate(-30%,-60%);}*/

      a.download_btn:before {
          margin: -23px 0 0 -5px;
      }

      a.download_btn:hover {
          background: #e2e8f0;
          border-color: #9fb4cc;
      }

      a.download_btn:active {
          background: #dae0e8;
          box-shadow: inset 0 2px 2px rgba(0, 0, 0, .25);
      }

      a.download_btn span:first-child {
          display: none;
      }

      a.download_btn:hover span:first-child {
          display: inline-block;
      }

      a.download_btn:hover span:last-child {
          display: none;
      }

      .p-sticky {
          position: sticky;
          top: 0;
      }
  </style>
@endsection

@section('body')

  <!-- main -->
  @if($item->pdf && is_file($item->pdf->path))
    <!-- Modal -->
    <div class="modal fade" id="examplePdfModal" tabindex="-1" aria-labelledby="examplePdfModalLabel"
         aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="examplePdfModalLabel">Download PDF</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form action="{{route('front.product.download',$item->id)}}" method="post" class="modal-body">
            @csrf
            <div class="container-fluid">
              <div class="row">
                <div class="col-12">
                  <label>* Name</label>
                  <input type="text" class="form-control" name="name" required>
                </div>
                <div class="col-12">
                  <label>* Email</label>
                  <input type="email" class="form-control" name="email" required>
                </div>
                <div class="col-12">
                  <label>Phone</label>
                  <input type="number" class="form-control" name="phone">
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  @endif
  <main>

    <!-- post-title -->

    <section id="post-title"
             class="d-flex top align-items-center justify-content-center py-5 px-2 position-relative">
      <div class="container text-white fw-bold text-center my-5 py-5 position-relative">
        <h1 class="display-1"> {{read_lang($item,'name')}}</h1>
        <div class="d-flex align-items-center justify-content-center gap-1">
          <a href="{{route('front.index')}}"
             class="d-block primary-color fw-bold text-decoration-none">{{read_lang_word('منو','1')}}</a>
          <span>/</span>
          <span class="text-white-50">{{read_lang_word('منو','9')}}</span>
        </div>
      </div>
    </section>

    <!-- single service -->

    <section id="single-service" class="container my-5 left">
      <div class="row g-4">
        <div class="col-lg-8">
          {{--     <div>--}}
          {{--      <img src="{{$item->photo && is_file($item->photo->path)?url($item->photo->path):url('assets/front/img/home1/blog-1.jpg')}}" alt="{{$item->title}}"--}}
          {{--           class="img-fluid">--}}
          {{--     </div>--}}
          <h1 class="fw-bold my-3">
            {{read_lang($item,'name')}}
          </h1>
          @if($item->pdf && is_file($item->pdf->path))
            <div>
              <hr/>
              <a href="javascript:void(0)" class="download_btn" target="_blank" data-bs-toggle="modal"
                 data-bs-target="#examplePdfModal"><span>Download</span><span>PDF</span></a>
              <hr/>
            </div>
          @endif
          <p class="text-secondary">{!! strip_tags(read_lang($item , 'text')) !!}
          </p>

        </div>
        <div class="col-lg-4">
          <div class="p-sticky">
            <h2 class="fw-bold"> {{read_lang_word('هدر-صفحات-داخلی','product2')}}</h2>
            @foreach($items_last as $item)
              <div>
                <a href="{{route('front.product.show',[$item->name,$item->id])}}"
                   class="d-flex align-items-center gap-1 cursor primary-color text-decoration-none fw-bold h5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                       class="flex-shrink-0 bi bi-arrow-right-short text-dark mt-1" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                  </svg>
                  {{read_lang($item , 'name')}}
                </a>
              </div>
            @endforeach
          </div>
          {{--     <div class="mt-5">--}}
          {{--      <h2 class="fw-bold">{{read_lang_word('هدر-صفحات-داخلی','product2')}}</h2>--}}
          {{--      @foreach($items_last as $item)--}}
          {{--       <div class="mt-4">--}}
          {{--        <div class="mb-4">--}}
          {{--         <a  href="{{route('front.product.show',[$item->name,$item->id])}}" class="d-block h4 cursor text-decoration-none transition fw-bold"> {{read_lang($item , 'name') }}</a>--}}
          {{--        </div>--}}

          {{--       </div>--}}
          {{--      @endforeach--}}
          {{--     </div>--}}
        </div>
      </div>
    </section>

  </main>


@endsection

@section('scripts')
@endsection
