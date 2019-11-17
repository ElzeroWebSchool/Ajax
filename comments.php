<?php 

  $comments = array('Thanks', 'Thank You', 'Good');

  if (isset($_POST['comment'])) {

    array_push($comments, $_POST['comment']);

  }

  foreach ($comments as $com) {

    echo $com . ' <br>';

  }