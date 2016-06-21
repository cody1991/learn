<?php
  //create short variable names
  $q1 = $_POST['q1'];
  $q2 = $_POST['q2'];
  $q3 = $_POST['q3'];
  $name = $_POST['name'];

  // check that all the data was received
  if(($q1=='') || ($q2=='') || ($q3=='') || ($name=='')) {
    echo "<h1>
          <p align=\"center\">
          <img src=\"rosette.gif\" alt=\"\" />
          Sorry:
          <img src=\"rosette.gif\" alt=\"\" /></p></h1>
          <p>You need to fill in your name and answer all questions.</p>";
  } else {
    //add up the scores
    $score = 0;
    if ($q1 == 1) {
      // the correct answer for q1 is 1
      $score++;
    }
    if($q2 == 1) {
      // the correct answer for q2 is 1
      $score++;
    }
    if($q3 == 1) {
      // the correct answer for q3 is 1
      $score++;
    }

    //convert score to a percentage
    $score = $score / 3 * 100;

    if($score < 50) {
      // this person failed
      echo "<h1>
          <p align=\"center\">
          <img src=\"rosette.gif\" alt=\"\" />
          Sorry:
          <img src=\"rosette.gif\" alt=\"\" /></p></h1>
          <p>You need to score at least 50% to pass the exam.</p>";
    }  else {
      // create a string containing the score to one decimal place
      $score = number_format($score, 1);
      echo "<h1 align=\"center\">
            <img src=\"rosette.gif\" alt=\"\" />
            Congratulations!
            <img src=\"rosette.gif\" alt=\"\" /></h1>

            <p>Well done ".$name.", with a score of ".$score."%,
            you have passed the exam.</p>";

      // provide links to scripts that generate the certificates
      echo "<p>Please click here to download your certificate as
             a Microsoft Word (RTF) file.</p>
            <form action=\"rtf.php\" method=\"post\">
            <div align=\"center\">
            <input type=\"image\" src=\"certificate.gif\" border=\"0\">
            </div>
            <input type=\"hidden\" name=\"score\" value=\"".$score."\"/>
            <input type=\"hidden\" name=\"name\" value=\"".$name."\"/>
            </form>

            <p>Please click here to download your certificate as
            a Portable Document Format (PDF) file.</p>
            <form action=\"pdf.php\" method=\"post\">
            <div align=\"center\">
            <input type=\"image\" src=\"certificate.gif\" border=\"0\">
            </div>
            <input type=\"hidden\" name=\"score\" value=\"".$score."\"/>
            <input type=\"hidden\" name=\"name\" value=\"".$name."\"/>
            </form>

            <p>Please click here to download your certificate as
            a Portable Document Format (PDF) file generated with PDFLib.</p>
            <form action=\"pdflib.php\" method=\"post\">
            <div align=\"center\">
            <input type=\"image\" src=\"certificate.gif\" border=\"0\">
            </div>
            <input type=\"hidden\" name=\"score\" value=\"".$score."\"/>
            <input type=\"hidden\" name=\"name\" value=\"".$name."\"/>
            </form>";
     }
  }
?>
