<pre>
<?php
  $json = file_get_contents(
    'http://m.maizuo.com/v4/api/billboard/home?t=1484468549423&callback=?'
  );

  print_r($json);

  echo '<hr/>';

  // 隐式
  $handle = fopen('/etc/hosts', 'rb');
  while (feof($handle) !== true) {
    echo fgets($handle);
  }
  fclose($handle);

  echo '<hr/>';

  // 显式
  $handle = fopen('file:///etc/hosts', 'rb');
  while (feof($handle) !== true) {
    echo fgets($handle);
  }
  fclose($handle);

  echo '<hr/>';

  $handle = fopen('data.txt','rb');
  stream_filter_append($handle, 'string.toupper');
  while(feof($handle)!==true){
    echo fgets($handle);
  }
  fclose($handle);

  echo '<hr/>';


  $handle = fopen('php://filter/read=string.toupper/resource=data.txt','rb');
  while(feof($handle)!==true){
    echo fgets($handle);
  }
  fclose($handle);

  echo "<hr/>";

  // $dateStart = new DateTime();
  // $dateInterval = DateInterval::createFromDateString('-1 day');
  // $datePeriod = new DatePeriod($dateStart,$dateInterval,30);

  // foreach($datePeriod as $date){
  //   // print_r($date);
  //   $file = 'sftp://USER:PASS@rsync.net/' . $date->format('Y-m-d') . '.log.bz2';
  //   echo $file . '<br/>';

  //   if(file_exists($file)){
  //     $handle = fopen($file,'rb');
  //     stream_filter_append($handle,'bzip2.decompress');
  //     while(feof($handle) !== true) {
  //       $line = fgets($handle);
  //       if(strpos($line,'www.example.com') !== false) {
  //         fwrite(STDOUT,$line);
  //       }
  //     }
  //     fclose($handle);
  //   } else {
  //     echo 'file not exists';
  //   }
  // }

  class DirtyWordsFilter extends php_user_filter
  {
    // @param resource $in 流来的桶队列
    // @param resource $out 流走的桶队列
    // @oaram int #consumed 处理的字节数
    // @param bool $closing 是流中最后一个桶队列吗

    // 接收，处理再装运桶中的流数据。我们迭代桶中队列 $in ，把脏字替换成审查后的值。
    // 最后返回的 PSFS_PASS_ON 常量，表示操作成功
    // bin 上游流来一个队列，有一个或者多个桶，桶中是出发地流来的数据
    // bout 由一个桶或者多个桶组成的队列，流向下游的流目的地
    // &$consumed 自定义的过滤器处理的流数据总字节数
    public function filter($bin, $bout, &$consumed) {
      $words = array('grime', 'dirt', 'grease');
      $wordData = array();
      foreach ($words as $word) {
        // array_fill(start_index, num, value)
        $replacement = array_fill(0, mb_strlen($word), '*');
        // implode — 将一个一维数组的值转化为字符串
        // implode(glue, pieces)
        $wordData[$word] = implode('', $replacement);

        // print_r($replacement);
      }
      print_r($wordData);
      $bad = array_keys($wordData);
      print_r($bad);
      $good = array_values($wordData);
      print_r($good);

      // stream_bucket_make_writeable(brigade)
      while ($bucket = stream_bucket_make_writeable($bin)) {
        // 审查桶中的脏字
        // str_replace(search, replace, subject)
        $bucket->data = str_replace($bad, $good, $bucket->data);

        // 增加已处理的桶数量
        $consumed += $bucket->datalen;

        // 把桶放入流向下游的队列中
        // stream_bucket_append(brigade, bucket)
        stream_bucket_append($bout, $bucket);
      }

      return PSFS_PASS_ON;
    }
  }

  // 注册这个自定义的过滤器
  stream_filter_register('dirty_words_filter', 'DirtyWordsFilter');
  $handle = fopen('data.txt','rb');
  stream_filter_append($handle, 'dirty_words_filter');
  while(feof($handle) !== true) {
    echo fgets($handle);
  }
  fclose($handle);
?>
</pre>
