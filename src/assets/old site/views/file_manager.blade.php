<html>
<head>
    <title>File Browser</title>
    <style>
        body{
            font-family: 'Segoe UI', Verdana, Helvetica, Sans-serif;
            font-size: 80%;
        }
        #form{
            width: 600px;
        }
        #folderExplorer
        {
            float: left;
            width: 100px;
        }
        #fileExplorer
        {
            float: left;
            width: 680px;
            border-left: 1px solid #dff0ff;
        }
        .thumbnail,
        .thumbnail1
        {
            float: left;
            margin: 3px;
            padding: 3px;
            border: 1px solid #dff0ff;
            width: 200px;
            height: 200px;
        }
        .thumbnail img,
        .thumbnail video
        {
            height: 100%;
            width: 100%;
            object-fit: contain;
        }
        .thumbnail1 img,
        .thumbnail1 video
        {
            width: 100%;
            height: 50%;
            object-fit: contain;
        }
        ul{
            list-style-type: none;
            margin: 0;
            padding: 0;
        }
        li{
            padding: 0;
        }
    </style>
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script src="{{ url('assets/editor/laravel-ckeditor/ckeditor.js') }}"></script>
    <script type="text/javascript">
        $(document).ready(function (){
            var funcNum= <?php echo $_GET['CKEditorFuncNum'] . ';'; ?>
            $('#fileExplorer').on('click','img', function (){
                var fileUrl='{{url('/')}}'+'/'+$(this).attr('title');
                window.opener.CKEDITOR.tools.callFunction(funcNum, fileUrl);
                window.close();
            }).hover(function (){
                $(this).css('cursor','pointer');
            });
        });
    </script>
</head>
<body>
<div id="fileExplorer">
    @foreach($fileNames as $fileName)
        <?php
        $file_expload=explode('.',$fileName);
        $file_expload=end($file_expload);
        ?>
        <div class="{{in_array($file_expload,['mp4','mkv','avi','mp3','mpg','mpeg'])?'thumbnail1':'thumbnail'}}">

            @if(in_array($file_expload,['mp4','mkv','avi','mp3','mpg','mpeg']))
                    <video controls="controls" controlslist="nodownload" src="{{url('assets/editor/upload/'.$fileName)}}" title="assets/editor/upload/{{$fileName}}">&nbsp;</video>
                    <img src="{{url('assets/editor/mp4.jpg')}}" alt="thumb" title="assets/editor/upload/{{$fileName}}">
                    <br/>
                روی تصویر کلیک کنید
                @else
            <img src="{{url('assets/editor/upload/'.$fileName)}}" alt="thumb" title="assets/editor/upload/{{$fileName}}">
                    <br/>
                تصویر
                @endif
            <br/>
{{--           <p> {{$fileName}}</p>--}}
        </div>
    @endforeach
</div>
</body>
</html>