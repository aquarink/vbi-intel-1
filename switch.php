<?php
if(isset($_GET['url'])) {
  $getPhpSelf = $_SERVER['PHP_SELF'];
  $phpSelf = explode('/', $getPhpSelf);
  $folder = $phpSelf[1];
  // Redirect
  $url = 'http://'.$_SERVER['HTTP_HOST'].'/'.$folder.'/';
  //header("location: $url");
  echo "string";
} else {
  echo "stringasas";
}
?>
