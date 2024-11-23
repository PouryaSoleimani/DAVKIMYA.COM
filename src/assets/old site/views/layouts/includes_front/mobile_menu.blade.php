<!--mobile menu start-->
<div class="mobile-menu position-fixed bg-white deep-shadow d-none-print">
  <button class="close-menu position-absolute"><i class="fa-solid fa-xmark"></i></button>

  <a href="{{ route('front.index') }}" class="logo-wrapper bg-secondary d-block mt-4 p-3 rounded-1 text-center"><img src="{{$logo}}" alt="{{$titleSeo}}" class="img-fluid"></a>
  <nav class="mobile-menu-wrapper mt-40">
    <ul>
      <li><a href="{{ route('front.index') }}">{{read_lang_word('منو','1')}}</a></li>
      <li class="has-submenu"><a href="javascript:void(0)">{{read_lang_word('منو','2')}}</a>
        <ul class="submenu-wrapper">
          <li><a href="{{route('front.blog.list')}}">{{read_lang_word('منو','2')}}</a></li>
          <li><a href="{{route('front.blog.list','article')}}">{{read_lang_word('زیر-منو','1')}}</a></li>
          <li><a href="{{route('front.blog.list','news')}}">{{read_lang_word('زیر-منو','2')}}</a></li>
        </ul>
      </li>
      <li><a href="{{ route('front.service.list') }}">{{read_lang_word('منو','3')}}</a></li>
      <li><a href="{{ route('front.about.us') }}">{{read_lang_word('منو','4')}}</a></li>
      <li><a href="{{ route('front.faq') }}">{{read_lang_word('منو','8')}}</a></li>
        <li><a href="{{ route('front.rental_conditions') }}">{{read_lang_word('منو','7')}}</a></li>
      <li><a href="{{ route('front.contact.us') }}">{{read_lang_word('منو','5')}}</a></li>
    </ul>
  </nav>
  <div class="contact-info mt-60">
    <h4 class="mb-20">{{read_lang_word('صفحه-تماس','r_title')}}</h4>
    <p>{{read_lang($contact_info,'address')}}</p>
    @if(!blank($contact_info->phone) && explode(',',$contact_info->phone)>0)
    <p dir="ltr">{{explode(',',$contact_info->phone)[0]}}</p>
    @endif
      @if(!blank($contact_info->email) && explode(',',$contact_info->email)>0)
    <p dir="ltr">{{explode(',',$contact_info->email)[0]}}</p>
    @endif
    <div class="social-contact">
      @if($contact_info->telegram)
       <a href="{{$contact_info->telegram}}"><i class="fab fa-telegram"></i></a>
      @endif
      @if($contact_info->instagram)
        <a href="{{$contact_info->instagram}}"><i class="fab fa-instagram"></i></a>
      @endif
      @if($contact_info->facebook)
        <a href="{{$contact_info->facebook}}"><i class="fab fa-facebook-f"></i></a>
      @endif
      @if($contact_info->twitter)
        <a href="{{$contact_info->twitter}}"><i class="fab fa-twitter"></i></a>
      @endif
      @if($contact_info->whatsapp_group)
        <a href="{{$contact_info->whatsapp_group}}"><i class="fab fa-whatsapp"></i></a>
      @endif
    </div>
  </div>
</div>
<!--mobile menu end-->