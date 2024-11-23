<!--app header-->
<div class="app-header header">
	<div class="container-fluid">
		<div class="d-flex">
			<a class="header-brand" href="{{route('front.index')}}" target="_blank"">
			<img src="{{$setting->logo && $setting->logo->path?url($setting->logo->path):''}}" class="header-brand-img desktop-lgo h-100" alt="rent_car">
			<img src="{{$setting->logo && $setting->logo->path?url($setting->logo->path):''}}" class="header-brand-img dark-logo h-100" alt="rent_car">
			<img src="{{$setting->icon && $setting->icon->path?url($setting->icon->path):''}}" class="header-brand-img mobile-logo h-100" alt="rent_car">
			<img src="{{$setting->icon && $setting->icon->path?url($setting->icon->path):''}}" class="header-brand-img darkmobile-logo h-100" alt="rent_car">
			</a>
			<div class="app-sidebar__toggle" data-toggle="sidebar">
				<a class="open-toggle" href="#">
					<i class="feather feather-menu"></i>
				</a>
				<a class="close-toggle" href="#">
					<i class="feather feather-x"></i>
				</a>
			</div>
			<div class="d-flex order-lg-2 my-auto mr-auto">

				<div class="dropdown header-fullscreen">
					<a class="nav-link icon full-screen-link">
						<i class="feather feather-maximize fullscreen-button fullscreen header-icons"></i>
						<i class="feather feather-minimize fullscreen-button exit-fullscreen header-icons"></i>
					</a>
				</div>
				<div class="dropdown profile-dropdown">
					<a href="#" class="nav-link pl-1 pr-0 leading-none" data-toggle="dropdown">
												<span>
													<img src="{{auth()->user()->photo && is_file(auth()->user()->photo->path)?url(auth()->user()->photo->path):URL::asset('assets/images/admin.jpg')}}" alt="img" class="avatar avatar-md bradius  object-fit-cover">
												</span>
					</a>
					<div class="dropdown-menu dropdown-menu-left dropdown-menu-arrow animated">
						<a class="dropdown-item d-flex" href="{{route('admin.profile.show')}}">
							<i class="feather feather-user ml-3 fs-16 my-auto"></i>
							<div class="mt-1">پروفایل</div>
						</a>
						<a class="dropdown-item d-flex" href="javascript:void(0)" onclick="$('.logout').submit()">
							<i class="feather feather-power ml-3 fs-16 my-auto"></i>
							<div class="mt-1">خروج</div>
							<form action="{{ route('logout') }}" method="POST"
								  class="logout hidden">{{ csrf_field() }}</form>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!--/app header-->
