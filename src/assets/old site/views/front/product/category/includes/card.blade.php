   @if($item) 
                    <div class="col-lg-4">
                        <div class="box p-3 bg-white">
                            <a href="{{route('front.product.show',[$item->name,$item->id])}}" class="d-block overflow-hidden mb-2">
                                <img  src="{{$item->photo && is_file($item->photo->path)?url($item->photo->path):url('assets/front/img/home1/blog-1.jpg')}}" alt="{{$item->title}}"
                                    class="w-100 img_product_standard transition">
                            </a>
                            {{-- <div class="d-flex align-items-center gap-4 my-3">
                                <a class="d-flex align-items-center gap-1 text-decoration-none">
                                    <span class="primary-color fw-bold">{{Carbon\Carbon::parse($item->created_at)->toFormattedDateString()}}</span>
                                </a>
                            </div> --}}
                            <a href="{{route('front.product.show',[$item->name,$item->id])}}" class="h4 text-decoration-none transition">
                                {{read_lang($item,'name')}}
                            </a>
                            <p class="text-muted mt-3">
                               {{ substr(strip_tags(read_lang($item , 'text')),0,100) }}…
                            </p>
                        </div>
                    </div>
    @endif