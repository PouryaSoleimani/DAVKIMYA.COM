<!--aside open-->
<aside class="app-sidebar">
  <div class="app-sidebar__logo">
    <a class="header-brand" href="{{route('front.index')}}" target="_blank">
      <img src="{{$setting->logo && $setting->logo->path?url($setting->logo->path):''}}"
           class="header-brand-img desktop-lgo h-100"
           alt="rent_car">
      <img src="{{$setting->logo && $setting->logo->path?url($setting->logo->path):''}}"
           class="header-brand-img dark-logo h-100"
           alt="rent_car">
      <img src="{{$setting->icon && $setting->icon->path?url($setting->icon->path):''}}"
           class="header-brand-img mobile-logo h-100"
           alt="rent_car">
      <img src="{{$setting->icon && $setting->icon->path?url($setting->icon->path):''}}"
           class="header-brand-img darkmobile-logo h-100"
           alt="rent_car">
    </a>
  </div>
  <div class="app-sidebar3">
    <div class="app-sidebar__user">
      <div class="dropdown user-pro-body text-center">
        <div class="user-pic">
          <img src="{{auth()->user()->photo && is_file(auth()->user()->photo->path)?url(auth()->user()->photo->path): URL::asset('assets/images/admin.jpg')}}"
               alt="user-img"
               class="avatar-xxl rounded-circle mb-1 object-fit-cover">
        </div>
        <div class="user-info">
          <h5 class=" mb-2">{{Auth::user()->name}}</h5>
          <span class="text-muted app-sidebar__user-name text-sm">{{Auth::user()->roles->first()->title}}</span>
        </div>
      </div>
    </div>

    <ul class="side-menu">
      @canany(['permission_cat_list','permission_list','role_list'])
        <li class="slide">
          <a class="side-menu__item" data-toggle="slide" href="#">
            <i class="fa fa-key sidemenu_icon"></i>
            <span class="side-menu__label">مجوزها</span><i class="angle fa fa-angle-left"></i>
          </a>
          <ul class="slide-menu">
            @can('permission_cat_list')
              <li><a href="{{route('admin.permissionCat.index')}}" class="slide-item">جداول</a></li>
            @endcan
            @can('permission_list')
              <li><a href="{{route('admin.permission.index')}}" class="slide-item">مجوز</a></li>
            @endcan
            @can('role_list')
              <li><a href="{{route('admin.role.index')}}" class="slide-item">سطح دسترسی</a></li>
            @endcan
          </ul>
        </li>
      @endcan
      {{--@canany(['user_customer_list','user_work_list','user_api_list','user_agent_list','user_other_list'])
        <li class="slide">
          <a class="side-menu__item" data-toggle="slide" href="#">
            <i class="fa fa-users sidemenu_icon"></i>
            <span class="side-menu__label">کاربران</span><i class="angle fa fa-angle-left"></i>
          </a>
          <ul class="slide-menu">
            @can('user_customer_list')
              <li><a href="{{route('admin.user-customer.index')}}" class="slide-item"> کاربران مشتری</a></li>
            @endcan
            @can('user_work_list')
              <li><a href="{{route('admin.user-work.index')}}" class="slide-item">همکاران</a></li>
            @endcan
            @can('user_agent_list')
              <li><a href="{{route('admin.user-agent.index')}}" class="slide-item">نمایندگان</a></li>
            @endcan
            @can('user_api_list')
              <li><a href="{{route('admin.user-api.index')}}" class="slide-item">API</a></li>
            @endcan
            @can('user_other_list')
              <li><a href="{{route('admin.user-other.index')}}" class="slide-item"> کاربران دیگر</a></li>
            @endcan
          </ul>
        </li>
      @endcan--}}
      @canany(['gallery_list'])
        <li class="slide">
          <a class="side-menu__item" data-toggle="slide" href="#">
            <i class="fa fa-image sidemenu_icon"></i>
            <span class="side-menu__label">گالری</span><i class="angle fa fa-angle-left"></i>
          </a>
          <ul class="slide-menu">
            @can('gallery_list')
              <li><a href="{{route('admin.gallery.index')}}" class="slide-item">تصاویر/ویدئو</a></li>
            @endcan
          </ul>
        </li>
      @endcan
       @canany(['product_list','product_category_list','product_pdf_list'])
        <li class="slide">
         <a class="side-menu__item" data-toggle="slide" href="#">
          <i class="fa fa-info sidemenu_icon"></i>
          <span class="side-menu__label">محصولات </span><i class="angle fa fa-angle-left"></i>
         </a>
         <ul class="slide-menu">
          @can('product_list')
           <li><a href="{{route('admin.product.index')}}" class="slide-item">محصولات</a></li>
          @endcan
           @can('product_category_list')
           <li><a href="{{route('admin.product-category.index')}}" class="slide-item">دسته بندی محصولات</a></li>
            @endcan
           @can('product_pdf_list')
           <li><a href="{{route('admin.product-pdf.index')}}" class="slide-item">درخواست های PDF</a></li>
            @endcan
         </ul>
        </li>
       @endcan

      @canany(['service_list','faq_list','project_list'])
        <li class="slide">
          <a class="side-menu__item" data-toggle="slide" href="#">
            <i class="fa fa-info sidemenu_icon"></i>
            <span class="side-menu__label">دیگر اطلاعات</span><i class="angle fa fa-angle-left"></i>
          </a>
          <ul class="slide-menu">
            @can('service_list')
              <li><a href="{{route('admin.service.index')}}" class="slide-item">خدمات</a></li>
            @endcan
            @can('faq_list')
              <li><a href="{{route('admin.faq.index')}}" class="slide-item">سوالات متداول</a></li>
            @endcan
            {{-- @can('project_list')
              <li><a href="{{route('admin.project.index')}}" class="slide-item">پروژه ها</a></li>
            @endcan --}}
             @can('company_list')
            <li><a href="{{route('admin.company.index')}}" class="slide-item">شرکت ها</a></li>
             @endcan
          </ul>
        </li>
      @endcan
      @canany(['article_list','news_list'])
        <li class="slide">
          <a class="side-menu__item" data-toggle="slide" href="#">
            <i class="feather feather-edit-2  sidemenu_icon"></i>
            <span class="side-menu__label">بلاگ ها</span><i class="angle fa fa-angle-left"></i>
          </a>
          <ul class="slide-menu">
            @can('article_list')
              <li><a href="{{route('admin.article.index')}}" class="slide-item">مقالات</a></li>
            @endcan
            {{-- @can('news_list')
              <li><a href="{{route('admin.news.index')}}" class="slide-item">اخبار</a></li>
            @endcan --}}
          </ul>
        </li>
      @endcan
     
      @canany(['form_contact_list'])
        <li class="slide">
          <a class="side-menu__item" data-toggle="slide" href="#">
            <i class="fa fa-file-text-o sidemenu_icon"></i>
            <span class="side-menu__label">فرم های ارتباطی</span><i class="angle fa fa-angle-left"></i>
          </a>
          <ul class="slide-menu">
            @can('form_contact_list')
              <li><a href="{{route('admin.form.contact.index')}}" class="slide-item">تماس با ما
                </a></li>
            @endcan
          </ul>
        </li>
      @endcan
      @canany(['profile_list','seen_list','slider_list','meta_list','about_list','contact_list','upload_list','setting_list','select_list','crm_lang_list','lang_set_list','site_word_list'])
        <li class="slide">
          <a class="side-menu__item" data-toggle="slide" href="#">
            <i class="fa fa-cogs sidemenu_icon"></i>
            <span class="side-menu__label">مدیریت سایت</span><i class="angle fa fa-angle-left"></i>
          </a>
          <ul class="slide-menu">
            @can('lang_set_list')
              <li><a href="{{route('admin.lang-set.index')}}" class="slide-item">زبان های سایت</a></li>
            @endcan
           {{-- @can('crm_lang_list')
              <li><a href="{{route('admin.crm-lang.index')}}" class="slide-item">مترجم crm</a></li>
            @endcan
            @can('select_list')
              <li><a href="{{route('admin.select.index')}}" class="slide-item">لیست کشویی</a></li>
            @endcan--}}
            @can('profile_list')
              <li><a href="{{route('admin.profile.show')}}" class="slide-item">پروفایل</a></li>
            @endcan
            @can('slider_list')
              <li><a href="{{route('admin.slider.index')}}" class="slide-item">اسلایدر</a></li>
            @endcan
            @can('meta_list')
              <li><a href="{{route('admin.meta.index')}}" class="slide-item">متا(سئو)</a></li>
            @endcan
            @can('about_list')
              <li><a href="{{route('admin.about.index')}}" class="slide-item">درباره ما</a></li>
            @endcan
            @can('contact_list')
              <li><a href="{{route('admin.contact.index')}}" class="slide-item">تماس با ما</a></li>
            @endcan
            @can('upload_list')
              <li><a href="{{route('admin.upload.index')}}" class="slide-item">آپلود فایل</a></li>
            @endcan
            @can('setting_list')
              <li><a href="{{route('admin.setting.index')}}" class="slide-item">تنظیمات سایت</a></li>
            @endcan
            @can('site_word_list')
              <li><a href="{{route('admin.site-word.index')}}" class="slide-item">واژه های سایت</a></li>
            @endcan
           {{-- @can('seen_list')
              <li><a href="{{route('admin.seen.index')}}" class="slide-item">بازدیدها</a></li>
            @endcan--}}

          </ul>
        </li>
      @endcan

    </ul>

  </div>
</aside>
<!--aside closed-->
