<html>
<head>
  <title>Uploading...</title>
</head>
<body>
<h1>Uploading file...</h1>
<?php

//Check to see if an error code was generated on the upload attempt
  if ($_FILES['userfile']['error'] > 0)
  {
    echo 'Problem: ';
    switch ($_FILES['userfile']['error'])
    {
      case 1:	echo 'File exceeded upload_max_filesize';
	  			break;
      case 2:	echo 'File exceeded max_file_size';
	  			break;
      case 3:	echo 'File only partially uploaded';
	  			break;
      case 4:	echo 'No file uploaded';
	  			break;
	  case 6:   echo 'Cannot upload file: No temp directory specified.';
	  			break;
	  case 7:   echo 'Upload failed: Cannot write to disk.';
	  			break;
    }
    exit;
  }

  // Does the file have the right MIME type?
  if ($_FILES['userfile']['type'] != 'text/plain')
  {
    echo 'Problem: file is not plain text';
    exit;
  }

  // put the file where we'd like it
  $upfile = '/uploads/'.$_FILES['userfile']['name'];

  if (is_uploaded_file($_FILES['userfile']['tmp_name'])) 
  {
     if (!move_uploaded_file($_FILES['userfile']['tmp_name'], $upfile))
     {
        echo 'Problem: Could not move file to destination directory';
        exit;
     }
  } 
  else 
  {
    echo 'Problem: Possible file upload attack. Filename: ';
    echo $_FILES['userfile']['name'];
    exit;
  }


  echo 'File uploaded successfully<br><br>'; 

  // reformat the file contents
  $fp = fopen($upfile, 'r');
  $contents = fread ($fp, filesize ($upfile));
  fclose ($fp);
 
  $contents = strip_tags($contents);
  $fp = fopen($upfile, 'w');
  fwrite($fp, $contents);
  fclose($fp);

  // show what was uploaded
  echo 'Preview of uploaded file contents:<br><hr>';
  echo $contents;
  echo '<br><hr>';

?>
</body>
</html>
