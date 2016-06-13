<?php
if (isset($_GET['url'])) {
    $getPhpSelf = $_SERVER['PHP_SELF'];
    $phpSelf = explode('/', $getPhpSelf);
    $folder = $phpSelf[1];
    // Redirect
    $url = 'http://' . $_SERVER['HTTP_HOST'] . '/' . $folder . '/';
    //

    if ($_GET['url'] == 'admin') {
        include_once 'back.php';
    } else {
        include_once 'front.php';
    }
} else {
    include_once 'front.php';
}
?>