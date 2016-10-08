<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Skirmish And Slots</title>
    <link rel="stylesheet" href="css/style.css" media="screen" title="no title" charset="utf-8">
  </head>
  <body>
    <div class="gl-main main">
      <div class="participants block" ld-href="ajax.php?block=participants" onclick="blockClick(this)"></div>
      <div class="achievements block" ld-href="ajax.php?block=achievements" onclick="blockClick(this)"></div>
      <div class="others block" ld-href="ajax.php?block=others" onclick="blockClick(this)"></div>
      <div class="about block" ld-href="ajax.php?block=about" onclick="blockClick(this)"></div>
    </div>
  </body>
  <script type='text/javascript' src="js/jquery-2.1.4.min.js"></script>
  <script type='text/javascript' src="js/app.js"></script>
  <script type="text/javascript">
    function blockClick(event) {
      var href = $(event).attr("ld-href");
      $('body').load(href);
    }

    $( document ).ready(function() {
      $('.participants').hover(function() {
        $('.gl-main').css("background", "url(img/bg-participants.jpg)");
        $('.gl-main').css("background-size", "100%");
      });

      $( ".participants").mouseout(function() {
        $('.gl-main').css("background", "url(img/bg.jpg)");
        $('.gl-main').css("background-size", "100%");
      });
      $('.achievements').hover(function() {
        $('.gl-main').css("background", "url(img/bg-achievements.jpg)");
        $('.gl-main').css("background-size", "100%");
      });

      $( ".achievements").mouseout(function() {
        $('.gl-main').css("background", "url(img/bg.jpg)");
        $('.gl-main').css("background-size", "100%");
      });
      $('.others').hover(function() {
        $('.gl-main').css("background", "url(img/bg-others.jpg)");
        $('.gl-main').css("background-size", "100%");
      });

      $( ".others").mouseout(function() {
        $('.gl-main').css("background", "url(img/bg.jpg)");
        $('.gl-main').css("background-size", "100%");
      });
      $('.about').hover(function() {
        $('.gl-main').css("background", "url(img/bg-about.jpg)");
        $('.gl-main').css("background-size", "100%");
      });

      $( ".about").mouseout(function() {
        $('.gl-main').css("background", "url(img/bg.jpg)");
        $('.gl-main').css("background-size", "100%");
      });
    });

  </script>
</html>
