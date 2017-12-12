<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>{!! strip_tags(Theme::get('title'),'<img>') !!}</title>
    <meta name="keywords" style="display:none;" content="{!!  Theme::get('keywords') !!}">
    <meta name="description" content="{!! Theme::get('description') !!}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    @if(Theme::get('engine_status')==1)
        <meta name="robots" content="noindex,follow">
    @endif
    @if(isset(Theme::get('basis_config')['css_adaptive']) && Theme::get('basis_config')['css_adaptive'] == 1)
        <meta name="viewport" content="width=device-width, initial-scale=1,user-scalable=0">
    @else
        <meta name="viewport" content="initial-scale=0.1">
    @endif
    <meta property="qc:admins" content="232452016063535256654" />
    <meta property="wb:webmaster" content="19a842dd7cc33de3" />
    <link rel="shortcut icon" href="{{ Theme::asset()->url('images/favicon.ico') }}" />
    <!-- Place favicon.ico in the root directory -->
    <link rel="stylesheet" href="/themes/black/assets/plugins/bootstrap/css/bootstrap.min.css">
    {!! Theme::asset()->container('specific-css')->styles() !!}
    <link rel="stylesheet" href="/themes/black/assets/plugins/ace/css/ace.min.css">
    <link rel="stylesheet" href="/themes/black/assets/css/font-awesome.min.css">
    <link rel="stylesheet" href="/themes/black/assets/css/main.css">

    <link rel="stylesheet" href="/themes/black/assets/css/header.css">
    <link rel="stylesheet" href="/themes/black/assets/css/footer.css">
    <link rel="stylesheet" href="/themes/black/assets/css/index/index.css">

    {!! Theme::asset()->container('old-css')->styles() !!}

    <link rel="stylesheet" href="/themes/black/assets/css/{!! Theme::get('color') !!}/style.css">
    <link rel="stylesheet" href="/themes/black/assets/css/{!! Theme::get('color') !!}/style2.css">
    {!! Theme::asset()->container('custom-css')->styles() !!}
    <script src="/themes/default/assets/plugins/ace/js/ace-extra.min.js"></script>
</head>
<body>

<header>
    {!! Theme::partial('header') !!}
</header>

<section>
    <div class="container">
        <div class="row">
            {!! Theme::content() !!}
        </div>
    </div>
</section>
<footer>
    {!! Theme::partial('footer') !!}
</footer>

<script src="/themes/black/assets/plugins/jquery/jquery.min.js"></script>
<script src="/themes/black/assets/plugins/bootstrap/js/bootstrap.min.js"></script>
<script src="/themes/black/assets/plugins/jquery/modernizr.custom.97074.js"></script>
<script src="/themes/black/assets/plugins/jquery/jquery.hoverdir.js"></script>
<script src="/themes/black/assets/plugins/jquery/jquery.grid-a-licious.min.js"></script>
<script src="/themes/black/assets/plugins/jquery/jquery.barrager.min.js"></script>



{!! Theme::asset()->container('specific-js')->scripts() !!}

{!! Theme::asset()->container('custom-js')->scripts() !!}
{!! Theme::asset()->container('cistom-css')->scripts() !!}
</body>