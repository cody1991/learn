<?php
  //create short variable names
  $from = $_POST['from'];
  $title = $_POST['title'];
  $body = $_POST['body'];

  $to_email = 'luke@localhost';

  // Tell gpg where to find the key ring
  // On this system, user nobody's home directory is /tmp/
  putenv('GNUPGHOME=/tmp/.gnupg');

  //create a unique file name
  $infile = tempnam('', 'pgp');
  $outfile = $infile.'.asc';

  //write the user's text to the file
  $fp = fopen($infile, 'w');
  fwrite($fp, $body);
  fclose($fp);

  //set up our command
  $command =  "/usr/local/bin/gpg -a \\
               --recipient 'Luke Welling <luke@tangledweb.com.au>' \\
               --encrypt -o $outfile $infile";

  // execute our gpg command
  system($command, $result);

  //delete the unencrypted temp file
  unlink($infile);

  if($result==0) {
    $fp = fopen($outfile, 'r');
    if((!$fp) || (filesize($outfile)==0)) {
      $result = -1;
    } else {
      //read the encrypted file
      $contents = fread ($fp, filesize ($outfile));

      //delete the encrypted temp file
      unlink($outfile);

      mail($to_email, $title, $contents, "From: ".$from."\n");
      echo '<h1>Message Sent</h1>
            <p>Your message was encrypted and sent.</p>
            <p>Thank you.</p>';
    }
  }

  if($result!=0) {
    echo '<h1>Error:</h1>
          <p>Your message could not be encrypted.</p>
          <p>It has not been sent.</p>
          <p>Sorry.</p>';
  }
?>