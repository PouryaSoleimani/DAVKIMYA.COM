
        @if($item)               
                    <div class="col-lg-4">
                        <div class="box p-3 bg-white">
                            <a class="d-block overflow-hidden">
                                <img src="{{$item->photo && is_file($item->photo->path)?url($item->photo->path):url('assets/front/img/home1/blog-1.jpg')}}" alt="{{$item->title}}"
                                    class="w-100 transition">
                            </a>
                            <div class="d-flex align-items-center justify-content-center gap-4 my-3">
                                <a class="d-flex align-items-center gap-1 text-decoration-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        class="bi bi-person-fill text-muted" viewBox="0 0 16 16">
                                        <path
                                            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                    </svg>
                                    <span class="primary-color fw-bold">{{read_lang($item,'author')}}</span>
                                </a>
                                <a class="d-flex align-items-center gap-1 text-decoration-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-calendar-fill text-muted" viewBox="0 0 16 16">
                                        <path
                                            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
                                    </svg>
                                    <span class="primary-color fw-bold">{{Carbon\Carbon::parse($item->created_at)->toFormattedDateString()}}</span>
                                </a>
                            </div>
                            <a href="{{route('front.blog.show',[$item->type,$item->id])}}" class="h4 text-decoration-none transition">
                                {{read_lang($item , 'title')}}
                            </a>
                            <p class="text-muted mt-3">
                                {!! substr(strip_tags(read_lang($item , 'text')),0,100) !!}...
                            </p>
                        </div>
                    </div>
                    
        @endif