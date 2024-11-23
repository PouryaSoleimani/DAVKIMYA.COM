@extends('layouts.front')
@section('title','Contact')
@section('styles')
@endsection

@section('body')

    <!-- main -->

    <main>

        <!-- contact-title -->

        <section id="contact-title"
            class="d-flex align-items-center top justify-content-center py-5 px-2 position-relative">
            <div class="container text-white fw-bold text-center my-5 py-5 position-relative">
                <h1 class="display-1"> {{read_lang_word('منو','5')}}</h1>
                <div class="d-flex align-items-center justify-content-center gap-1">
                    <a href="{{route('front.index')}}" class="d-block primary-color fw-bold text-decoration-none">{{read_lang_word('منو','1')}}</a>
                    <span>/</span>
                    <span class="text-white-50"> {{read_lang_word('منو','5')}}</span>
                </div>
            </div>
        </section>

        <!-- contact -->

        <section id="contact" class="container my-5 left">
            <div class="row g-4">
                <div class="col-lg-3 col-md-6">
                    <div class="container px-0 position-relative text-center text-lg-start">
                        <span class="h3"> {{read_lang_word('منو','5')}}</span>
                        <h1 class="my-3">
                           {{read_lang($item,'title')}}
                        </h1>
                        @if(!blank($item->address))
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor"
                            class="bi bi-geo-alt primary-color" viewBox="0 0 16 16">
                            <path
                                d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        <p class="fw-bold border-bottom pb-3">{{read_lang($item,'address')}}
                        </p>
                        @endif
                        @if(!blank($item->phone) && count(explode(',',$item->phone)))
                        @foreach(explode(',',$item->phone) as $key=>$phone)
                         <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor"
                            class="bi bi-telephone-forward primary-color" viewBox="0 0 16 16">
                            <path
                                d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <p class="fw-bold mt-3">
                            {{$phone}}
                        </p>
                        @endforeach
                        @endif
                        @if(!blank($item->email) && count(explode(',',$item->email)))
                        @foreach(explode(',',$item->email) as $key=>$email)
                            <svg viewBox="0 0 8 6" xmlns="http://www.w3.org/2000/svg" width="20px" fill="#C3EB40">
                                <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z"/>
                            </svg>
                        <p class="fw-bold mt-3">
                            {{$email}}
                        </p>
                        @endforeach
                        @endif
                    </div>
                </div>
                <div class="col-lg-5 col-md-6 ">
                    <form class="p-4 position-relative" action="{{route('front.contact.us.post')}}" method="post">
                        @csrf
                        <div class="position-relative">
                            <h4 class="fw-bold">
                                Call us for all your questions today.
                            </h4>
                            <div class="row">
                                <div class="col-md-6">
                                    <input class="form-control my-3" name="name" placeholder="{{read_lang_word('صفحه-تماس','name')}}" >
                                </div>
                                <div class="col-md-6">
                                    <input type="email" name="email" class="form-control my-3" placeholder="{{read_lang_word('صفحه-تماس','email')}}" >
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <input type="tel" name="phone" class="form-control my-3" placeholder="{{read_lang_word('صفحه-تماس','phone')}}">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <input  class="form-control my-3" name="subject" placeholder="{{read_lang_word('صفحه-تماس','subject')}}">
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-12">
                                    <textarea rows="7" name="message" class="form-control" placeholder="{{read_lang_word('صفحه-تماس','message')}}"></textarea>
                                </div>
                            </div>
                            <button type="submit"
                                class="d-flex bg-black align-items-center mt-3 justify-content-center w-100 fw-bold gap-1 border-0 py-2 text-white transition text-decoration-none">
                                <span class="h6 mb-0">{{read_lang_word('صفحه-تماس','btn')}}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                                    class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
                <div class="col-lg-4 col-12">
                    <iframe class="w-100"
                        src="{{$item->address_iframe}}"
                        height="400" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                   @include('front.includes.follow',['contact'=>$item])
                </div>
            </div>
        </section>

    </main>

@endsection

@section('scripts')
@endsection

