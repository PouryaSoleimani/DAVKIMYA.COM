<div class="col-lg-8">
  @foreach($items as $key => $item)
    <div class="mb-3">
      <h5 class="bg-black p-3 fw-bold mb-0 primary-color">{{read_lang($item,'question')}}</h5>
      @if(!blank(read_lang($item,'short_answer')))
        <p class="short_answer short_answer_{{$key}} text-muted bg-gray p-3 mb-0">
          {{read_lang($item,'short_answer')}} ...
          <a href="javascript:void(0)" class="primary-color" onclick="more_faq({{$key}},'open')"
             data-id="{{$key}}">{{read_lang_word('لینک','more')}}</a>
        </p>
      @endif
      <div class="answer answer_{{$key}} {{!blank(read_lang($item,'short_answer'))?'d-none':''}} text-muted bg-gray p-3 mb-0">
        {!! read_lang($item,'answer') !!}

        <a href="javascript:void(0)" class="primary-color" onclick="more_faq({{$key}},'close')"
           data-id="{{$key}}">{{read_lang_word('لینک','close')}}</a>
      </div>
    </div>
  @endforeach

</div>
                 