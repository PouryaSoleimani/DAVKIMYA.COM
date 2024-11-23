<!-- footer -->
<style>
    .footer_img
    {
        max-height: 80px;
        object-fit: contain;
    }
</style>
<footer class="pt-5 text-white">
    <div class="container mt-5">
        <div class="row g-4">
            <div class="col-lg-7 col-md-6">
                <img alt="{{$titleSeo}}" src="{{$logo}}" class="img-fluid footer_img">
                <p class="mt-4 text-white-50">
                    {!! read_lang($about_footer,'text')!!}
                </p>
            </div>
            <div class="col-lg-5 col-md-6">
                <div class="row g-4">
                    <div class="col-lg-6">
                        <span class="pb-2 h3">Quick Links</span>
                        <ul class="list-unstyled p-0 m-0 mt-4">
                            <li class="mb-2">
                                <a href="{{route('front.index')}}"
                                   class="d-flex align-items-center gap-2 text-decoration-none text-white fw-bold">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                         fill="currentColor"
                                         class="flex-shrink-0 bi bi-arrow-right-short primary-color mt-1"
                                         viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                    </svg>
                                    <span>{{read_lang_word('منو','1')}}</span>
                                </a>
                            </li>
                            <li class="mb-2">
                                <a href="{{route('front.about.us')}}"
                                   class="d-flex align-items-center gap-2 text-decoration-none text-white fw-bold">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                         fill="currentColor"
                                         class="flex-shrink-0 bi bi-arrow-right-short primary-color mt-1"
                                         viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                    </svg>
                                    <span>{{read_lang_word('منو','4')}}</span>
                                </a>
                            </li>
                            <li class="mb-2">
                                <a href="{{ route('front.service.list') }}"
                                   class="d-flex align-items-center gap-2 text-decoration-none text-white fw-bold">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                         fill="currentColor"
                                         class="flex-shrink-0 bi bi-arrow-right-short primary-color mt-1"
                                         viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                    </svg>
                                    <span>{{read_lang_word('منو','3')}}</span>
                                </a>
                            </li>
                            <li class="mb-2">
                                <a href="{{ route('front.faq') }}"
                                   class="d-flex align-items-center gap-2 text-decoration-none text-white fw-bold">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                         fill="currentColor"
                                         class="flex-shrink-0 bi bi-arrow-right-short primary-color mt-1"
                                         viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                    </svg>
                                    <span>{{read_lang_word('منو','8')}}</span>
                                </a>
                            </li>
                            {{--                            <li>--}}
                            {{--                                <a href="{{ route('front.blog.list') }}"--}}
                            {{--                                   class="d-flex align-items-center gap-2 text-decoration-none text-white fw-bold">--}}
                            {{--                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"--}}
                            {{--                                         fill="currentColor"--}}
                            {{--                                         class="flex-shrink-0 bi bi-arrow-right-short primary-color mt-1"--}}
                            {{--                                         viewBox="0 0 16 16">--}}
                            {{--                                        <path fill-rule="evenodd"--}}
                            {{--                                              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>--}}
                            {{--                                    </svg>--}}
                            {{--                                    <span>{{read_lang_word('منو','2')}}</span>--}}
                            {{--                                </a>--}}
                            {{--                            </li>--}}
                        </ul>
                    </div>
                    <div class="col-lg-6">
                        <span class="pb-2 h3">{{read_lang_word('منو','3')}}</span>
                        <ul class="list-unstyled p-0 m-0 mt-4">
                            @foreach($services_footer as $service)
                                <li class="mb-2">
                                    <a class="d-flex align-items-center gap-2 text-decoration-none text-white fw-bold"
                                       href="{{route('front.service.show',[$service->id])}}">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             fill="currentColor"
                                             class="flex-shrink-0 bi bi-arrow-right-short primary-color mt-1"
                                             viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                        </svg>
                                        <span>{{read_lang($service,'title')}}</span>

                                    </a>
                                </li>
                            @endforeach
                        </ul>
                    </div>
                </div>
            </div>
{{--            <div class="col-lg-3 col-md-6">--}}
{{--                <span class="pb-2 h3">{{read_lang_word('منو','2')}}</span>--}}
{{--                @foreach($blogs_footer as $blog)--}}
{{--                    <div class="mt-4">--}}
{{--                        <a class="h6 mb-3 d-block fw-bold text-decoration-none transition"--}}
{{--                           href="{{route('front.blog.show',[$blog->type,$blog->id])}}">--}}
{{--                            {{read_lang($blog , 'title')}}--}}
{{--                        </a>--}}
{{--                        <span class="primary-color fw-bold d-block">{{Carbon\Carbon::parse($blog->created_at)->toFormattedDateString()}}</span>--}}
{{--                    </div>--}}
{{--                @endforeach--}}
{{--            </div>--}}
        </div>
    </div>
    <div class="border-top mt-5">
        <div
                class="d-flex flex-wrap container align-items-center justify-content-center justify-content-lg-between gap-4 py-3">
            {{-- <div class="d-flex fw-bold align-items-center gap-5">
                <a class="text-white-50 text-decoration-none">Privacy Policy</a>
                <a class="text-white-50 text-decoration-none">Terms & Service</a>
            </div> --}}
            <p class="mb-0 fw-bold text-white-50 text-center col-12">
                Copyright 2023 © All Right Reserved for DAV / Website Designed by
                <a href="https://adib.com.tr/" target="_blank" class="text-white">
                    Adib It Group
                </a>
            </p>
        </div>
    </div>
</footer>