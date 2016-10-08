<?php

function get() {
  echo $_GET['type'];
}


?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title><?php get(); ?></title>
    <link href="../css/<?php get(); ?>.css" rel="stylesheet" media="screen" title="no title" charset="utf-8">
    <script src="https://unpkg.com/react@15.3.1/dist/react.js"></script>
    <script src="https://unpkg.com/react-dom@15.3.1/dist/react-dom.js"></script>
    <script src="https://unpkg.com/babel-core@5.8.38/browser.min.js"></script>
    <script src="https://unpkg.com/jquery@3.1.0/dist/jquery.min.js"></script>
    <script src="https://unpkg.com/remarkable@1.6.2/dist/remarkable.min.js"></script>
    <script type="text/babel" src="../js/<?php get(); ?>.js"></script>
  </head>
  <body>

  </body>

</html>
