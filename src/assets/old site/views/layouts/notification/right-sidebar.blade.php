			<!--Sidebar-right-->
			<div class="sidebar sidebar-left sidebar-animate">
				<div class="card-header border-bottom pb-5 w-100">
					<h4 class="card-title">نوتیفیکیشن </h4>
					<div class="card-options">
						@if(Auth::user()->roles->first()->name=='developer')
							<a href="javascript:void(0);" class="btn btn-sm btn-icon btn-light ml-2 text-danger all_read_not" title="all_read"><i class="feather feather-circle"></i> </a>
						@endif
						<a href="#" class="btn btn-sm btn-icon btn-light  text-primary"  data-toggle="sidebar-left" data-target=".sidebar-left"><i class="feather feather-x"></i> </a>
					</div>
				</div>
				<div class="">
					@auth()
					@foreach(auth()->user()->unreadNotifications as $key=>$notification)
						@if($key>0)
							<hr class="my-1"/>
						@endif
						@if($notification->type::name_fa()['tbl']=='ticket')
						<div class="list-group-item  align-items-center border-0">
							<div class="d-flex" @if($notification->data['user_create_name'])  title="{{$notification->data['user_create_name']}}" @endif>
								<span class="avatar avatar-lg brround ml-3" style="width: 50px!important;height: 50px!important;position: absolute;background-size: cover;background-image: url({{$notification->data['user_create_pic']? url($notification->data['user_create_pic']) : URL::asset('assets/images/admin.jpg')}})"></span>
								<div class="mt-1 mr-60px">
									<a class="font-weight-semibold fs-13">{{$notification->type::name_fa()['name']}}:: <span class="text-muted font-weight-normal">{{ $notification->data['name'] }}</span></a>
									<span class="clearfix"></span>
									<span class="text-muted fs-13 mr-auto"><i class="mdi mdi-clock text-muted ml-1"></i>{{ my_jdate($notification->created_at,'Y/m/d H:i:s') }}</span>
								</div>
								<div class="mr-auto">
									<a href="" class="mr-0 option-dots" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
										<span class="feather feather-more-horizontal"></span>
									</a>
									<ul class="dropdown-menu dropdown-menu-left" role="menu">
										<li><a class="fs-13" href="{{$notification->data['url']=='no'?'':$notification->data['url'].'?id_not='.$notification->id}}"><i class="feather feather-eye ml-2"></i>مشاهده</a></li>
									</ul>
								</div>
							</div>
						</div>
						@endif
					@endforeach
						@endauth
				</div>
			</div>
			<!--/Sidebar-right-->
