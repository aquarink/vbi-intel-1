<!DOCTYPE html>
<html ng-app="pebApp">
<head>
    <title ng-bind="title + ' - Vespa Balap Indonesia | Indonesia Vespa Racing'">Vespa Balap Indonesia | Indonesia Vespa
        Racing</title>
    <script type="text/javascript" src="Public/Angular/angular.js"></script>
    <script type="text/javascript" src="Public/Angular/angular-route.js"></script>
    <script type="text/javascript" src="Public/Angular/angular-resource.js"></script>
    <script type="text/javascript" src="Public/Angular/angular-app.js"></script>
    <link type="text/css" rel="stylesheet" href="Public/Bootstrap/css/bootstrap.min1.css" media="screen,projection"/>
          media="screen,projection"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body>

<nav class="navbar navbar-inverse navbar-fixed-top" ng-controller="NavClass">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                    aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href=""><img src="Public/Image/VespaBalapIndonesiaOfficialLogo.png" width="100px"></a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li ng-class="{ active: isActive('/')}"><a href="#"><i class="glyphicon glyphicon-home"></i></a></li>
                <li ng-class="{ active: isActive('/chat')}"><a href="#/chat"><i class="glyphicon glyphicon-comment"></i> Chat</a></li>
                <li ng-class="{ active: isActive('/race')}"><a href="#/race"><i class="glyphicon glyphicon-road"></i> Race</a></li>
                <li ng-class="{ active: isActive('/galeri')}"><a href="#/galeri"><i class="glyphicon glyphicon-th"></i> Galeri</a></li>
                <li ng-class="{ active: isActive('/region')}"><a href="#/region"><i class="glyphicon glyphicon-globe"></i> Region</a></li>
                <li ng-class="{ active: isActive('/teamrider')}"><a href="#/teamrider"><i class="glyphicon glyphicon-flag"></i> Team & Rider</a></li>
                <li ng-class="{ active: isActive('/regulasi')}" ng-class="{ active: isActive('/ubah-data')}"
                    class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                       aria-expanded="false"><i class="glyphicon glyphicon-book"></i> Regulasi<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#"><i class="glyphicon glyphicon-exclamation-sign"></i> Regulasi Balap</a></li>
                        <li><a href="#"><i class="glyphicon glyphicon-wrench"></i> Regulasi Teknis</a></li>
                        <li role="separator" class="divider"></li>
                        <li class="dropdown-header">AD ART</li>
                        <li><a href="#"><i class="glyphicon glyphicon-briefcase"></i> AD ART VBI</a></li>
                    </ul>
                </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li ng-if="akun === '1'" ng-class="{ active: isActive('/daftar')}" ng-class="{ active: isActive('/masuk')}" class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                       aria-expanded="false"><i class="glyphicon glyphicon-user"></i> Akun<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#/daftar"><i class="glyphicon glyphicon-plus"></i> Register</a></li>
                        <li><a href="#/masuk"><i class="glyphicon glyphicon-log-in"></i> Login</a></li>
                    </ul>
                </li>
                <li ng-if="akun === '2'" ng-class="{ active: isActive('/profil')}" ng-class="{ active: isActive('/ubah-data')}"
                    class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                       aria-expanded="false"><i class="glyphicon glyphicon-cog"></i> Akun<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#"><i class="glyphicon glyphicon-user"></i> Profil</a></li>
                        <li><a href="#"><i class="glyphicon glyphicon-pencil"></i> Ubah Data</a></li>
                        <li role="separator" class="divider"></li>
                        <li class="dropdown-header">Akun</li>
                        <li><a href="#"><i class="glyphicon glyphicon-log-out"></i> Logout</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>

<div class="container" style="padding-top: 70px; margin-bottom:50px" ng-view></div>

<nav class="navbar navbar-default navbar-fixed-bottom">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" target="_blank" href="http://www.facebook.com/VespaBalapIndonesiaOfficial">
                <img src="Public/Image/facebook.png" width="20px">
            </a>
            <a class="navbar-brand" target="_blank" href="http://www.twitter.com/vbi_id">
                <img src="Public/Image/twitter.png" width="20px">
            </a>
            <a class="navbar-brand" target="_blank" href="http://www.instagram.com/vbi_id">
                <img src="Public/Image/instagram.png" width="20px">
            </a>
            <a class="navbar-brand" target="_blank" href="mailto:official@vespabalapindonesia.net">
                <img src="Public/Image/email.png" width="20px">
            </a>
            <i class="navbar-brand" href="">
                <small style="font-size: 10px">VBI SGP @ 2016</small>
            </i>
        </div>
    </div>
</nav>

<script type="text/javascript" src="Public/Jquery/jquery-2.1.1.min.js"></script>
<script type="text/javascript" src="Public/Bootstrap/js/bootstrap.min.js"></script>
<noscript>
    <img class="img-responsive" style="width: 100%; height: 100%" src="http:/localhost/api-vbi/Images/jsoff.jpg" alt="Javascript not enabled" />
</noscript>
</body>
</html>