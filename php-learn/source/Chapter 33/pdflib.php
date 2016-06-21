<?php
  // create short variable names
  $name = $_POST['name'];
  $score = $_POST['score'];

  if(!$name || !$score) {
    echo "<h1>Error:</h1>
          <p>This page was called incorrectly</p>";
  }  else  {
    $date = date( 'F d, Y' );

    // create a pdf document in memory
    $pdf = pdf_new();
    pdf_open_file($pdf, "");

    // set up name of font for later use
    $fontname = 'Times-Roman';

    // set up the page size in points and create page
    // US letter is 11" x 8.5" and there are approximately 72 points per inch
    $width = 11*72;
    $height = 8.5*72;
    pdf_begin_page($pdf, $width, $height);

    // draw our borders
    $inset = 20; // space between border and page edge
    $border = 10; // width of main border line
    $inner = 2; // gap within the border

    //draw outer border
    pdf_rect($pdf, $inset-$inner,
                   $inset-$inner,
                   $width-2*($inset-$inner),
                   $height-2*($inset-$inner));
    pdf_stroke($pdf);

    //draw main border $border points wide
    pdf_setlinewidth($pdf, $border);
    pdf_rect($pdf, $inset+$border/2,
                   $inset+$border/2,
                   $width-2*($inset+$border/2),
                   $height-2*($inset+$border/2));
    pdf_stroke($pdf);
    pdf_setlinewidth($pdf, 1.0);

    // draw inner border
    pdf_rect($pdf, $inset+$border+$inner,
                   $inset+$border+$inner,
                   $width-2*($inset+$border+$inner),
                   $height-2*($inset+$border+$inner));
    pdf_stroke($pdf);

    // add heading
    $font = pdf_findfont($pdf, $fontname, 'host', 0);
    if ($font) {
      pdf_setfont($pdf, $font, 48);
    }
    $startx = ($width - pdf_stringwidth($pdf, 'PHP Certification', $font, '12'))/2;
    pdf_show_xy($pdf, 'PHP Certification', $startx, 490);

    // add text
    $font = pdf_findfont($pdf, $fontname, 'host', 0);
    if ($font) {
      pdf_setfont($pdf, $font, 26);
    }
    $startx = 70;
    pdf_show_xy($pdf, 'This is to certify that:', $startx, 430);
    pdf_show_xy($pdf, strtoupper($name), $startx+90, 391);

    $font = pdf_findfont($pdf, $fontname, 'host', 0);
    if ($font)
      pdf_setfont($pdf, $font, 20);

    pdf_show_xy($pdf, 'has demonstrated that they are certifiable '.
                      'by passing a rigorous exam', $startx, 340);
    pdf_show_xy($pdf, 'consisting of three multiple choice questions.',
                       $startx, 310);

    pdf_show_xy($pdf, "$name obtained a score of $score".'%.', $startx, 260);

    pdf_show_xy($pdf, 'The test was set and overseen by the ', $startx, 210);
    pdf_show_xy($pdf, 'Fictional Institute of PHP Certification',
                      $startx, 180);
    pdf_show_xy($pdf, "on $date.", $startx, 150);
    pdf_show_xy($pdf, 'Authorised by:', $startx, 100);

    // add bitmap signature image
    $signature = pdf_load_image($pdf, 'png', '/Program Files/Apache Software Foundation/Apache2.2/htdocs/phpmysql4e/chapter33/signature.png', '');
    pdf_fit_image($pdf, $signature, 200, 75, '');
    pdf_close_image($pdf, $signature);

    // set up colors for ribbon
	pdf_setcolor($pdf, 'fill', 'rgb', 0, 0, .4, 0);  // dark blue
	pdf_setcolor($pdf, 'stroke', 'rgb', 0, 0, 0, 0); // black

    // draw ribbon 1
    pdf_moveto($pdf, 630, 150);
    pdf_lineto($pdf, 610, 55);
    pdf_lineto($pdf, 632, 69);
    pdf_lineto($pdf, 646, 49);
    pdf_lineto($pdf, 666, 150);
    pdf_closepath($pdf);
    pdf_fill($pdf);

    // outline ribbon 1
    pdf_moveto($pdf, 630, 150);
    pdf_lineto($pdf, 610, 55);
    pdf_lineto($pdf, 632, 69);
    pdf_lineto($pdf, 646, 49);
    pdf_lineto($pdf, 666, 150);
    pdf_closepath($pdf);
    pdf_stroke($pdf);

    // draw ribbon 2
    pdf_moveto($pdf, 660, 150);
    pdf_lineto($pdf, 680, 49);
    pdf_lineto($pdf, 695, 69);
    pdf_lineto($pdf, 716, 55);
    pdf_lineto($pdf, 696, 150);
    pdf_closepath($pdf);
    pdf_fill($pdf);

    // outline ribbon 2
    pdf_moveto($pdf, 660, 150);
    pdf_lineto($pdf, 680, 49);
    pdf_lineto($pdf, 695, 69);
    pdf_lineto($pdf, 716, 55);
    pdf_lineto($pdf, 696, 150);
    pdf_closepath($pdf);
    pdf_stroke($pdf);

	pdf_setcolor($pdf, 'fill', 'rgb', 1, 0, 0, 0); // red

    //draw rosette
    draw_star(665, 175, 32, 57, 10, $pdf, true);

    //outline rosette
    draw_star(665, 175, 32, 57, 10, $pdf, false);

    // finish up the page and prepare to output
    pdf_end_page($pdf);
    pdf_close($pdf);
    $data = pdf_get_buffer($pdf);

    // generate the headers to help a browser choose the correct application
    header('Content-type: application/pdf');
    header('Content-disposition: inline; filename=test.pdf');
    header('Content-length: ' . strlen($data));

    // output PDF
    echo $data;
  }

  function draw_star($centerx, $centery, $points, $radius,
                     $point_size, $pdf, $filled)  {
    $inner_radius = $radius-$point_size;

    for ($i = 0; $i<=$points*2; $i++)  {
      $angle= ($i*2*pi())/($points*2);

      if($i%2) {
        $x = $radius*cos($angle) + $centerx;
        $y = $radius*sin($angle) + $centery;
      } else {
        $x = $inner_radius*cos($angle) + $centerx;
        $y = $inner_radius*sin($angle) + $centery;
      }

      if($i==0) {
        pdf_moveto($pdf, $x, $y);
      } else if ($i==$points*2) {
        pdf_closepath($pdf);
      } else {
        pdf_lineto($pdf, $x, $y);
      }
    }
    if($filled) {
      pdf_fill_stroke($pdf);
    } else {
      pdf_stroke($pdf);
    }
  }
?>
