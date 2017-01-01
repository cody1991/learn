<?php
  set_time_limit(180); // this script can be slow

  //create short variable names
  $name = $_POST['name'];
  $score = $_POST['score'];

  function pdf_replace($pattern, $replacement, $string) {
    $len = strlen( $pattern );
    $regexp = '';

    for ($i = 0; $i<$len; $i++) {
      $regexp .= $pattern[$i];
      if ($i<$len-1) {
        $regexp .= "(\)\-{0,1}[0-9]*\(){0,1}";
      }
    }
    return ereg_replace ( $regexp, $replacement, $string );
  }

  if(!$name || !$score) {
    echo "<h1>Error:</h1>
          <p>This page was called incorrectly</p>";
  } else {
    //generate the headers to help a browser choose the correct application
    header('Content-Disposition:  filename=cert.pdf');
    header('Content-type: application/pdf');

    $date = date('F d, Y');

    // open our template file
    $filename = 'PHPCertification.pdf';
    $fp = fopen ($filename, 'r');
    //read our template into a variable
    $output = fread($fp, filesize($filename));

    fclose ($fp);

    // replace the place holders in the template with our data
    $output = pdf_replace('<<NAME>>', strtoupper($name), $output);
    $output = pdf_replace('<<Name>>', $name, $output);
    $output = pdf_replace('<<score>>', $score, $output);
    $output = pdf_replace('<<mm/dd/yyyy>>', $date, $output);

    // send the generated document to the browser

    echo $output;
  }
?>
