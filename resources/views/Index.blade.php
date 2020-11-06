<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!-- Favicon -->
    <link href="images/favicon.ico" rel="shortcut icon" />

    <!-- fontawesome icon -->
    <script src="https://kit.fontawesome.com/db6d5fc850.js" crossorigin="anonymous"></script>

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,300i,400,400i,700,700i" rel="stylesheet">


    <!-- Stylesheets -->
    <link href="{{ asset('css/style.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="css/bootstrap.min.css"/>
    <!-- <link rel="stylesheet" href="css/flaticon.css"/> -->
    <link rel="stylesheet" href="css/slicknav.min.css" />
    <link rel="stylesheet" href="css/jquery-ui.min.css" />
    <link rel="stylesheet" href="css/animate.css" />

     <!-- Owl carousel -->
    <link rel="stylesheet" href="css/owl.carousel.min.css">
<link rel="stylesheet" href="css/owl.theme.default.min.css">

</head>

<body>

    <div id="app">

        
        <v-header></v-header>
        <!-- <v-herosection></v-herosection>
<v-featuressection></v-featuressection>
<v-latestproducts></v-latestproducts>
<v-productsection></v-productsection>
<v-form></v-form>
<v-footer></v-footer> -->
        <router-view></router-view>


    </div>





    <!--====== Javascripts & Jquery ======-->
    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.slicknav.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/jquery.nicescroll.min.js"></script>
    <script src="js/jquery.zoom.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="{{ asset('js/main.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>


    <!-- User script -->
    <script src="{{ asset('js/script.js') }}"></script>

<!--  -->

</body>

</html>
